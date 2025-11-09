import { Component, Input, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { interval, Subject, EMPTY } from 'rxjs';
import { takeUntil, switchMap, catchError, startWith } from 'rxjs/operators';
import { ThemeService } from '../../service/theme.service';


interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  description: string;
  feelsLike: number;
}

interface WeatherApiResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
  hourly: {
    temperature_2m: number[];
    weather_code: number[];
    time: string[];
  };
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private themeService = inject(ThemeService);
  private destroy$ = new Subject<void>();

  // Inputs
  @Input() menuAberto = '';
  @Input() menuFloat = '';
  @Input() showWeather = true;
  @Input() showTime = true;
  @Input() compact = false;

  // Signals
  currentDate = signal(new Date());
  weatherData = signal<WeatherData | null>(null);
  isLoading = signal(true);
  error = signal<string>('');
  isVisible = signal(false);

  // Computed properties
  formattedDate = computed(() => {
    const date = this.currentDate();
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  });

  formattedTime = computed(() => {
    const date = this.currentDate();
    return formatDate(date, 'HH:mm:ss', 'en-US');
  });

  currentTheme = computed(() => this.themeService.currentTheme());

  weatherIcon = computed(() => {
    const weather = this.weatherData();
    if (!weather) return 'fas fa-cloud';
    
    const code = weather.icon;
    const iconMap: { [key: string]: string } = {
      'clear-day': 'fas fa-sun',
      'clear-night': 'fas fa-moon',
      'rain': 'fas fa-cloud-rain',
      'snow': 'fas fa-snowflake',
      'sleet': 'fas fa-cloud-rain',
      'wind': 'fas fa-wind',
      'fog': 'fas fa-smog',
      'cloudy': 'fas fa-cloud',
      'partly-cloudy-day': 'fas fa-cloud-sun',
      'partly-cloudy-night': 'fas fa-cloud-moon'
    };
    
    return iconMap[code] || 'fas fa-cloud';
  });

  // Weather code mapping
  private getWeatherInfo(code: number): { icon: string; description: string } {
    const weatherCodes: { [key: number]: { icon: string; description: string } } = {
      0: { icon: 'clear-day', description: 'Céu limpo' },
      1: { icon: 'partly-cloudy-day', description: 'Principalmente limpo' },
      2: { icon: 'partly-cloudy-day', description: 'Parcialmente nublado' },
      3: { icon: 'cloudy', description: 'Nublado' },
      45: { icon: 'fog', description: 'Neblina' },
      48: { icon: 'fog', description: 'Neblina com geada' },
      51: { icon: 'rain', description: 'Garoa leve' },
      53: { icon: 'rain', description: 'Garoa moderada' },
      55: { icon: 'rain', description: 'Garoa densa' },
      61: { icon: 'rain', description: 'Chuva leve' },
      63: { icon: 'rain', description: 'Chuva moderada' },
      65: { icon: 'rain', description: 'Chuva forte' },
      71: { icon: 'snow', description: 'Neve leve' },
      73: { icon: 'snow', description: 'Neve moderada' },
      75: { icon: 'snow', description: 'Neve forte' },
      80: { icon: 'rain', description: 'Pancadas de chuva leves' },
      81: { icon: 'rain', description: 'Pancadas de chuva moderadas' },
      82: { icon: 'rain', description: 'Pancadas de chuva fortes' },
      95: { icon: 'rain', description: 'Tempestade' },
      96: { icon: 'rain', description: 'Tempestade com granizo leve' },
      99: { icon: 'rain', description: 'Tempestade com granizo forte' }
    };

    return weatherCodes[code] || { icon: 'cloudy', description: 'Tempo indefinido' };
  }

  ngOnInit() {
    // Update time every second
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.currentDate.set(new Date()));

    // Load weather data every 10 minutes
    interval(600000) // 10 minutes
      .pipe(
        startWith(0),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.loadWeatherData());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadWeatherData() {
    if (!this.showWeather) return;

    this.isLoading.set(true);
    this.error.set('');

    // Using São Paulo coordinates as default
    const lat = -23.5505;
    const lon = -46.6333;
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&timezone=America/Sao_Paulo&forecast_days=1`;

    this.http.get<WeatherApiResponse>(url)
      .pipe(
        catchError(error => {
          console.error('Weather API Error:', error);
          this.error.set('Erro ao carregar dados do tempo');
          this.isLoading.set(false);
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(response => {
        const weatherInfo = this.getWeatherInfo(response.current.weather_code);
        
        const weatherData: WeatherData = {
          location: 'São Paulo, SP',
          temperature: Math.round(response.current.temperature_2m),
          condition: weatherInfo.description,
          humidity: response.current.relative_humidity_2m,
          windSpeed: Math.round(response.current.wind_speed_10m),
          icon: weatherInfo.icon,
          description: weatherInfo.description,
          feelsLike: Math.round(response.current.temperature_2m) // Simplified
        };

        this.weatherData.set(weatherData);
        this.isLoading.set(false);
      });
  }

  getWidgetStyles() {
    const isFloat = this.menuFloat === 'true';
    const theme = this.currentTheme();
    
    return {
      'color': isFloat ? '#FFD700' : 'var(--text-primary)',
      'background': isFloat ? 'transparent' : 'var(--glass-background)',
      'border': isFloat ? 'none' : '1px solid var(--border-color)'
    };
  }

  onIntersection(isVisible: boolean) {
    this.isVisible.set(isVisible);
  }

  refreshWeather() {
    this.loadWeatherData();
  }
}
