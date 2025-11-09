import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './service/theme.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'diego-dev';
  themeService = inject(ThemeService);
  sidebarExpanded = signal(false);
  
  ngOnInit(): void {
    // Inicializa o tema
    console.log('Tema atual:', this.themeService.currentTheme());
  }
}
