import { ChangeDetectionStrategy, Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { certificates } from '../../data/certificates-dados';
import { CertificatesModel } from '../../model/certificate-model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../../templates/dialog.template/dialog.template.component';
import { ThemeService } from '../../service/theme.service';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';

interface CertificateFilter {
  id: string;
  label: string;
  count: number;
}

interface CertificateStats {
  totalCertificates: number;
  totalHours: number;
  avgHoursPerCert: number;
  completedThisYear: number;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule, 
    MatDialogModule,
    IntersectionObserverDirective
  ],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent implements OnInit {
  private themeService = inject(ThemeService);
  private dialog = inject(MatDialog);

  // Signals
  selectedFilter = signal('all');
  showAll = signal(false);
  searchTerm = signal('');
  visibleCertificateIds = signal(new Set<number>());
  hoveredCertificate = signal<number | null>(null);

  // Computed properties
  currentTheme = computed(() => this.themeService.currentTheme());
  
  allCertificates = computed(() => 
    certificates
      .filter((item: any) => item.tipo === 'geral')
      .map((item: any) => item.itens)
      .flat() as CertificatesModel[]
  );

  filteredCertificates = computed(() => {
    const certs = this.allCertificates();
    const filter = this.selectedFilter();
    const search = this.searchTerm().toLowerCase();
    
    let filtered = certs;
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter(cert => 
        cert.formation.toLowerCase().includes(search)
      );
    }
    
    // Apply category filter
    if (filter !== 'all') {
      filtered = filtered.filter(cert => this.getCertificateCategory(cert) === filter);
    }
    
    return filtered;
  });

  displayedCertificates = computed(() => {
    const certs = this.filteredCertificates();
    return this.showAll() ? certs : certs.slice(0, 6);
  });

  certificateStats = computed((): CertificateStats => {
    const certs = this.allCertificates();
    const currentYear = new Date().getFullYear();
    
    return {
      totalCertificates: certs.length,
      totalHours: certs.reduce((sum, cert) => sum + (cert.carga_horaria || 0), 0),
      avgHoursPerCert: Math.round(certs.reduce((sum, cert) => sum + (cert.carga_horaria || 0), 0) / certs.length),
      completedThisYear: certs.filter(cert => {
        if (cert.data_conclusao === 'Cursando') return false;
        const year = new Date(cert.data_conclusao.split('/').reverse().join('-')).getFullYear();
        return year === currentYear;
      }).length
    };
  });

  // Filter options
  filterOptions: CertificateFilter[] = [
    { id: 'all', label: 'Todos', count: 0 },
    { id: 'development', label: 'Desenvolvimento', count: 0 },
    { id: 'cloud', label: 'Cloud & AWS', count: 0 },
    { id: 'education', label: 'Formação', count: 0 },
    { id: 'data', label: 'Dados', count: 0 },
    { id: 'mobile', label: 'Mobile', count: 0 }
  ];

  ngOnInit(): void {
    this.updateFilterCounts();
    this.initializeAnimations();
  }

  private updateFilterCounts(): void {
    const certs = this.allCertificates();
    
    this.filterOptions.forEach(filter => {
      if (filter.id === 'all') {
        filter.count = certs.length;
      } else {
        filter.count = certs.filter(cert => this.getCertificateCategory(cert) === filter.id).length;
      }
    });
  }

  private initializeAnimations(): void {
    setTimeout(() => {
      this.allCertificates().slice(0, 3).forEach(cert => {
        this.visibleCertificateIds.update(ids => new Set(ids.add(cert.id)));
      });
    }, 300);
  }

  getCertificateCategory(certificate: CertificatesModel): string {
    const formation = certificate.formation.toLowerCase();
    
    if (formation.includes('aws') || formation.includes('cloud')) return 'cloud';
    if (formation.includes('angular') || formation.includes('java') || formation.includes('fullstack') || formation.includes('front')) return 'development';
    if (formation.includes('engenharia') || formation.includes('tecno') || formation.includes('técnico')) return 'education';
    if (formation.includes('dados') || formation.includes('data')) return 'data';
    if (formation.includes('mobile') || formation.includes('android')) return 'mobile';
    
    return 'development';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      development: 'fas fa-code',
      cloud: 'fas fa-cloud',
      education: 'fas fa-graduation-cap',
      data: 'fas fa-chart-bar',
      mobile: 'fas fa-mobile-alt'
    };
    return icons[category as keyof typeof icons] || 'fas fa-certificate';
  }

  getCategoryColor(category: string): string {
    const colors = {
      development: '#3b82f6',
      cloud: '#f59e0b',
      education: '#10b981',
      data: '#8b5cf6',
      mobile: '#ec4899'
    };
    return colors[category as keyof typeof colors] || 'var(--accent-color)';
  }

  onFilterChange(filterId: string): void {
    this.selectedFilter.set(filterId);
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  toggleShowAll(): void {
    this.showAll.update(current => !current);
  }

  onCertificateVisible(isIntersecting: boolean, certificateId: number): void {
    if (isIntersecting) {
      this.visibleCertificateIds.update(ids => new Set(ids.add(certificateId)));
    }
  }

  isCertificateVisible(certificateId: number): boolean {
    return this.visibleCertificateIds().has(certificateId);
  }

  onCertificateHover(certificateId: number | null): void {
    this.hoveredCertificate.set(certificateId);
  }

  formatDate(dateString: string): string {
    if (dateString === 'Cursando') return 'Em Andamento';
    
    try {
      const [day, month, year] = dateString.split('/');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'short' 
      });
    } catch {
      return dateString;
    }
  }

  formatHours(hours: number): string {
    if (hours >= 1000) {
      return `${(hours / 1000).toFixed(1)}k horas`;
    }
    return `${hours}h`;
  }

  openCertificateDialog(certificate: CertificatesModel): void {
    const dialogData = {
      formation: certificate.formation,
      imagem: certificate.imagem
    };

    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      data: dialogData,
      width: '90vw',
      maxWidth: '800px',
      maxHeight: '90vh',
      panelClass: 'certificate-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Certificate dialog closed:', result);
    });
  }

  getStatusClass(dataConlusao: string): string {
    return dataConlusao === 'Cursando' ? 'status-ongoing' : 'status-completed';
  }

  getStatusIcon(dataConlusao: string): string {
    return dataConlusao === 'Cursando' ? 'fas fa-play' : 'fas fa-check';
  }
}
