import type { Artigo } from './artigos.pt';

export const artigosDe: Artigo[] = [
  {
    titulo: 'Wie funktioniert eine responsive Website?',
    resumo: 'Verstehen Sie die Prinzipien von Responsive Design und warum es für das moderne Web essenziell ist.',
    data: '29.11.2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #4a6491); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Ein vollständiger, detaillierter Leitfaden zu Responsive Design – von Grundlagen bis zu fortgeschrittenen technischen Umsetzungen.</p>
      </div>
  </header>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px;">Einleitung</h2>
          <p style="margin-bottom: 15px; text-align: justify;">Heute greifen wir über eine beeindruckende Vielfalt an Geräten auf das Internet zu: Desktop-PCs, Laptops, Tablets, Smartphones, Smart-TVs und sogar Smartwatches. Jedes Gerät bringt unterschiedliche Bildschirmgrößen, Auflösungen und Interaktionsformen mit sich. In einem solchen Umfeld entsteht die Notwendigkeit, Websites zu entwickeln, die sich automatisch an jedes Gerät anpassen – hier kommt <strong>Responsive Design</strong> ins Spiel.</p>
          <p style="margin-bottom: 15px; text-align: justify;">Eine responsive Website passt Layout, Inhalte und visuelle Elemente an, um unabhängig vom Gerät ein optimiertes Nutzungserlebnis zu bieten. In diesem Artikel erläutern wir die Funktionsweise – von den Grundlagen bis zu fortgeschrittenen Techniken.</p>
      </article>
  </div>`
  },
  {
    titulo: 'Clean Architecture',
    resumo: 'Ein Leitfaden zu Prinzipien, Vorteilen und praktischer Umsetzung von Clean Architecture in Softwareprojekten.',
    data: '28.11.2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #27ae60); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Ein vollständiger Leitfaden zu den Prinzipien, Vorteilen und der Umsetzung von Clean Architecture in Softwareprojekten.</p>
      </div>
  </header>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
        <h2 style="color: #2c3e50; margin: 0 0 15px;">Einleitung</h2>
        <p style="margin-bottom: 15px; text-align: justify;"><strong>Clean Architecture</strong> ist ein Architekturansatz von Robert C. Martin (Uncle Bob). Ziel ist es, Systeme zu bauen, die unabhängig von Frameworks sind, gut testbar bleiben und sich von UI- und Datenbankdetails entkoppeln.</p>
      </article>
  </div>`
  }
];

