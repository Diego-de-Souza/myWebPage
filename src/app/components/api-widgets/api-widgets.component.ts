import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, WeatherData, RandomActivity, JokeResponse, QuoteResponse, DogImage } from '../../service/api.service';

@Component({
  selector: 'app-api-widgets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="api-widgets">
      <h2 class="widgets-title">
        <i class="fas fa-satellite-dish"></i>
        Widgets Interativos
      </h2>
      
      <div class="widgets-grid">
        <!-- Weather Widget -->
        <div class="widget weather-widget" [class.loading]="weatherLoading()">
          <div class="widget-header">
            <h3><i class="fas fa-cloud-sun"></i> Clima Atual</h3>
            <button (click)="loadWeather()" class="refresh-btn">
              <i class="fas fa-sync-alt" [class.spinning]="weatherLoading()"></i>
            </button>
          </div>
          
          @if (weather(); as w) {
            <div class="weather-content">
              <div class="temperature">{{ w.current_weather.temperature }}°C</div>
              <div class="weather-details">
                <span><i class="fas fa-wind"></i> {{ w.current_weather.windspeed }} km/h</span>
                <span><i class="fas fa-compass"></i> {{ w.current_weather.winddirection }}°</span>
              </div>
            </div>
          } @else if (weatherLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-temp"></div>
              <div class="skeleton-details"></div>
            </div>
          } @else {
            <div class="no-data">
              <i class="fas fa-exclamation-triangle"></i>
              <span>Localização não disponível</span>
            </div>
          }
        </div>
        
        <!-- Activity Widget -->
        <div class="widget activity-widget">
          <div class="widget-header">
            <h3><i class="fas fa-lightbulb"></i> Sugestão de Atividade</h3>
            <button (click)="loadRandomActivity()" class="refresh-btn">
              <i class="fas fa-dice" [class.spinning]="activityLoading()"></i>
            </button>
          </div>
          
          @if (activity(); as a) {
            <div class="activity-content">
              <p class="activity-text">{{ a.activity }}</p>
              <div class="activity-meta">
                <span class="type">{{ a.type }}</span>
                <span class="participants">{{ a.participants }} pessoa(s)</span>
              </div>
            </div>
          } @else if (activityLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-text"></div>
              <div class="skeleton-meta"></div>
            </div>
          }
        </div>
        
        <!-- Random Joke Widget -->
        <div class="widget joke-widget">
          <div class="widget-header">
            <h3><i class="fas fa-laugh"></i> Piada Aleatória</h3>
            <button (click)="loadRandomJoke()" class="refresh-btn">
              <i class="fas fa-smile" [class.spinning]="jokeLoading()"></i>
            </button>
          </div>
          
          @if (joke(); as j) {
            <div class="joke-content">
              <p class="setup">{{ j.setup }}</p>
              <p class="punchline">{{ j.punchline }}</p>
            </div>
          } @else if (jokeLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-text-long"></div>
            </div>
          }
        </div>
        
        <!-- Quote Widget -->
        <div class="widget quote-widget">
          <div class="widget-header">
            <h3><i class="fas fa-quote-left"></i> Citação Inspiradora</h3>
            <button (click)="loadRandomQuote()" class="refresh-btn">
              <i class="fas fa-lightbulb" [class.spinning]="quoteLoading()"></i>
            </button>
          </div>
          
          @if (quote(); as q) {
            <div class="quote-content">
              <blockquote>"{{ q.text }}"</blockquote>
              <cite>— {{ q.author }}</cite>
            </div>
          } @else if (quoteLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-text-long"></div>
              <div class="skeleton-text"></div>
            </div>
          }
        </div>
        
        <!-- Math Fact Widget -->
        <div class="widget math-widget">
          <div class="widget-header">
            <h3><i class="fas fa-calculator"></i> Fato Matemático</h3>
            <div class="number-input">
              <input 
                type="number" 
                [(ngModel)]="selectedNumber" 
                placeholder="Número"
                (keyup.enter)="loadMathFact()"
                min="0" 
                max="9999">
              <button (click)="loadMathFact()">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          
          @if (mathFact()) {
            <div class="math-content">
              <p>{{ mathFact() }}</p>
            </div>
          } @else if (mathFactLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-text-long"></div>
            </div>
          }
        </div>
        
        <!-- Dog Image Widget -->
        <div class="widget dog-widget">
          <div class="widget-header">
            <h3><i class="fas fa-dog"></i> Cachorro Fofo</h3>
            <button (click)="loadDogImage()" class="refresh-btn">
              <i class="fas fa-heart" [class.spinning]="dogImageLoading()"></i>
            </button>
          </div>
          
          @if (dogImage(); as dog) {
            <div class="dog-content">
              <img [src]="dog.message" alt="Cachorro fofo" class="dog-img">
            </div>
          } @else if (dogImageLoading()) {
            <div class="loading-skeleton">
              <div class="skeleton-image"></div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./api-widgets.component.scss']
})
export class ApiWidgetsComponent implements OnInit {
  private apiService = inject(ApiService);
  
  // Signals para gerenciar estados
  weather = signal<WeatherData | null>(null);
  weatherLoading = signal(false);
  
  activity = signal<RandomActivity | null>(null);
  activityLoading = signal(false);
  
  joke = signal<JokeResponse | null>(null);
  jokeLoading = signal(false);
  
  quote = signal<QuoteResponse | null>(null);
  quoteLoading = signal(false);
  
  dogImage = signal<DogImage | null>(null);
  dogImageLoading = signal(false);
  
  mathFact = signal<string>('');
  mathFactLoading = signal(false);
  selectedNumber = Math.floor(Math.random() * 100);
  

  
  ngOnInit(): void {
    this.loadInitialData();
  }
  
  private loadInitialData(): void {
    this.loadWeather();
    this.loadRandomActivity();
    this.loadRandomJoke();
    this.loadRandomQuote();
    this.loadDogImage();
    this.loadMathFact();
  }
  
  loadWeather(): void {
    this.weatherLoading.set(true);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.apiService.getWeather(latitude, longitude).subscribe({
            next: (data) => {
              this.weather.set(data);
              this.weatherLoading.set(false);
            },
            error: () => {
              this.weatherLoading.set(false);
            }
          });
        },
        () => {
          // Fallback para São Paulo
          this.apiService.getWeather(-23.5505, -46.6333).subscribe({
            next: (data) => {
              this.weather.set(data);
              this.weatherLoading.set(false);
            },
            error: () => {
              this.weatherLoading.set(false);
            }
          });
        }
      );
    }
  }
  
  loadRandomActivity(): void {
    this.activityLoading.set(true);
    this.apiService.getRandomActivity().subscribe({
      next: (data) => {
        this.activity.set(data);
        this.activityLoading.set(false);
      },
      error: () => {
        this.activityLoading.set(false);
      }
    });
  }
  
  loadRandomJoke(): void {
    this.jokeLoading.set(true);
    this.apiService.getRandomJoke().subscribe({
      next: (data) => {
        this.joke.set(data);
        this.jokeLoading.set(false);
      },
      error: () => {
        this.jokeLoading.set(false);
      }
    });
  }
  
  loadRandomQuote(): void {
    this.quoteLoading.set(true);
    this.apiService.getRandomQuote().subscribe({
      next: (data) => {
        this.quote.set(data);
        this.quoteLoading.set(false);
      },
      error: () => {
        this.quoteLoading.set(false);
      }
    });
  }
  
  loadDogImage(): void {
    this.dogImageLoading.set(true);
    this.apiService.getRandomDogImage().subscribe({
      next: (data) => {
        this.dogImage.set(data);
        this.dogImageLoading.set(false);
      },
      error: () => {
        this.dogImageLoading.set(false);
      }
    });
  }
  
  loadMathFact(): void {
    this.mathFactLoading.set(true);
    this.apiService.getMathFact(this.selectedNumber).subscribe({
      next: (data) => {
        this.mathFact.set(data);
        this.mathFactLoading.set(false);
      },
      error: () => {
        this.mathFactLoading.set(false);
      }
    });
  }
  

}