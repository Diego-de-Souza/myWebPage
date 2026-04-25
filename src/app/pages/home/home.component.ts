import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SlideComponent } from '../../components/slide/slide.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { EducationComponent } from '../../components/education/education.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuFloatComponent } from '../../components/menu-float/menu-float.component';
import { ModernPortfolioComponent } from '../../components/modern-portfolio/modern-portfolio.component';
import { ApiWidgetsComponent } from '../../components/api-widgets/api-widgets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlideComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    PortfolioComponent,
    ModernPortfolioComponent,
    ApiWidgetsComponent,
    CertificatesComponent,
    MenuFloatComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-responsive.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;
  private rafByElement = new WeakMap<HTMLElement, number>();

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    this.setupStaggerReveal();
    this.setupTiltCards();
    this.setupMagneticButtons();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }

  private setupStaggerReveal(): void {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    // On mobile, browser chrome + taller sections make a negative bottom rootMargin too aggressive,
    // which can prevent sections (ex: Skills) from ever crossing the intersection threshold.
    const rootMargin = isMobile ? '0px 0px 0px 0px' : '0px 0px -10% 0px';
    const threshold = isMobile ? 0.12 : 0.2;

    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });

    revealTargets.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${index * 150}ms`);
      this.revealObserver?.observe(element);
    });
  }

  private setupMagneticButtons(): void {
    const buttons = document.querySelectorAll<HTMLElement>('.magnetic-btn');
    buttons.forEach((button) => {
      button.addEventListener('mousemove', (event) => {
        const rect = button.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${offsetX * 0.18}px, ${offsetY * 0.18}px)`;
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
      });
    });
  }

  private setupTiltCards(): void {
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = (0.5 - y / rect.height) * 10;
        const frame = this.rafByElement.get(card);
        if (frame) {
          cancelAnimationFrame(frame);
        }
        const nextFrame = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
          card.style.setProperty('--glow-x', `${((x / rect.width) * 100).toFixed(2)}%`);
          card.style.setProperty('--glow-y', `${((y / rect.height) * 100).toFixed(2)}%`);
        });
        this.rafByElement.set(card, nextFrame);
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }
}
