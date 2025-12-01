import { Component, ElementRef, Renderer2, ViewChild, HostListener, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
import { ContactWhatsappComponent } from '../contact-whatsapp/contact-whatsapp.component';

@Component({
  selector: 'app-header-responsive',
  standalone: true,
  imports: [WeatherComponent, ContactWhatsappComponent],
  templateUrl: './header-responsive.component.html',
  styleUrl: './header-responsive.component.scss'
})
export class HeaderResponsiveComponent {
  tipoData: string = 'true';
  @ViewChild('navIcon') navIcon: ElementRef | undefined;
  isMenuOpen: boolean = false;

  constructor(private router:Router, private renderer: Renderer2){  }

  openContato(){
    this.router.navigate(['/contato'])
    this.closeMenu();
  }

  openHome(){
    this.router.navigate([''])
    this.closeMenu();
  }

  openConhecimento(){
    this.router.navigate(['/conhecimento'])
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.navIcon) {
      if (this.isMenuOpen) {
        this.renderer.addClass(this.navIcon.nativeElement, 'open');
      } else {
        this.renderer.removeClass(this.navIcon.nativeElement, 'open');
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (this.navIcon) {
      this.renderer.removeClass(this.navIcon.nativeElement, 'open');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const header = document.querySelector('.headerResponsive');
    if (header && !header.contains(event.target as Node) && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnInit() {
    this.closeMenu();
  }
}
