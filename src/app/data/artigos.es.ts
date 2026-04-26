import type { Artigo } from './artigos.pt';

export const artigosEs: Artigo[] = [
  {
    titulo: '¿Cómo funciona un sitio web responsivo?',
    resumo: 'Comprenda los principios del diseño responsivo y por qué es esencial para la web moderna.',
    data: '29/11/2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #4a6491); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Una guía completa y detallada que explica el diseño responsivo, desde los conceptos fundamentales hasta implementaciones técnicas más avanzadas.</p>
      </div>
  </header>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px;">Introducción</h2>
          <p style="margin-bottom: 15px; text-align: justify;">Hoy en día accedemos a internet desde una amplia variedad de dispositivos: ordenadores, portátiles, tablets, smartphones, smart TVs e incluso relojes inteligentes. Cada uno tiene tamaños de pantalla, resoluciones y formas de interacción distintas. En este escenario, surge la necesidad de sitios que se adapten automáticamente a cualquier dispositivo: el <strong>diseño responsivo</strong>.</p>
          <p style="margin-bottom: 15px; text-align: justify;">Un sitio responsivo ajusta su layout, contenido y elementos visuales para ofrecer una experiencia optimizada independientemente del dispositivo utilizado. En este artículo, explicaremos el funcionamiento del diseño responsivo, desde los fundamentos hasta técnicas avanzadas.</p>
      </article>
  </div>`
  },
  {
    titulo: 'Arquitectura Limpia (Clean Architecture)',
    resumo: 'Guía sobre principios, beneficios e implementación de Clean Architecture en proyectos de software.',
    data: '28/11/2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #27ae60); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Una guía completa sobre los principios, beneficios e implementación de Clean Architecture en proyectos de software.</p>
      </div>
  </header>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
        <h2 style="color: #2c3e50; margin: 0 0 15px;">Introducción</h2>
        <p style="margin-bottom: 15px; text-align: justify;">La <strong>Arquitectura Limpia</strong> es un patrón arquitectónico propuesto por Robert C. Martin (Uncle Bob) cuyo objetivo principal es crear sistemas que sean independientes de frameworks, testables e independientes de la UI y la base de datos.</p>
      </article>
  </div>`
  }
];

