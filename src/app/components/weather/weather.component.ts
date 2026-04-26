import { Component, Input, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { interval, Subject, EMPTY } from 'rxjs';
import { takeUntil, switchMap, catchError, startWith } from 'rxjs/operators';
import { ThemeService } from '../../service/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../service/i18n.service';


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
  imports: [CommonModule, TranslateModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private themeService = inject(ThemeService);
  private i18n = inject(I18nService);
  private translate = inject(TranslateService);
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
    return formatDate(date, 'dd/MM/yyyy', this.i18n.currentLang());
  });

  formattedTime = computed(() => {
    const date = this.currentDate();
    return formatDate(date, 'HH:mm:ss', this.i18n.currentLang());
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
      0: { icon: 'clear-day', description: 'weather.codes.0' },
      1: { icon: 'partly-cloudy-day', description: 'weather.codes.1' },
      2: { icon: 'partly-cloudy-day', description: 'weather.codes.2' },
      3: { icon: 'cloudy', description: 'weather.codes.3' },
      45: { icon: 'fog', description: 'weather.codes.45' },
      48: { icon: 'fog', description: 'weather.codes.48' },
      51: { icon: 'rain', description: 'weather.codes.51' },
      53: { icon: 'rain', description: 'weather.codes.53' },
      55: { icon: 'rain', description: 'weather.codes.55' },
      61: { icon: 'rain', description: 'weather.codes.61' },
      63: { icon: 'rain', description: 'weather.codes.63' },
      65: { icon: 'rain', description: 'weather.codes.65' },
      71: { icon: 'snow', description: 'weather.codes.71' },
      73: { icon: 'snow', description: 'weather.codes.73' },
      75: { icon: 'snow', description: 'weather.codes.75' },
      80: { icon: 'rain', description: 'weather.codes.80' },
      81: { icon: 'rain', description: 'weather.codes.81' },
      82: { icon: 'rain', description: 'weather.codes.82' },
      95: { icon: 'rain', description: 'weather.codes.95' },
      96: { icon: 'rain', description: 'weather.codes.96' },
      99: { icon: 'rain', description: 'weather.codes.99' }
    };

    return weatherCodes[code] || { icon: 'cloudy', description: 'weather.codes.unknown' };
  }

  ngOnInit() {
    // When rendered inside fixed menus, keep it compact by default.
    if (this.menuFloat === 'true') {
      this.compact = true;
    }

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
          this.error.set(this.translate.instant('weather.errors.load'));
          this.isLoading.set(false);
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(response => {
        const weatherInfo = this.getWeatherInfo(response.current.weather_code);
        
        const weatherData: WeatherData = {
          location: 'weather.location.default',
          temperature: Math.round(response.current.temperature_2m),
          condition: this.translate.instant(weatherInfo.description),
          humidity: response.current.relative_humidity_2m,
          windSpeed: Math.round(response.current.wind_speed_10m),
          icon: weatherInfo.icon,
          description: this.translate.instant(weatherInfo.description),
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
