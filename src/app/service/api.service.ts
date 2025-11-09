import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

// Interfaces para as APIs
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  clone_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  homepage?: string;
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
  
  // GitHub API
  getGitHubRepos(username: string): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`)
      .pipe(
        map(repos => repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())),
        catchError(() => of([]))
      );
  }
  
  getGitHubUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`)
      .pipe(catchError(() => of(null)));
  }
  
  // Weather API
  getWeather(latitude: number, longitude: number): Observable<WeatherData | null> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&timezone=auto`;
    return this.http.get<WeatherData>(url)
      .pipe(catchError(() => of(null)));
  }
  
  // Random Activity API (替换为更可靠的API)
  getRandomActivity(): Observable<RandomActivity | null> {
    // Criamos atividades aleatórias localmente para garantir funcionamento
    const activities = [
      { activity: "Ler um livro interessante", type: "educação", participants: 1, price: 0, accessibility: 0.1, key: "1" },
      { activity: "Fazer exercícios em casa", type: "exercício", participants: 1, price: 0, accessibility: 0.2, key: "2" },
      { activity: "Cozinhar uma receita nova", type: "culinária", participants: 1, price: 0.3, accessibility: 0.3, key: "3" },
      { activity: "Assistir a um documentário", type: "entretenimento", participants: 1, price: 0, accessibility: 0.1, key: "4" },
      { activity: "Organizar o ambiente de trabalho", type: "produtividade", participants: 1, price: 0, accessibility: 0.2, key: "5" },
      { activity: "Aprender uma nova habilidade online", type: "educação", participants: 1, price: 0, accessibility: 0.3, key: "6" },
      { activity: "Praticar meditação", type: "bem-estar", participants: 1, price: 0, accessibility: 0.1, key: "7" },
      { activity: "Escrever em um diário", type: "criatividade", participants: 1, price: 0, accessibility: 0.1, key: "8" }
    ];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    return of(randomActivity);
  }
  
  // Random Joke API (替换Cat Fact)
  getRandomJoke(): Observable<JokeResponse | null> {
    return this.http.get<JokeResponse>('https://official-joke-api.appspot.com/random_joke')
      .pipe(catchError(() => of(null)));
  }
  
  // Random Quote API (替换NASA)
  getRandomQuote(): Observable<QuoteResponse | null> {
    return this.http.get<{contents: {quotes: QuoteResponse[]}}>('https://quotes.rest/qod')
      .pipe(
        map(response => response.contents?.quotes?.[0] || null),
        catchError(() => {
          // Fallback para citações locais
          const quotes = [
            { text: "A única forma de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
            { text: "A vida é o que acontece com você enquanto você está ocupado fazendo outros planos.", author: "John Lennon" },
            { text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
            { text: "Seja você mesmo; todos os outros já foram tomados.", author: "Oscar Wilde" },
            { text: "A melhor vingança é o sucesso massivo.", author: "Frank Sinatra" }
          ];
          return of(quotes[Math.floor(Math.random() * quotes.length)]);
        })
      );
  }
  
  // Random Dog Image API (替换NASA图片)
  getRandomDogImage(): Observable<DogImage | null> {
    return this.http.get<DogImage>('https://dog.ceo/api/breeds/image/random')
      .pipe(catchError(() => of(null)));
  }
  
  // Math Facts API (替换Numbers API)
  getMathFact(number?: number): Observable<string> {
    const num = number || Math.floor(Math.random() * 100);
    const facts = [
      `${num} é um número interessante na sequência matemática.`,
      `${num} pode ser expresso como a soma de números primos de diferentes formas.`,
      `Na numerologia, ${num} representa energia e transformação.`,
      `${num} aparece frequentemente em padrões matemáticos naturais.`,
      `O número ${num} tem propriedades únicas na teoria dos números.`,
      `${num} é significativo em várias culturas ao redor do mundo.`,
      `Matematicamente, ${num} é parte de sequências interessantes.`,
      `${num} tem aplicações práticas em algoritmos de programação.`
    ];
    
    return of(facts[Math.floor(Math.random() * facts.length)]);
  }
  
  // Random Images
  getRandomImage(width: number = 400, height: number = 300): string {
    return `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
  }
  
  // Dictionary API
  getWordDefinition(word: string): Observable<any> {
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .pipe(catchError(() => of(null)));
  }
  
  // Exchange Rate API
  getExchangeRates(baseCurrency: string = 'USD'): Observable<any> {
    return this.http.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .pipe(catchError(() => of(null)));
  }
  
  // Countries API
  getCountryInfo(countryName: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .pipe(catchError(() => of(null)));
  }
}