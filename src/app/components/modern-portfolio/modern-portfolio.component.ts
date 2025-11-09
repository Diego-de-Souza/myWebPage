import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, GitHubRepo } from '../../service/api.service';

@Component({
  selector: 'app-modern-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modern-portfolio">
      <div class="portfolio-header">
        <h2>
          <i class="fab fa-github"></i>
          Projetos & Repositórios
        </h2>
        <p class="subtitle">Conectado diretamente com GitHub para sempre manter atualizado</p>
        
        <div class="github-config">
          <div class="input-group">
            <input 
              type="text" 
              [(ngModel)]="githubUsername" 
              placeholder="Usuário do GitHub"
              (keyup.enter)="loadGitHubRepos()"
              class="github-input">
            <button 
              (click)="loadGitHubRepos()" 
              class="load-btn"
              [disabled]="loading()">
              @if (loading()) {
                <i class="fas fa-spinner fa-spin"></i>
              } @else {
                <i class="fas fa-sync-alt"></i>
              }
              Carregar
            </button>
          </div>
        </div>
      </div>
      
      @if (loading()) {
        <div class="loading-grid">
          @for (i of [1,2,3,4,5,6]; track i) {
            <div class="repo-card skeleton">
              <div class="skeleton-header"></div>
              <div class="skeleton-content">
                <div class="skeleton-line"></div>
                <div class="skeleton-line short"></div>
              </div>
              <div class="skeleton-footer"></div>
            </div>
          }
        </div>
      } @else if (repos().length > 0) {
        <div class="repos-grid">
          @for (repo of repos(); track repo.id) {
            <div class="repo-card" [attr.data-language]="repo.language ? repo.language.toLowerCase() : ''">
              <div class="repo-header">
                <h3>
                  <i class="fas fa-folder-open"></i>
                  {{ repo.name }}
                </h3>
                <div class="repo-stats">
                  <span class="stars">
                    <i class="fas fa-star"></i>
                    {{ repo.stargazers_count }}
                  </span>
                  <span class="forks">
                    <i class="fas fa-code-branch"></i>
                    {{ repo.forks_count }}
                  </span>
                </div>
              </div>
              
              @if (repo.description) {
                <p class="repo-description">{{ repo.description }}</p>
              }
              
              <div class="repo-tech">
                @if (repo.language) {
                  <span class="language-tag" [attr.data-language]="repo.language.toLowerCase()">
                    {{ repo.language }}
                  </span>
                }
                @for (topic of repo.topics.slice(0, 3); track topic) {
                  <span class="topic-tag">{{ topic }}</span>
                }
              </div>
              
              <div class="repo-dates">
                <span class="created">
                  <i class="fas fa-calendar-plus"></i>
                  Criado: {{ formatDate(repo.created_at) }}
                </span>
                <span class="updated">
                  <i class="fas fa-clock"></i>
                  Atualizado: {{ formatDate(repo.updated_at) }}
                </span>
              </div>
              
              <div class="repo-actions">
                <a [href]="repo.html_url" target="_blank" class="view-repo">
                  <i class="fab fa-github"></i>
                  Ver no GitHub
                </a>
                @if (repo.homepage) {
                  <a [href]="repo.homepage" target="_blank" class="view-demo">
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                  </a>
                }
                <button (click)="copyCloneUrl(repo.clone_url)" class="clone-btn">
                  <i class="fas fa-copy"></i>
                  Clone
                </button>
              </div>
            </div>
          }
        </div>
        
        <div class="portfolio-stats">
          <div class="stat-card">
            <i class="fas fa-code"></i>
            <span class="stat-number">{{ repos().length }}</span>
            <span class="stat-label">Repositórios</span>
          </div>
          <div class="stat-card">
            <i class="fas fa-star"></i>
            <span class="stat-number">{{ totalStars() }}</span>
            <span class="stat-label">Stars Total</span>
          </div>
          <div class="stat-card">
            <i class="fas fa-code-branch"></i>
            <span class="stat-number">{{ totalForks() }}</span>
            <span class="stat-label">Forks Total</span>
          </div>
          <div class="stat-card">
            <i class="fas fa-laptop-code"></i>
            <span class="stat-number">{{ uniqueLanguages().length }}</span>
            <span class="stat-label">Linguagens</span>
          </div>
        </div>
      }
      
      @if (githubUsername && !loading() && repos().length === 0) {
        <div class="no-repos">
          <i class="fab fa-github-alt"></i>
          <h3>Nenhum repositório encontrado</h3>
          <p>Verifique se o usuário existe e possui repositórios públicos.</p>
        </div>
      }
      
      @if (!githubUsername && !loading()) {
        <div class="welcome-state">
          <i class="fab fa-github"></i>
          <h3>Conecte ao GitHub</h3>
          <p>Digite seu usuário do GitHub para exibir seus repositórios automaticamente.</p>
        </div>
      }
    </div>
  `,
  styleUrls: ['./modern-portfolio.component.scss']
})
export class ModernPortfolioComponent implements OnInit {
  private apiService = inject(ApiService);
  
  // Signals
  repos = signal<GitHubRepo[]>([]);
  loading = signal(false);
  githubUsername = 'Diego-de-Souza'; // Usuário padrão
  
  // Computed signals
  totalStars = signal(0);
  totalForks = signal(0);
  uniqueLanguages = signal<string[]>([]);
  
  ngOnInit(): void {
    this.loadGitHubRepos();
  }
  
  loadGitHubRepos(): void {
    if (!this.githubUsername.trim()) return;
    
    this.loading.set(true);
    
    this.apiService.getGitHubRepos(this.githubUsername).subscribe({
      next: (repos) => {
        this.repos.set(repos);
        this.calculateStats(repos);
        this.loading.set(false);
      },
      error: () => {
        this.repos.set([]);
        this.loading.set(false);
      }
    });
  }
  
  private calculateStats(repos: GitHubRepo[]): void {
    const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
    
    this.totalStars.set(stars);
    this.totalForks.set(forks);
    this.uniqueLanguages.set(languages);
  }
  
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('pt-BR');
  }
  
  async copyCloneUrl(url: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(url);
      // Você pode adicionar um toast notification aqui
    } catch (err) {
      console.error('Erro ao copiar URL:', err);
    }
  }
}