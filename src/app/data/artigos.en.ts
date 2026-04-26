import type { Artigo } from './artigos.pt';

export const artigosEn: Artigo[] = [
  {
    titulo: 'How does a responsive website work?',
    resumo: 'Understand the principles of responsive design and why it is essential for the modern web.',
    data: '11/29/2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #4a6491); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">A complete, detailed guide explaining responsive design—from core concepts to more advanced technical implementations.</p>
      </div>
  </header>
  <nav style="background-color: #34495e; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="display: flex; justify-content: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto;">
          <a href="#introduction" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Introduction</a>
          <a href="#what-is" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">What is Responsive Design?</a>
          <a href="#pillars" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Pillars</a>
          <a href="#conclusion" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Conclusion</a>
      </div>
  </nav>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <main style="display: grid; grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px;">
          <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
              <section id="introduction">
                  <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Introduction</h2>
                  <p style="margin-bottom: 15px; text-align: justify;">Today, we access the internet from an impressive variety of devices: desktops, laptops, tablets, smartphones, smart TVs, and even smartwatches. Each one has different screen sizes, resolutions, and interaction patterns. In such a diverse context, the need for websites that adapt automatically to any device emerged—this is where <strong>responsive design</strong> comes in.</p>
                  <p style="margin-bottom: 15px; text-align: justify;">A responsive website adjusts its layout, content, and visual elements to provide an optimized experience regardless of the device. In this article, we will explain how responsive websites work, from fundamentals to advanced techniques.</p>
              </section>
              <section id="what-is">
                  <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">What is Responsive Design?</h2>
                  <p style="margin-bottom: 15px; text-align: justify;">Responsive design is a web development approach aimed at delivering an ideal viewing experience—easy reading and navigation with minimal resizing, panning, and scrolling—across a wide range of devices.</p>
              </section>
              <section id="pillars">
                  <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Pillars</h2>
                  <ul style="margin: 15px 0; padding-left: 30px;">
                    <li style="margin-bottom: 8px;"><strong>Flexible grids</strong></li>
                    <li style="margin-bottom: 8px;"><strong>Flexible media</strong></li>
                    <li style="margin-bottom: 8px;"><strong>Media queries</strong></li>
                  </ul>
              </section>
              <section id="conclusion">
                  <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Conclusion</h2>
                  <p style="margin-bottom: 15px; text-align: justify;">Responsive design has evolved from a trend into a fundamental requirement. Building experiences that adapt fluidly is essential for the success of modern digital products.</p>
              </section>
          </article>
      </main>
  </div>`
  },
  {
    titulo: 'Clean Architecture',
    resumo: 'A guide to the principles, benefits, and practical implementation of Clean Architecture.',
    data: '11/28/2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #27ae60); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">A complete guide to the principles, benefits, and implementation of Clean Architecture in software projects.</p>
      </div>
  </header>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
        <h2 style="color: #2c3e50; margin: 0 0 15px;">Introduction</h2>
        <p style="margin-bottom: 15px; text-align: justify;"><strong>Clean Architecture</strong> is an architectural pattern proposed by Robert C. Martin (Uncle Bob) whose main goal is to create software systems that are independent from frameworks, testable, independent from UI and databases, and resilient to external changes.</p>
      </article>
  </div>`
  }
];

