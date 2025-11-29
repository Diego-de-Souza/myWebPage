import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  
  constructor(private router:Router, private renderer: Renderer2){  }
  
  openContato(){
    this.router.navigate(['/contato'])
  }
  
  openHome(){
    this.router.navigate([''])
  }

  openConhecimento(){
    this.router.navigate(['/conhecimento'])
  }

  openMenu() {
    const alturaMenu = document.querySelector('.headerResponsive');
    if (this.navIcon) {
      const navElement = this.navIcon.nativeElement;
      if (navElement.classList.contains('open')) {
        this.renderer.removeClass(navElement, 'open');
        this.renderer.setStyle(alturaMenu, 'height', '4em');
      } else {
        this.renderer.addClass(navElement, 'open');
        this.renderer.setStyle(alturaMenu, 'height', 'auto');
      }
    }
  }
}
