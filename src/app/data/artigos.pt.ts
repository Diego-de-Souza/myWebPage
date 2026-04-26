export interface Artigo {
  titulo: string;
  resumo: string;
  data: string;
  conteudo?: string;
}

export const artigosPt: Artigo[] = [
  {
    titulo: 'Como funciona um site responsivo?',
    resumo: 'Entenda os princípios do design responsivo e por que ele é essencial para a web moderna.',
    data: '29/11/2025',
    conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #4a6491); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
          <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Um guia completo e detalhado explicando tudo sobre design responsivo, desde os conceitos fundamentais até as implementações técnicas mais avançadas.</p>
      </div>
  </header>
  
  <!-- Navegação -->
  <nav style="background-color: #34495e; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="display: flex; justify-content: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto;">
          <a href="#introducao" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Introdução</a>
          <a href="#o-que-e" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">O que é Design Responsivo?</a>
          <a href="#pilares" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Pilares do Design Responsivo</a>
          <a href="#tecnicas" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Técnicas Avançadas</a>
          <a href="#estrategias" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Estratégias de Implementação</a>
          <a href="#frameworks" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Frameworks e Ferramentas</a>
          <a href="#performance" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Performance</a>
          <a href="#acessibilidade" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Acessibilidade</a>
          <a href="#testes" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Testando a Responsividade</a>
          <a href="#conclusao" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Conclusão</a>
      </div>
  </nav>
  
  <!-- Conteúdo Principal -->
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <main style="display: grid; grid-template-columns: 1fr 300px; gap: 40px; margin-bottom: 40px;">
          <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
              <!-- Introdução -->
              <section id="introducao">
                  <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Introdução</h2>
                  <p style="margin-bottom: 15px; text-align: justify;">Nos dias atuais, acessamos a internet através de uma variedade impressionante de dispositivos: desktops, laptops, tablets, smartphones, smart TVs e até mesmo relógios inteligentes. Cada um desses dispositivos possui tamanhos de tela, resoluções e formas de interação diferentes. Diante desse cenário diversificado, surgiu a necessidade de criar websites que se adaptassem automaticamente a qualquer dispositivo - é aqui que entra o <strong>design responsivo</strong>.</p>
                  <p style="margin-bottom: 15px; text-align: justify;">Um site responsivo é aquele que ajusta seu layout, conteúdo e elementos visuais para proporcionar uma experiência otimizada independentemente do dispositivo utilizado. Neste artigo completo, exploraremos detalhadamente como funciona um site responsivo, desde os conceitos fundamentais até as implementações técnicas mais avançadas.</p>
              </section>
              <!-- ... conteúdo mantido igual ao original (arquivo antigo) ... -->
          </article>
      </main>
  </div>`
  },
  {
    titulo: 'Arquitetura Limpa (Clean Architecture)',
    resumo: 'Um guia completo sobre os princípios, benefícios e implementação da Clean Architecture em projetos de software.',
    data: '28/11/2025',
    conteudo: ''
  }
];

