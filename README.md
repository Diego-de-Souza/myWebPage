# 🚀 Diego.dev - Portfólio Pessoal Moderno

Uma aplicação Angular 18 moderna e interativa que apresenta um portfólio profissional com integração ao GitHub e widgets de APIs públicas.

![Angular](https://img.shields.io/badge/Angular-18-dd0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-cf649a?style=for-the-badge&logo=sass)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=for-the-badge&logo=bootstrap)

## ✨ Características Principais

### 🎨 Interface Moderna
- **4 Temas Dinâmicos**: Claro, Escuro, Neon e Floresta
- **Glassmorphism Effects**: Efeitos de vidro com blur
- **Animações Fluidas**: Transições suaves e modernas
- **Design Responsivo**: Otimizado para todos os dispositivos

### 🔧 Tecnologias Angular 18
- **Signals**: Gerenciamento reativo de estado
- **Controle de Fluxo Moderno**: @if, @for, @switch
- **Standalone Components**: Arquitetura modular
- **Typed Reactive Forms**: Formulários tipados
- **SSR Ready**: Preparado para Server-Side Rendering

### 🌐 Integrações de APIs
- **GitHub API**: Portfólio dinâmico com repositórios em tempo real
- **OpenMeteo**: Widget de clima atual
- **NASA APOD**: Imagem astronômica do dia
- **BoredAPI**: Sugestões de atividades
- **CatFacts**: Fatos sobre gatos
- **Numbers API**: Fatos numéricos
- **Picsum**: Imagens aleatórias

### 📱 Componentes Interativos
- **Theme Switcher**: Troca de temas com animações
- **Portfolio Moderno**: Integração em tempo real com GitHub
- **API Widgets**: Widgets interativos com dados ao vivo
- **Loading States**: Estados de carregamento elegantes
- **Responsive Design**: Adaptável a todos os dispositivos

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- Angular CLI 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Diego-de-Souza/myWebPage.git

# Navegue até o diretório
cd myWebPage

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### Configuração do GitHub
Para utilizar a integração com GitHub, edite o arquivo:
```typescript
// src/app/components/modern-portfolio/modern-portfolio.component.ts
githubUsername = 'SEU_USUARIO_GITHUB'; // Linha 141
```

## 🎯 Uso dos Temas

### Troca de Temas
```typescript
// Injetar o serviço
themeService = inject(ThemeService);

// Definir tema
this.themeService.setTheme('dark');

// Alternar temas
this.themeService.toggleTheme();
```

### Temas Disponíveis
- **Light**: Tema claro e limpo
- **Dark**: Tema escuro profissional  
- **Neon**: Tema cyberpunk com efeitos neon
- **Forest**: Tema natural com tons de verde

## 🔌 APIs Integradas

### GitHub API
```typescript
// Buscar repositórios
getGitHubRepos(username: string): Observable<GitHubRepo[]>

// Buscar dados do usuário
getGitHubUser(username: string): Observable<any>
```

### Weather API
```typescript
// Obter clima atual
getWeather(latitude: number, longitude: number): Observable<WeatherData>
```

### Outras APIs
- **Random Activity**: Sugestões de atividades
- **Cat Facts**: Fatos felinos
- **NASA**: Imagem astronômica do dia
- **Numbers**: Fatos sobre números
- **Random Images**: Imagens aleatórias

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── theme-switcher/       # Seletor de temas
│   │   ├── modern-portfolio/     # Portfólio com GitHub
│   │   ├── api-widgets/          # Widgets de APIs
│   │   ├── modern-loading/       # Estados de loading
│   │   └── ...                   # Outros componentes
│   ├── service/
│   │   ├── theme.service.ts      # Gerenciamento de temas
│   │   ├── api.service.ts        # Integração com APIs
│   │   └── ...                   # Outros serviços
│   ├── pages/
│   │   ├── home/                 # Página principal
│   │   ├── contato/              # Página de contato
│   │   └── conhecimento/         # Página de conhecimentos
│   └── ...
├── assets/                       # Recursos estáticos
├── environments/                 # Configurações de ambiente
└── styles.scss                   # Estilos globais e temas
```

## 🎨 Personalização de Temas

### Variáveis CSS Customizáveis
```scss
:root {
  --primary-color: #3b82f6;
  --accent-color: #10b981;
  --bg-color: #ffffff;
  --text-color: #1e293b;
  --surface-color: rgba(255, 255, 255, 0.8);
  --glass-bg: rgba(255, 255, 255, 0.1);
}
```

### Criando um Novo Tema
```scss
[data-theme="meu-tema"] {
  --primary-color: #sua-cor;
  --accent-color: #sua-cor-accent;
  --bg-color: #cor-de-fundo;
  --text-color: #cor-do-texto;
  // ... outras variáveis
}
```

## 🚀 Build e Deploy

### Build de Produção
```bash
# Build otimizado
npm run build

# Build com análise de bundle
npm run build -- --source-map

# Build para produção com SSR
npm run build:ssr
```

### Deploy
```bash
# GitHub Pages
npm run deploy:gh-pages

# Netlify
npm run build && netlify deploy --prod --dir=dist

# Vercel
vercel --prod
```

## 📊 Performance

### Otimizações Implementadas
- **Lazy Loading**: Carregamento sob demanda
- **OnPush Strategy**: Detecção de mudanças otimizada
- **Tree Shaking**: Eliminação de código não utilizado
- **Code Splitting**: Divisão de código por rotas
- **Image Optimization**: Otimização de imagens
- **Service Workers**: Cache inteligente

### Métricas de Lighthouse
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 Scripts Disponíveis

```bash
npm start              # Servidor de desenvolvimento
npm run build          # Build de produção
npm run test           # Executar testes unitários
npm run test:coverage  # Cobertura de testes
npm run lint           # Análise de código
npm run e2e            # Testes end-to-end
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Diego de Souza**
- GitHub: [@Diego-de-Souza](https://github.com/Diego-de-Souza)
- LinkedIn: [Diego de Souza](https://linkedin.com/in/diego-de-souza)
- Email: diegodesouza.souza@gmail.com 

## 🙏 Agradecimentos

- [Angular Team](https://angular.io) pela framework incrível
- [FontAwesome](https://fontawesome.com) pelos ícones
- [Unsplash](https://unsplash.com) pelas imagens
- [APIs Públicas](https://github.com/public-apis/public-apis) pelos dados

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no GitHub!** ⭐