import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, GitHubRepo, GitHubUser } from '../../service/api.service';

@Component({
  selector: 'app-modern-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="modern-portfolio">
      <header class="portfolio-header">
        <h2>
          <i class="fab fa-github"></i>
          GitHub Portfolio
        </h2>
        <p class="subtitle">Atualizado em tempo real com os repositorios publicos mais recentes</p>

        <div class="github-config">
          <div class="input-group">
            <input
              type="text"
              [(ngModel)]="githubUsername"
              placeholder="Usuario do GitHub"
              (keyup.enter)="loadGitHubRepos()"
              class="github-input"
              aria-label="Usuario do GitHub" />
            <button
              (click)="loadGitHubRepos()"
              class="load-btn magnetic-btn"
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
      </header>

      @if (user(); as profile) {
        <section class="github-profile glass-effect tilt-card">
          <img [src]="profile.avatar_url" [alt]="'Avatar de ' + profile.login" loading="lazy" />
          <div class="profile-info">
            <h3>{{ profile.name || profile.login }}</h3>
            <p>{{ profile.bio || 'Sem bio publicada.' }}</p>
            <div class="profile-meta">
              <span>{{ profile.public_repos }} repos</span>
              <span>{{ profile.followers }} seguidores</span>
              <span>{{ profile.following }} seguindo</span>
            </div>
          </div>
          <a class="profile-link magnetic-btn" [href]="profile.html_url" target="_blank" rel="noopener noreferrer">
            Ver perfil
          </a>
        </section>
      }

      @if (loading()) {
        <div class="loading-grid" aria-live="polite">
          @for (i of [1,2,3,4,5,6]; track i) {
            <article class="repo-card skeleton">
              <div class="skeleton-header"></div>
              <div class="skeleton-content">
                <div class="skeleton-line"></div>
                <div class="skeleton-line short"></div>
              </div>
              <div class="skeleton-footer"></div>
            </article>
          }
        </div>
      } @else if (repos().length > 0) {
        <section class="repos-grid">
          @for (repo of repos(); track repo.id) {
            <article class="repo-card glass-effect tilt-card">
              <div class="repo-card__glow"></div>
              <header class="repo-header">
                <h3>
                  <i class="fas fa-folder-open"></i>
                  {{ repo.name }}
                </h3>
                <div class="repo-stats">
                  <span class="stars"><i class="fas fa-star"></i>{{ repo.stargazers_count }}</span>
                  <span class="forks"><i class="fas fa-code-branch"></i>{{ repo.forks_count }}</span>
                </div>
              </header>

              <p class="repo-description">{{ repo.description || 'Sem descricao cadastrada.' }}</p>

              <div class="repo-tech">
                @if (repo.language) {
                  <span class="language-tag" [style.background]="getLanguageColor(repo.language)">
                    {{ repo.language }}
                  </span>
                }
                @for (topic of repo.topics.slice(0, 3); track topic) {
                  <span class="topic-tag">{{ topic }}</span>
                }
              </div>

              <div class="repo-dates">
                <span><i class="fas fa-clock"></i> Atualizado: {{ formatDate(repo.updated_at) }}</span>
              </div>

              <div class="repo-actions">
                <a [href]="repo.html_url" target="_blank" rel="noopener noreferrer" class="view-repo magnetic-btn">
                  <i class="fab fa-github"></i>
                  Repositorio
                </a>
                @if (repo.homepage) {
                  <a [href]="repo.homepage" target="_blank" rel="noopener noreferrer" class="view-demo magnetic-btn">
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                  </a>
                }
              </div>
            </article>
          }
        </section>

        <section class="portfolio-stats">
          <article class="stat-card glass-effect tilt-card">
            <i class="fas fa-code"></i>
            <span class="stat-number">{{ repos().length }}</span>
            <span class="stat-label">Repositorios</span>
          </article>
          <article class="stat-card glass-effect tilt-card">
            <i class="fas fa-star"></i>
            <span class="stat-number">{{ totalStars() }}</span>
            <span class="stat-label">Stars totais</span>
          </article>
          <article class="stat-card glass-effect tilt-card">
            <i class="fas fa-code-branch"></i>
            <span class="stat-number">{{ totalForks() }}</span>
            <span class="stat-label">Forks totais</span>
          </article>
          <article class="stat-card glass-effect tilt-card">
            <i class="fas fa-laptop-code"></i>
            <span class="stat-number">{{ uniqueLanguages().length }}</span>
            <span class="stat-label">Linguagens</span>
          </article>
        </section>
      } @else {
        <div class="welcome-state glass-effect">
          <i class="fab fa-github-alt"></i>
          <h3>{{ errorMessage() || 'Nenhum repositorio encontrado' }}</h3>
          <p>Verifique o usuario informado ou limite de requisicoes da API.</p>
        </div>
      }
    </section>
  `,
  styleUrls: ['./modern-portfolio.component.scss']
})
export class ModernPortfolioComponent implements OnInit {
  private apiService = inject(ApiService);
  repos = signal<GitHubRepo[]>([]);
  user = signal<GitHubUser | null>(null);
  loading = signal(false);
  errorMessage = signal<string | null>(null);
  githubUsername = 'Diego-de-Souza';
  totalStars = signal(0);
  totalForks = signal(0);
  uniqueLanguages = signal<string[]>([]);

  private languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    SCSS: '#c6538c',
    Python: '#3572A5',
    Java: '#b07219',
    Kotlin: '#a97bff',
    'C#': '#178600',
    Shell: '#89e051',
    Vue: '#41b883',
    Go: '#00add8'
  };

  ngOnInit(): void {
    this.loadGitHubRepos();
  }

  loadGitHubRepos(): void {
    if (!this.githubUsername.trim()) {
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    // Most portfolios have forks; keep them by default to avoid empty states.
    this.apiService.getGitHubPortfolio(this.githubUsername, true).subscribe({
      next: ({ repos, user }) => {
        this.repos.set(repos);
        this.user.set(user);
        this.calculateStats(repos);
        if (repos.length === 0) {
          this.errorMessage.set('Nenhum repositório encontrado para este usuário.');
        }
        this.loading.set(false);
      },
      error: () => {
        this.repos.set([]);
        this.user.set(null);
        this.errorMessage.set('Não foi possível carregar o portfólio agora. Tente novamente em instantes.');
        this.loading.set(false);
      }
    });
  }

  private calculateStats(repos: GitHubRepo[]): void {
    this.totalStars.set(repos.reduce((sum, repo) => sum + repo.stargazers_count, 0));
    this.totalForks.set(repos.reduce((sum, repo) => sum + repo.forks_count, 0));
    this.uniqueLanguages.set([
      ...new Set(repos.map((repo) => repo.language).filter((language): language is string => !!language))
    ]);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  getLanguageColor(language: string): string {
    return this.languageColors[language] || '#6b7280';
  }
}
