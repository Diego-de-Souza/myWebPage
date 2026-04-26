import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, forkJoin } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  homepage?: string | null;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubPortfolioData {
  repos: GitHubRepo[];
  user: GitHubUser | null;
}

export interface WeatherData {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  hourly?: {
    temperature_2m: number[];
    time: string[];
  };
}

export interface RandomActivity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  accessibility: number;
  key: string;
}

export interface JokeResponse {
  setup: string;
  punchline: string;
  type: string;
  id: number;
}

export interface QuoteResponse {
  text: string;
  author: string;
}

export interface DogImage {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  getGitHubPortfolio(username: string, includeForks = false): Observable<GitHubPortfolioData> {
    const cleanUser = username.trim();
    if (!cleanUser) {
      return of({ repos: [], user: null });
    }

    const reposUrl = `https://api.github.com/users/${cleanUser}/repos?sort=updated&per_page=12&type=public`;
    const userUrl = `https://api.github.com/users/${cleanUser}`;

    return forkJoin({
      repos: this.http.get<GitHubRepo[]>(reposUrl).pipe(catchError(() => of([]))),
      user: this.http.get<GitHubUser>(userUrl).pipe(catchError(() => of(null)))
    }).pipe(
      map(({ repos, user }) => {
        const filtered = includeForks ? repos : repos.filter((repo) => !repo.fork);
        const ordered = filtered.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        return { repos: ordered, user };
      }),
      catchError(() => of({ repos: [], user: null }))
    );
  }

  getWeather(latitude: number, longitude: number): Observable<WeatherData | null> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&timezone=auto`;
    return this.http.get<WeatherData>(url).pipe(catchError(() => of(null)));
  }

  getRandomActivity(): Observable<RandomActivity | null> {
    const activities: RandomActivity[] = [
      { activity: 'Ler um livro interessante', type: 'educacao', participants: 1, price: 0, accessibility: 0.1, key: '1' },
      { activity: 'Fazer exercicios em casa', type: 'exercicio', participants: 1, price: 0, accessibility: 0.2, key: '2' },
      { activity: 'Cozinhar uma receita nova', type: 'culinaria', participants: 1, price: 0.3, accessibility: 0.3, key: '3' },
      { activity: 'Assistir a um documentario', type: 'entretenimento', participants: 1, price: 0, accessibility: 0.1, key: '4' },
      { activity: 'Organizar o ambiente de trabalho', type: 'produtividade', participants: 1, price: 0, accessibility: 0.2, key: '5' },
      { activity: 'Aprender uma nova habilidade online', type: 'educacao', participants: 1, price: 0, accessibility: 0.3, key: '6' },
      { activity: 'Praticar meditacao', type: 'bem-estar', participants: 1, price: 0, accessibility: 0.1, key: '7' },
      { activity: 'Escrever em um diario', type: 'criatividade', participants: 1, price: 0, accessibility: 0.1, key: '8' }
    ];
    return of(activities[Math.floor(Math.random() * activities.length)]);
  }

  getRandomJoke(): Observable<JokeResponse | null> {
    return this.http
      .get<JokeResponse>('https://official-joke-api.appspot.com/random_joke')
      .pipe(catchError(() => of(null)));
  }

  getRandomQuote(): Observable<QuoteResponse | null> {
    const fallbackQuotes: QuoteResponse[] = [
      { text: 'A unica forma de fazer um excelente trabalho e amar o que voce faz.', author: 'Steve Jobs' },
      { text: 'O futuro pertence aqueles que acreditam na beleza de seus sonhos.', author: 'Eleanor Roosevelt' },
      { text: 'A melhor vinganca e o sucesso massivo.', author: 'Frank Sinatra' }
    ];

    // Em produção (Vercel), a rota /api/qod é same-origin e evita CORS.
    // Em desenvolvimento (ng serve), evitamos um 404 chamando o fallback direto.
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      if (host === 'localhost' || host === '127.0.0.1') {
        return of(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
      }
    }

    return this.http.get<{ contents?: { quotes?: QuoteResponse[] } }>('/api/qod').pipe(
      map((response) => response.contents?.quotes?.[0] || null),
      catchError(() => of(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]))
    );
  }

  getRandomDogImage(): Observable<DogImage | null> {
    return this.http
      .get<DogImage>('https://dog.ceo/api/breeds/image/random')
      .pipe(catchError(() => of(null)));
  }

  getMathFact(number?: number): Observable<string> {
    const num = number || Math.floor(Math.random() * 100);
    const facts = [
      `${num} e um numero interessante na sequencia matematica.`,
      `${num} pode ser expresso como soma de numeros primos de diferentes formas.`,
      `Na numerologia, ${num} representa energia e transformacao.`,
      `${num} aparece em padroes matematicos naturais.`,
      `O numero ${num} possui propriedades unicas na teoria dos numeros.`
    ];
    return of(facts[Math.floor(Math.random() * facts.length)]);
  }
}
