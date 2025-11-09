import { Component } from '@angular/core';
import { SlideComponent } from '../../components/slide/slide.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { EducationComponent } from '../../components/education/education.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuFloatComponent } from '../../components/menu-float/menu-float.component';
import { HeaderResponsiveComponent } from '../../components/header-responsive/header-responsive.component';
import { ModernPortfolioComponent } from '../../components/modern-portfolio/modern-portfolio.component';
import { ApiWidgetsComponent } from '../../components/api-widgets/api-widgets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideComponent, 
    AboutComponent, 
    SkillsComponent,
    EducationComponent,
    PortfolioComponent,
    ModernPortfolioComponent,
    ApiWidgetsComponent,
    CertificatesComponent, 
    MenuFloatComponent,
    FooterComponent,
    HeaderResponsiveComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home-responsive.component.scss']
})
export class HomeComponent {

}
