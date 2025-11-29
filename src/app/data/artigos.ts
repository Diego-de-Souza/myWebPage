export const artigos = [
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
                
                <!-- O que é Design Responsivo? -->
                <section id="o-que-e">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">O que é Design Responsivo?</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Definição e Conceito</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O <strong>design responsivo</strong> é uma abordagem de desenvolvimento web que busca fornecer uma experiência de visualização ideal—com fácil leitura e navegação com um mínimo de redimensionamento, panning e scrolling—em uma ampla gama de dispositivos.</p>
                    <p style="margin-bottom: 15px; text-align: justify;">O termo foi cunhado por Ethan Marcotte em 2010 em seu artigo "Responsive Web Design" publicado na A List Apart. Marcotte propôs três ingredientes técnicos fundamentais para o design responsivo:</p>
                    <ol style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Grids flexíveis</strong> (layouts fluidos)</li>
                        <li style="margin-bottom: 8px;"><strong>Imagens flexíveis</strong> (mídia flexível)</li>
                        <li style="margin-bottom: 8px;"><strong>Media queries</strong> (consultas de mídia)</li>
                    </ol>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Por que o Design Responsivo é Importante?</h3>
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">Vantagens do Design Responsivo</div>
                        <ul style="margin: 15px 0; padding-left: 30px;">
                            <li style="margin-bottom: 8px;"><strong>Experiência do usuário:</strong> Oferece uma experiência consistente em todos os dispositivos</li>
                            <li style="margin-bottom: 8px;"><strong>Manutenção:</strong> Um único código base para todos os dispositivos</li>
                            <li style="margin-bottom: 8px;"><strong>SEO:</strong> O Google prioriza sites responsivos em seus resultados de busca</li>
                            <li style="margin-bottom: 8px;"><strong>Custos:</strong> Desenvolvimento e manutenção mais econômicos comparado a versões separadas</li>
                            <li style="margin-bottom: 8px;"><strong>Acessibilidade:</strong> Melhor acesso para usuários com diferentes capacidades e dispositivos</li>
                        </ul>
                    </div>
                </section>
                
                <!-- Pilares do Design Responsivo -->
                <section id="pilares">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Os Pilares do Design Responsivo</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">1. Viewport Meta Tag</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O viewport é a área visível do usuário em uma página web. Ele varia conforme o dispositivo, sendo menor em celulares e maiores em desktops. A tag viewport informa ao navegador como controlar as dimensões e o escalonamento da página.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">&lt;meta</span> <span style="color: #fbb6ce;">name</span>=<span style="color: #68d391;">"viewport"</span> <span style="color: #fbb6ce;">content</span>=<span style="color: #68d391;">"width=device-width, initial-scale=1.0"</span><span style="color: #63b3ed;">&gt;</span>
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Explicação dos parâmetros:</strong></p>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><code>width=device-width</code>: Define a largura da página para seguir a largura da tela do dispositivo</li>
                        <li style="margin-bottom: 8px;"><code>initial-scale=1.0</code>: Define o nível de zoom inicial quando a página é carregada</li>
                        <li style="margin-bottom: 8px;">Parâmetros adicionais: <code>user-scalable</code>, <code>minimum-scale</code>, <code>maximum-scale</code></li>
                    </ul>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">2. Grids Flexíveis (Layouts Fluidos)</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Os grids flexíveis substituem os layouts fixos baseados em pixels por layouts relativos baseados em porcentagens. A ideia central é calcular os valores dos elementos como porcentagem do elemento pai, em vez de usar unidades fixas como pixels.</p>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Fórmula para conversão de layout fixo para fluido:</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        alvo / contexto = resultado
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Exemplo prático:</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Layout fixo */</span><br>
                        .container {<br>
                        &nbsp;&nbsp;width: 960px;<br>
                        }<br><br>
                        
                        .coluna {<br>
                        &nbsp;&nbsp;width: 640px;<br>
                        &nbsp;&nbsp;margin: 0 10px;<br>
                        &nbsp;&nbsp;padding: 20px;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Layout fluido */</span><br>
                        .container {<br>
                        &nbsp;&nbsp;width: 90%; <span style="color: #a0aec0;">/* ou max-width: 1200px; */</span><br>
                        &nbsp;&nbsp;margin: 0 auto;<br>
                        }<br><br>
                        
                        .coluna {<br>
                        &nbsp;&nbsp;width: 66.666%; <span style="color: #a0aec0;">/* 640 / 960 = 0.66666 */</span><br>
                        &nbsp;&nbsp;margin: 0 1.0416%; <span style="color: #a0aec0;">/* 10 / 960 = 0.010416 */</span><br>
                        &nbsp;&nbsp;padding: 2.0833%; <span style="color: #a0aec0;">/* 20 / 960 = 0.020833 */</span><br>
                        }
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">3. Imagens Flexíveis</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">As imagens flexíveis se redimensionam automaticamente para caber em seus contêineres, prevenindo que ultrapassem os limites do elemento pai.</p>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Técnicas para imagens responsivas:</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Método básico */</span><br>
                        img {<br>
                        &nbsp;&nbsp;max-width: 100%;<br>
                        &nbsp;&nbsp;height: auto;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Para elementos de background */</span><br>
                        .elemento {<br>
                        &nbsp;&nbsp;background-image: url('imagem.jpg');<br>
                        &nbsp;&nbsp;background-size: cover; <span style="color: #a0aec0;">/* ou contain */</span><br>
                        &nbsp;&nbsp;background-position: center;<br>
                        }
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>HTML com srcset para diferentes resoluções:</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">&lt;img</span><br>
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">src</span>=<span style="color: #68d391;">"imagem-pequena.jpg"</span><br>
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">srcset</span>=<span style="color: #68d391;">"imagem-grande.jpg 1200w, imagem-media.jpg 800w, imagem-pequena.jpg 400w"</span><br>
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">sizes</span>=<span style="color: #68d391;">"(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"</span><br>
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">alt</span>=<span style="color: #68d391;">"Descrição da imagem"</span><br>
                        <span style="color: #63b3ed;">&gt;</span>
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">4. Media Queries</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">As media queries são a espinha dorsal do design responsivo. Elas permitem aplicar estilos CSS específicos baseados nas características do dispositivo, como largura da tela, altura, orientação e resolução.</p>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Sintaxe básica:</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        @media (condição) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* estilos CSS */</span><br>
                        }
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Pontos de quebra comuns (breakpoints):</strong></p>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Dispositivos móveis (até 768px) */</span><br>
                        @media (max-width: 768px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Estilos para mobile */</span><br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Tablets (769px a 1024px) */</span><br>
                        @media (min-width: 769px) and (max-width: 1024px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Estilos para tablet */</span><br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Desktops (acima de 1025px) */</span><br>
                        @media (min-width: 1025px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Estilos para desktop */</span><br>
                        }
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;"><strong>Abordagem Mobile First:</strong></p>
                    <p style="margin-bottom: 15px; text-align: justify;">A abordagem "mobile first" consiste em desenvolver primeiro para dispositivos móveis e depois usar media queries para adicionar estilos para telas maiores.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Estilos base (mobile) */</span><br>
                        .container {<br>
                        &nbsp;&nbsp;padding: 10px;<br>
                        &nbsp;&nbsp;font-size: 14px;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Tablets */</span><br>
                        @media (min-width: 768px) {<br>
                        &nbsp;&nbsp;.container {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;padding: 20px;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;font-size: 16px;<br>
                        &nbsp;&nbsp;}<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Desktop */</span><br>
                        @media (min-width: 1024px) {<br>
                        &nbsp;&nbsp;.container {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;padding: 30px;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18px;<br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                </section>
                
                <!-- Técnicas Avançadas -->
                <section id="tecnicas">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Técnicas Avançadas de Design Responsivo</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">CSS Grid Layout</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O CSS Grid é um sistema de layout bidimensional que revolucionou a criação de layouts responsivos. Ele permite criar estruturas complexas com menos código e maior flexibilidade.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Exemplo de grid responsivo */</span><br>
                        .container {<br>
                        &nbsp;&nbsp;display: grid;<br>
                        &nbsp;&nbsp;grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));<br>
                        &nbsp;&nbsp;gap: 20px;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Sem media queries necessárias para layout básico */</span><br>
                        .item {<br>
                        &nbsp;&nbsp;background: #f0f0f0;<br>
                        &nbsp;&nbsp;padding: 20px;<br>
                        }
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Flexbox</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O Flexbox é ideal para layouts unidimensionais (linha ou coluna) e oferece excelente controle sobre a distribuição e alinhamento dos elementos.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Exemplo de menu responsivo com Flexbox */</span><br>
                        .nav {<br>
                        &nbsp;&nbsp;display: flex;<br>
                        &nbsp;&nbsp;flex-wrap: wrap;<br>
                        &nbsp;&nbsp;justify-content: space-between;<br>
                        }<br><br>
                        
                        .nav-item {<br>
                        &nbsp;&nbsp;flex: 1 1 200px; <span style="color: #a0aec0;">/* Cresce, encolhe, base de 200px */</span><br>
                        &nbsp;&nbsp;margin: 5px;<br>
                        }<br><br>
                        
                        @media (max-width: 600px) {<br>
                        &nbsp;&nbsp;.nav {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Unidades de Medida Relativas</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Além de porcentagens, existem outras unidades relativas importantes para o design responsivo:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <thead>
                            <tr>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0; background-color: #f7fafc; font-weight: 600; color: #2d3748;">Unidade</th>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0; background-color: #f7fafc; font-weight: 600; color: #2d3748;">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition: background-color 0.3s;">
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;"><code>em</code></td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Relativa ao tamanho da fonte do elemento pai</td>
                            </tr>
                            <tr style="transition: background-color 0.3s;">
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;"><code>rem</code></td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Relativa ao tamanho da fonte do elemento raiz (html)</td>
                            </tr>
                            <tr style="transition: background-color 0.3s;">
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;"><code>vw/vh</code></td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Relativa à largura (viewport width) ou altura (viewport height) da janela</td>
                            </tr>
                            <tr style="transition: background-color 0.3s;">
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;"><code>vmin/vmax</code></td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Relativa à dimensão menor ou maior da viewport</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Exemplo de uso */</span><br>
                        html {<br>
                        &nbsp;&nbsp;font-size: 16px; <span style="color: #a0aec0;">/* Base para rem */</span><br>
                        }<br><br>
                        
                        .container {<br>
                        &nbsp;&nbsp;width: 80vw; <span style="color: #a0aec0;">/* 80% da largura da viewport */</span><br>
                        &nbsp;&nbsp;padding: 2rem; <span style="color: #a0aec0;">/* 32px (2 * 16px) */</span><br>
                        &nbsp;&nbsp;font-size: 1.125rem; <span style="color: #a0aec0;">/* 18px */</span><br>
                        }<br><br>
                        
                        .titulo {<br>
                        &nbsp;&nbsp;font-size: clamp(1.5rem, 4vw, 3rem); <span style="color: #a0aec0;">/* Mínimo, ideal, máximo */</span><br>
                        }
                    </div>
                </section>
                
                <!-- Estratégias de Implementação -->
                <section id="estrategias">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Estratégias de Implementação</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Abordagem Mobile First vs Desktop First</h3>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">Mobile First</div>
                        <ul style="margin: 15px 0; padding-left: 30px;">
                            <li style="margin-bottom: 8px;"><strong>Vantagens:</strong> Melhor performance em dispositivos móveis, código mais limpo</li>
                            <li style="margin-bottom: 8px;"><strong>Desvantagens:</strong> Pode exigir mais media queries para telas grandes</li>
                        </ul>
                    </div>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">Desktop First</div>
                        <ul style="margin: 15px 0; padding-left: 30px;">
                            <li style="margin-bottom: 8px;"><strong>Vantagens:</strong> Pode ser mais intuitivo para designers acostumados com desktop</li>
                            <li style="margin-bottom: 8px;"><strong>Desvantagens:</strong> Pior performance em mobile, mais código para sobrescrever estilos</li>
                        </ul>
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Breakpoints Baseados no Conteúdo</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Em vez de usar breakpoints genéricos baseados em dispositivos específicos, a abordagem moderna é definir breakpoints baseados no conteúdo - quando o layout "quebra" naturalmente.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Breakpoints baseados no conteúdo */</span><br>
                        @media (max-width: 550px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* O layout precisa se adaptar */</span><br>
                        }<br><br>
                        
                        @media (min-width: 551px) and (max-width: 850px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Outra adaptação necessária */</span><br>
                        }<br><br>
                        
                        @media (min-width: 851px) and (max-width: 1200px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Layout para telas médias */</span><br>
                        }<br><br>
                        
                        @media (min-width: 1201px) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">/* Layout para telas grandes */</span><br>
                        }
                    </div>
                </section>
                
                <!-- Frameworks e Ferramentas -->
                <section id="frameworks">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Frameworks e Ferramentas para Design Responsivo</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Frameworks CSS</h3>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Bootstrap:</strong> Um dos frameworks mais populares, com sistema de grid responsivo e componentes pré-construídos</li>
                        <li style="margin-bottom: 8px;"><strong>Foundation:</strong> Framework responsivo com foco em mobile first</li>
                        <li style="margin-bottom: 8px;"><strong>Tailwind CSS:</strong> Framework utilitário que facilita a criação de designs responsivos</li>
                        <li style="margin-bottom: 8px;"><strong>Bulma:</strong> Framework moderno baseado em Flexbox</li>
                    </ul>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Ferramentas de Desenvolvimento</h3>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Chrome DevTools:</strong> Simulador de dispositivos e ferramentas de inspeção</li>
                        <li style="margin-bottom: 8px;"><strong>BrowserStack:</strong> Teste em dispositivos e navegadores reais</li>
                        <li style="margin-bottom: 8px;"><strong>Responsive Design Checker:</strong> Ferramentas online para testar responsividade</li>
                        <li style="margin-bottom: 8px;"><strong>Lighthouse:</strong> Ferramenta de auditoria que inclui métricas de responsividade</li>
                    </ul>
                </section>
                
                <!-- Performance -->
                <section id="performance">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Performance em Design Responsivo</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Otimização para Dispositivos Móveis</h3>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Compressão de imagens:</strong> Use formatos modernos como WebP</li>
                        <li style="margin-bottom: 8px;"><strong>Lazy Loading:</strong> Carregue imagens e conteúdo somente quando necessário</li>
                        <li style="margin-bottom: 8px;"><strong>Minificação:</strong> Reduza o tamanho de CSS, JavaScript e HTML</li>
                        <li style="margin-bottom: 8px;"><strong>Critical CSS:</strong> Carregue primeiro o CSS necessário para a visualização inicial</li>
                    </ul>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Técnicas de Carregamento Condicional</h3>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">// Carregar recursos diferentes baseado na capacidade do dispositivo</span><br>
                        if (window.innerWidth < 768) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">// Carregar versão mobile</span><br>
                        &nbsp;&nbsp;loadScript('mobile-version.js');<br>
                        } else {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">// Carregar versão desktop</span><br>
                        &nbsp;&nbsp;loadScript('desktop-version.js');<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">// Usar matchMedia para condições mais complexas</span><br>
                        const mediaQuery = window.matchMedia('(min-width: 768px) and (orientation: landscape)');<br><br>
                        
                        if (mediaQuery.matches) {<br>
                        &nbsp;&nbsp;<span style="color: #a0aec0;">// Executar código específico</span><br>
                        }
                    </div>
                </section>
                
                <!-- Acessibilidade -->
                <section id="acessibilidade">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Acessibilidade no Design Responsivo</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Considerações Importantes</h3>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Tamanho de toque:</strong> Botões e links devem ter pelo menos 44x44 pixels</li>
                        <li style="margin-bottom: 8px;"><strong>Contraste de cores:</strong> Manter bom contraste em todas as condições de iluminação</li>
                        <li style="margin-bottom: 8px;"><strong>Navegação por teclado:</strong> Garantir que todos os elementos sejam acessíveis via teclado</li>
                        <li style="margin-bottom: 8px;"><strong>Texto legível:</strong> Tamanhos de fonte adequados e espaçamento entre linhas</li>
                    </ul>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Práticas Recomendadas</h3>
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">/* Tamanho mínimo de toque */</span><br>
                        .botao, .link {<br>
                        &nbsp;&nbsp;min-height: 44px;<br>
                        &nbsp;&nbsp;min-width: 44px;<br>
                        &nbsp;&nbsp;padding: 12px;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Contraste adequado */</span><br>
                        .texto {<br>
                        &nbsp;&nbsp;color: #333; <span style="color: #a0aec0;">/* Escuro o suficiente sobre fundo claro */</span><br>
                        &nbsp;&nbsp;background-color: #fff;<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">/* Foco visível */</span><br>
                        .botao:focus {<br>
                        &nbsp;&nbsp;outline: 2px solid #005fcc;<br>
                        &nbsp;&nbsp;outline-offset: 2px;<br>
                        }
                    </div>
                </section>
                
                <!-- Testando a Responsividade -->
                <section id="testes">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Testando a Responsividade</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Estratégias de Teste</h3>
                    <ol style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Teste em dispositivos reais:</strong> Sempre que possível</li>
                        <li style="margin-bottom: 8px;"><strong>Simuladores e emuladores:</strong> Chrome DevTools, Xcode, Android Studio</li>
                        <li style="margin-bottom: 8px;"><strong>Ferramentas online:</strong> Responsinator, Screenfly, Am I Responsive?</li>
                        <li style="margin-bottom: 8px;"><strong>Teste de usabilidade:</strong> Observar usuários reais interagindo com o site</li>
                    </ol>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Checklist de Teste</h3>
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;">Layout se adapta a diferentes tamanhos de tela</li>
                        <li style="margin-bottom: 8px;">Conteúdo permanece legível em todos os dispositivos</li>
                        <li style="margin-bottom: 8px;">Imagens são exibidas corretamente</li>
                        <li style="margin-bottom: 8px;">Navegação funciona em telas pequenas</li>
                        <li style="margin-bottom: 8px;">Formulários são utilizáveis em mobile</li>
                        <li style="margin-bottom: 8px;">Performance é aceitável em conexões móveis</li>
                        <li style="margin-bottom: 8px;">Funcionalidades JavaScript trabalham em todos os dispositivos</li>
                    </ul>
                </section>
                
                <!-- Conclusão -->
                <section id="conclusao">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Conclusão</h2>
                    <p style="margin-bottom: 15px; text-align: justify;">O design responsivo evoluiu de uma tendência para um requisito fundamental no desenvolvimento web moderno. Com a diversificação contínua de dispositivos e formas de interação, criar experiências que se adaptam fluidamente tornou-se essencial para o sucesso de qualquer projeto digital.</p>
                    <p style="margin-bottom: 15px; text-align: justify;">Dominar os princípios do design responsivo—viewport, grids flexíveis, imagens adaptáveis e media queries—é apenas o começo. À medida que novas tecnologias como container queries e intrinsic design amadurecem, as possibilidades para criar experiências verdadeiramente adaptáveis continuam a se expandir.</p>
                    <p style="margin-bottom: 15px; text-align: justify;">Lembre-se que o design responsivo vai além da técnica; é uma filosofia centrada no usuário que prioriza a acessibilidade, usabilidade e performance em todos os contextos de uso. Ao implementar essas práticas, você não está apenas criando sites que funcionam em qualquer dispositivo, mas sim experiências digitais que são verdadeiramente inclusivas e eficazes.</p>
                </section>
            </article>
            
            <!-- Sidebar -->
            <aside style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 25px; height: fit-content; position: sticky; top: 80px;">
                <h3 style="color: #2c3e50; margin: 0 0 15px; font-size: 1.4rem;">Recursos Adicionais</h3>
                <ul style="margin: 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 8px;"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" style="color: #3498db; text-decoration: none;">MDN Web Docs - Responsive Design</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive" target="_blank" style="color: #3498db; text-decoration: none;">Google Web Fundamentals</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://alistapart.com/article/responsive-web-design/" target="_blank" style="color: #3498db; text-decoration: none;">A List Apart - Artigo Original</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" style="color: #3498db; text-decoration: none;">CSS-Tricks - Guia Flexbox</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" style="color: #3498db; text-decoration: none;">CSS-Tricks - Guia Grid</a></li>
                </ul>
                
                <h3 style="color: #2c3e50; margin: 25px 0 10px; font-size: 1.4rem;">Exemplo Prático</h3>
                <p style="margin-bottom: 15px; font-size: 0.9rem;">Este artigo é um exemplo de design responsivo! Redimensione sua janela para ver como o layout se adapta a diferentes tamanhos de tela.</p>
                
                <h3 style="color: #2c3e50; margin: 25px 0 10px; font-size: 1.4rem;">Próximos Passos</h3>
                <ul style="margin: 15px 0; padding-left: 20px; font-size: 0.9rem;">
                    <li style="margin-bottom: 8px;">Experimente os exemplos de código</li>
                    <li style="margin-bottom: 8px;">Teste sites existentes com ferramentas de responsividade</li>
                    <li style="margin-bottom: 8px;">Pratique criando layouts com CSS Grid e Flexbox</li>
                    <li style="margin-bottom: 8px;">Explore frameworks como Bootstrap e Tailwind CSS</li>
                </ul>
            </aside>`
    },
    {
      titulo: 'Arquitetura Limpa (Clean Architecture)',
      resumo: 'Um guia completo sobre os princípios, benefícios e implementação da Clean Architecture em projetos de software.',
      data: '28/11/2025',
      conteudo: ` <header style="background: linear-gradient(135deg, #2c3e50, #27ae60); color: white; padding: 60px 0; text-align: center; margin-bottom: 40px;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">Um guia completo sobre os princípios, benefícios e implementação da Clean Architecture em projetos de software</p>
        </div>
    </header>
    
    <!-- Navegação -->
    <nav style="background-color: #34495e; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto;">
            <a href="#introducao" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Introdução</a>
            <a href="#conceitos" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Conceitos Fundamentais</a>
            <a href="#camadas" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Camadas da Arquitetura</a>
            <a href="#principios" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Princípios SOLID</a>
            <a href="#implementacao" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Implementação</a>
            <a href="#beneficios" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Benefícios</a>
            <a href="#desafios" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Desafios</a>
            <a href="#casos-uso" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Casos de Uso</a>
            <a href="#conclusao" style="color: white; text-decoration: none; padding: 15px 20px; display: inline-block; transition: background-color 0.3s;">Conclusão</a>
        </div>
    </nav>
    
    <!-- Conteúdo Principal -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <main style="display: grid; grid-template-columns: 1fr 300px; gap: 40px; margin-bottom: 40px;">
            <article style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
                
                <!-- Introdução -->
                <section id="introducao">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Introdução à Arquitetura Limpa</h2>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">A <strong>Arquitetura Limpa</strong> (Clean Architecture) é um padrão arquitetural proposto por Robert C. Martin (Uncle Bob) que tem como objetivo principal criar sistemas de software que sejam:</p>
                    
                    <ul style="margin: 15px 0; padding-left: 30px;">
                        <li style="margin-bottom: 8px;"><strong>Independentes de frameworks</strong></li>
                        <li style="margin-bottom: 8px;"><strong>Testáveis</strong></li>
                        <li style="margin-bottom: 8px;"><strong>Independentes de UI</strong></li>
                        <li style="margin-bottom: 8px;"><strong>Independentes de banco de dados</strong></li>
                        <li style="margin-bottom: 8px;"><strong>Independentes de qualquer agente externo</strong></li>
                    </ul>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">A ideia central é organizar o código em camadas concêntricas, onde as camadas mais internas não conhecem nada sobre as camadas mais externas, seguindo o <strong>Princípio de Dependência</strong>: dependências devem apontar para dentro, em direção às regras de negócio.</p>
                    
                    <div style="background-color: #edf2f7; border-left: 4px solid #27ae60; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c5282;">Visão Geral</div>
                        <p style="margin-bottom: 0; text-align: justify;">A Arquitetura Limpa separa o software em camadas, com as regras de negócio no centro e preocupações de infraestrutura nas camadas externas. Isso permite que o sistema evolua independentemente de tecnologias específicas.</p>
                    </div>
                </section>
                
                <!-- Conceitos Fundamentais -->
                <section id="conceitos">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Conceitos Fundamentais</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">A Regra de Dependência</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O conceito mais importante na Arquitetura Limpa é a <strong>Regra de Dependência</strong>: o código fonte só pode depender de camadas mais internas, nunca de camadas mais externas.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #a0aec0;">// CORRETO: Camada interna usando abstração</span><br>
                        <span style="color: #63b3ed;">class</span> <span style="color: #fbb6ce;">UserService</span> {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">constructor</span>(<span style="color: #fbb6ce;">userRepository</span>: <span style="color: #68d391;">IUserRepository</span>) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">this</span>.<span style="color: #fbb6ce;">userRepository</span> = userRepository;<br>
                        &nbsp;&nbsp;}<br>
                        }<br><br>
                        
                        <span style="color: #a0aec0;">// ERRADO: Camada interna dependendo de implementação externa</span><br>
                        <span style="color: #63b3ed;">class</span> <span style="color: #fbb6ce;">UserService</span> {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">constructor</span>() {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">this</span>.<span style="color: #fbb6ce;">userRepository</span> = <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">MySQLUserRepository</span>(); <span style="color: #a0aec0;">// VIOLA A REGRA!</span><br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Entidades</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">As <strong>Entidades</strong> encapsulam as regras de negócio mais gerais e fundamentais da aplicação. Elas são os objetos que possuem identidade e ciclo de vida próprio, e não devem ser afetadas por mudanças em camadas externas.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">class</span> <span style="color: #fbb6ce;">User</span> {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">constructor</span>(<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">id</span>: <span style="color: #68d391;">string</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">name</span>: <span style="color: #68d391;">string</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">email</span>: <span style="color: #68d391;">string</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">password</span>: <span style="color: #68d391;">string</span><br>
                        &nbsp;&nbsp;) {}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">validatePassword</span>(<span style="color: #fbb6ce;">inputPassword</span>: <span style="color: #68d391;">string</span>): <span style="color: #68d391;">boolean</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">return</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">password</span> === <span style="color: #fbb6ce;">inputPassword</span>;<br>
                        &nbsp;&nbsp;}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">public</span> <span style="color: #fbb6ce;">changeEmail</span>(<span style="color: #fbb6ce;">newEmail</span>: <span style="color: #68d391;">string</span>): <span style="color: #68d391;">void</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">if</span> (!<span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">isValidEmail</span>(newEmail)) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">throw</span> <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">Error</span>(<span style="color: #68d391;">'Invalid email'</span>);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">email</span> = newEmail;<br>
                        &nbsp;&nbsp;}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">private</span> <span style="color: #fbb6ce;">isValidEmail</span>(<span style="color: #fbb6ce;">email</span>: <span style="color: #68d391;">string</span>): <span style="color: #68d391;">boolean</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// Lógica de validação de email</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">return</span> <span style="color: #68d391;">/^[^\s@]+@[^\s@]+\.[^\s@]+$/</span>.<span style="color: #fbb6ce;">test</span>(email);<br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Casos de Uso</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Os <strong>Casos de Uso</strong> (Use Cases) contêm as regras de negócio específicas da aplicação. Eles orquestram o fluxo de dados entre as entidades e se comunicam com camadas externas através de interfaces.</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">class</span> <span style="color: #fbb6ce;">CreateUserUseCase</span> {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">constructor</span>(<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">private</span> <span style="color: #fbb6ce;">userRepository</span>: <span style="color: #68d391;">IUserRepository</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">private</span> <span style="color: #fbb6ce;">emailService</span>: <span style="color: #68d391;">IEmailService</span><br>
                        &nbsp;&nbsp;) {}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">async</span> <span style="color: #fbb6ce;">execute</span>(<span style="color: #fbb6ce;">request</span>: <span style="color: #68d391;">CreateUserRequest</span>): <span style="color: #68d391;">Promise</span>&lt;<span style="color: #68d391;">CreateUserResponse</span>&gt; {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 1. Validar dados de entrada</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">if</span> (!<span style="color: #fbb6ce;">request</span>.<span style="color: #fbb6ce;">name</span> || !<span style="color: #fbb6ce;">request</span>.<span style="color: #fbb6ce;">email</span>) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">throw</span> <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">Error</span>(<span style="color: #68d391;">'Name and email are required'</span>);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 2. Verificar se usuário já existe</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">existingUser</span> = <span style="color: #63b3ed;">await</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">userRepository</span>.<span style="color: #fbb6ce;">findByEmail</span>(request.email);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">if</span> (existingUser) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">throw</span> <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">Error</span>(<span style="color: #68d391;">'User already exists'</span>);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 3. Criar entidade User</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">user</span> = <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">User</span>(<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #68d391;">uuidv4</span>(),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;request.name,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;request.email,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #68d391;">hashPassword</span>(request.password)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;);<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 4. Salvar usuário</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">await</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">userRepository</span>.<span style="color: #fbb6ce;">save</span>(user);<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 5. Enviar email de boas-vindas</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">await</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">emailService</span>.<span style="color: #fbb6ce;">sendWelcomeEmail</span>(user.email);<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;">// 6. Retornar resposta</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">return</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: user.id,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: user.name,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: user.email<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;};<br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                </section>
                
                <!-- Camadas da Arquitetura -->
                <section id="camadas">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Camadas da Arquitetura Limpa</h2>
                    
                    <div style="display: flex; justify-content: center; margin: 30px 0;">
                        <div style="text-align: center;">
                            <div style="width: 300px; height: 300px; position: relative; margin: 0 auto;">
                                <!-- Camadas concêntricas -->
                                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 3px solid #e74c3c; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(231, 76, 60, 0.1);">
                                    <span style="font-weight: bold;">Entidades</span>
                                </div>
                                <div style="position: absolute; top: 30px; left: 30px; right: 30px; bottom: 30px; border: 3px solid #3498db; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(52, 152, 219, 0.1);">
                                    <span style="font-weight: bold;">Casos de Uso</span>
                                </div>
                                <div style="position: absolute; top: 60px; left: 60px; right: 60px; bottom: 60px; border: 3px solid #27ae60; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(39, 174, 96, 0.1);">
                                    <span style="font-weight: bold;">Adaptadores</span>
                                </div>
                                <div style="position: absolute; top: 90px; left: 90px; right: 90px; bottom: 90px; border: 3px solid #f39c12; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(243, 156, 18, 0.1);">
                                    <span style="font-weight: bold;">Frameworks</span>
                                </div>
                            </div>
                            <p style="margin-top: 20px; font-style: italic;">Diagrama das Camadas Concêntricas da Clean Architecture</p>
                        </div>
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">1. Camada de Entidades (Entities)</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Esta é a camada mais interna, contendo as entidades do negócio e regras empresariais fundamentais. Estas classes devem ser independentes de qualquer tecnologia ou framework externo.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">2. Camada de Casos de Uso (Use Cases)</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Contém a lógica de aplicação específica e orquestra o fluxo de dados para e das entidades. Esta camada define interfaces que serão implementadas pelas camadas externas.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">3. Camada de Adaptadores de Interface (Interface Adapters)</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Converte dados entre o formato mais conveniente para os casos de uso e entidades, e o formato mais conveniente para agente externos como bancos de dados, web, UI, etc.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">4. Camada de Frameworks e Drivers</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">É a camada mais externa, contendo frameworks e tools como o banco de dados, web frameworks, etc. Geralmente, escreve-se pouco código nesta camada, apenas código de cola que conecta ao próximo círculo interno.</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <thead>
                            <tr>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0; background-color: #f7fafc; font-weight: 600; color: #2d3748;">Camada</th>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0; background-color: #f7fafc; font-weight: 600; color: #2d3748;">Responsabilidade</th>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0; background-color: #f7fafc; font-weight: 600; color: #2d3748;">Exemplos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Entidades</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Regras de negócio fundamentais</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">User, Product, Order</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Casos de Uso</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Lógica de aplicação específica</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">CreateUser, ProcessOrder</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Adaptadores</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Conversão de dados e interfaces</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Controllers, Presenters, Gateways</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Frameworks</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Tecnologias e infraestrutura</td>
                                <td style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #e2e8f0;">Database, Web Server, UI</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                
                <!-- Princípios SOLID -->
                <section id="principios">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Princípios SOLID na Arquitetura Limpa</h2>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">A Arquitetura Limpa é fortemente baseada nos princípios SOLID, que são fundamentais para criar um design de software robusto e mantível:</p>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">S - Single Responsibility Principle (SRP)</div>
                        <p style="margin-bottom: 0; text-align: justify;">Uma classe deve ter apenas uma razão para mudar. Na Clean Architecture, isso se reflete na separação clara entre entidades, casos de uso e adaptadores.</p>
                    </div>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">O - Open/Closed Principle (OCP)</div>
                        <p style="margin-bottom: 0; text-align: justify;">As entidades de software devem estar abertas para extensão, mas fechadas para modificação. Isso é alcançado através do uso de interfaces e injeção de dependências.</p>
                    </div>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">L - Liskov Substitution Principle (LSP)</div>
                        <p style="margin-bottom: 0; text-align: justify;">As classes derivadas devem ser substituíveis por suas classes base. Isso garante que as implementações concretas possam ser trocadas sem afetar o sistema.</p>
                    </div>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">I - Interface Segregation Principle (ISP)</div>
                        <p style="margin-bottom: 0; text-align: justify;">Muitas interfaces específicas são melhores do que uma interface geral. Na Clean Architecture, isso se manifesta na criação de interfaces focadas e coesas.</p>
                    </div>
                    
                    <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; margin: 15px 0; border-left: 4px solid #3498db;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c3e50;">D - Dependency Inversion Principle (DIP)</div>
                        <p style="margin-bottom: 0; text-align: justify;">Dependa de abstrações, não de implementações concretas. Este é o princípio mais importante para a Clean Architecture, permitindo que as camadas internas não dependam das externas.</p>
                    </div>
                </section>
                
                <!-- Implementação -->
                <section id="implementacao">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Implementação Prática</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Estrutura de Pastas</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Uma estrutura típica de projeto seguindo a Clean Architecture seria organizada da seguinte forma:</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        src/<br>
                        ├── domain/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Camada de Domínio (Entidades)</span><br>
                        │&nbsp;&nbsp;&nbsp;├── entities/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Entidades de negócio</span><br>
                        │&nbsp;&nbsp;&nbsp;├── value-objects/&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Objetos de valor</span><br>
                        │&nbsp;&nbsp;&nbsp;└── exceptions/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Exceções de domínio</span><br>
                        ├── application/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Camada de Aplicação (Casos de Uso)</span><br>
                        │&nbsp;&nbsp;&nbsp;├── use-cases/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Casos de uso</span><br>
                        │&nbsp;&nbsp;&nbsp;├── ports/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Interfaces (Ports)</span><br>
                        │&nbsp;&nbsp;&nbsp;└── dtos/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Objetos de transferência de dados</span><br>
                        ├── infrastructure/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Camada de Infraestrutura</span><br>
                        │&nbsp;&nbsp;&nbsp;├── persistence/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Implementações de persistência</span><br>
                        │&nbsp;&nbsp;&nbsp;├── web/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Controladores e rotas</span><br>
                        │&nbsp;&nbsp;&nbsp;└── external/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Serviços externos</span><br>
                        └── main/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Configuração e composição de raiz</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;├── config/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Configurações</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;└── di/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a0aec0;"># Injeção de dependência</span>
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Exemplo de Controller</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Um controller na camada de infraestrutura que utiliza um caso de uso:</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">class</span> <span style="color: #fbb6ce;">UserController</span> {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">constructor</span>(<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">private</span> <span style="color: #fbb6ce;">createUserUseCase</span>: <span style="color: #68d391;">CreateUserUseCase</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">private</span> <span style="color: #fbb6ce;">getUserUseCase</span>: <span style="color: #68d391;">GetUserUseCase</span><br>
                        &nbsp;&nbsp;) {}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">async</span> <span style="color: #fbb6ce;">createUser</span>(<span style="color: #fbb6ce;">req</span>: <span style="color: #68d391;">Request</span>, <span style="color: #fbb6ce;">res</span>: <span style="color: #68d391;">Response</span>): <span style="color: #68d391;">Promise</span>&lt;<span style="color: #68d391;">void</span>&gt; {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">try</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">request</span>: <span style="color: #68d391;">CreateUserRequest</span> = {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: req.body.name,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: req.body.email,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: req.body.password<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">response</span> = <span style="color: #63b3ed;">await</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">createUserUseCase</span>.<span style="color: #fbb6ce;">execute</span>(request);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.<span style="color: #fbb6ce;">status</span>(201).<span style="color: #fbb6ce;">json</span>(response);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;} <span style="color: #63b3ed;">catch</span> (error) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.<span style="color: #fbb6ce;">status</span>(400).<span style="color: #fbb6ce;">json</span>({ error: error.message });<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        &nbsp;&nbsp;}<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #63b3ed;">async</span> <span style="color: #fbb6ce;">getUser</span>(<span style="color: #fbb6ce;">req</span>: <span style="color: #68d391;">Request</span>, <span style="color: #fbb6ce;">res</span>: <span style="color: #68d391;">Response</span>): <span style="color: #68d391;">Promise</span>&lt;<span style="color: #68d391;">void</span>&gt; {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">try</span> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">userId</span> = req.params.id;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">user</span> = <span style="color: #63b3ed;">await</span> <span style="color: #fbb6ce;">this</span>.<span style="color: #fbb6ce;">getUserUseCase</span>.<span style="color: #fbb6ce;">execute</span>(userId);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.<span style="color: #fbb6ce;">json</span>(user);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;} <span style="color: #63b3ed;">catch</span> (error) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.<span style="color: #fbb6ce;">status</span>(404).<span style="color: #fbb6ce;">json</span>({ error: error.message });<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        &nbsp;&nbsp;}<br>
                        }
                    </div>
                </section>
                
                <!-- Benefícios -->
                <section id="beneficios">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Benefícios da Arquitetura Limpa</h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
                        <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; border-left: 4px solid #27ae60;">
                            <h4 style="color: #2980b9; margin: 0 0 10px; font-size: 1.2rem;">Independência Tecnológica</h4>
                            <p style="margin-bottom: 0; text-align: justify;">As regras de negócio não dependem de frameworks, bancos de dados ou qualquer tecnologia externa, permitindo migrações tecnológicas com impacto mínimo.</p>
                        </div>
                        
                        <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; border-left: 4px solid #27ae60;">
                            <h4 style="color: #2980b9; margin: 0 0 10px; font-size: 1.2rem;">Testabilidade</h4>
                            <p style="margin-bottom: 0; text-align: justify;">A separação clara de responsabilidades e o uso de interfaces facilitam a criação de testes unitários, de integração e end-to-end.</p>
                        </div>
                        
                        <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; border-left: 4px solid #27ae60;">
                            <h4 style="color: #2980b9; margin: 0 0 10px; font-size: 1.2rem;">Manutenibilidade</h4>
                            <p style="margin-bottom: 0; text-align: justify;">Mudanças em uma parte do sistema têm impacto mínimo em outras partes, reduzindo o custo de manutenção e evolução do software.</p>
                        </div>
                        
                        <div style="background-color: white; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 20px; border-left: 4px solid #27ae60;">
                            <h4 style="color: #2980b9; margin: 0 0 10px; font-size: 1.2rem;">Flexibilidade</h4>
                            <p style="margin-bottom: 0; text-align: justify;">Novas funcionalidades podem ser adicionadas com menos esforço, e diferentes partes do sistema podem evoluir independentemente.</p>
                        </div>
                    </div>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Exemplo de Testabilidade</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">A Clean Architecture facilita a criação de testes unitários para os casos de uso:</p>
                    
                    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 6px; margin: 20px 0; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem; line-height: 1.5;">
                        <span style="color: #63b3ed;">describe</span>(<span style="color: #68d391;">'CreateUserUseCase'</span>, () => {<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">let</span> <span style="color: #fbb6ce;">createUserUseCase</span>: <span style="color: #68d391;">CreateUserUseCase</span>;<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">let</span> <span style="color: #fbb6ce;">mockUserRepository</span>: <span style="color: #68d391;">jest.Mocked</span>&lt;<span style="color: #68d391;">IUserRepository</span>&gt;;<br>
                        &nbsp;&nbsp;<span style="color: #63b3ed;">let</span> <span style="color: #fbb6ce;">mockEmailService</span>: <span style="color: #68d391;">jest.Mocked</span>&lt;<span style="color: #68d391;">IEmailService</span>&gt;;<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">beforeEach</span>(() => {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;mockUserRepository = {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;findByEmail: jest.fn(),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;save: jest.fn()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;mockEmailService = {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendWelcomeEmail: jest.fn()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;createUserUseCase = <span style="color: #63b3ed;">new</span> <span style="color: #fbb6ce;">CreateUserUseCase</span>(mockUserRepository, mockEmailService);<br>
                        &nbsp;&nbsp;});<br><br>
                        
                        &nbsp;&nbsp;<span style="color: #fbb6ce;">it</span>(<span style="color: #68d391;">'should create a new user'</span>, <span style="color: #63b3ed;">async</span> () => {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">request</span> = {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: <span style="color: #68d391;">'John Doe'</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: <span style="color: #68d391;">'john@example.com'</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: <span style="color: #68d391;">'password123'</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;};<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;mockUserRepository.findByEmail.mockResolvedValue(<span style="color: #63b3ed;">null</span>);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;mockUserRepository.save.mockResolvedValue();<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;mockEmailService.sendWelcomeEmail.mockResolvedValue();<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #63b3ed;">const</span> <span style="color: #fbb6ce;">result</span> = <span style="color: #63b3ed;">await</span> createUserUseCase.execute(request);<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fbb6ce;">expect</span>(result).toHaveProperty(<span style="color: #68d391;">'id'</span>);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fbb6ce;">expect</span>(result.name).toBe(request.name);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fbb6ce;">expect</span>(mockUserRepository.save).toHaveBeenCalledTimes(1);<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fbb6ce;">expect</span>(mockEmailService.sendWelcomeEmail).toHaveBeenCalledTimes(1);<br>
                        &nbsp;&nbsp;});<br>
                        });
                    </div>
                </section>
                
                <!-- Desafios -->
                <section id="desafios">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Desafios e Considerações</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Complexidade Inicial</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">A Clean Architecture introduz uma complexidade inicial significativa, com muitas camadas, interfaces e abstrações. Isso pode ser excessivo para projetos pequenos ou simples.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Curva de Aprendizado</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Desenvolvedores acostumados com architectures mais simples podem ter dificuldade em entender e aplicar corretamente todos os conceitos e princípios.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Over-engineering</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Há o risco de criar abstrações desnecessárias e código excessivamente complexo para problemas simples, o que pode dificultar a manutenção.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Performance</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">O uso extensivo de interfaces, injeção de dependência e múltiplas camadas pode introduzir overhead de performance, embora geralmente seja insignificante para a maioria das aplicações.</p>
                    
                    <div style="background-color: #edf2f7; border-left: 4px solid #e74c3c; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c5282;">Quando Usar a Clean Architecture?</div>
                        <ul style="margin: 10px 0; padding-left: 20px;">
                            <li style="margin-bottom: 5px;">Projetos de médio a grande porte</li>
                            <li style="margin-bottom: 5px;">Sistemas com regras de negócio complexas</li>
                            <li style="margin-bottom: 5px;">Projetos com expectativa de longa vida útil</li>
                            <li style="margin-bottom: 5px;">Equipes grandes ou distribuídas</li>
                            <li style="margin-bottom: 5px;">Necessidade de alta testabilidade</li>
                            <li style="margin-bottom: 5px;">Possibilidade de mudanças tecnológicas futuras</li>
                        </ul>
                    </div>
                </section>
                
                <!-- Casos de Uso -->
                <section id="casos-uso">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Casos de Uso Reais</h2>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Sistemas Bancários</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Instituições financeiras utilizam a Clean Architecture para garantir que as complexas regras de negócio relacionadas a transações, compliance e segurança sejam independentes de tecnologias específicas e facilmente testáveis.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">E-commerce</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Plataformas de e-commerce se beneficiam da capacidade de evoluir diferentes partes do sistema (catálogo, carrinho, pagamentos) independentemente, enquanto mantêm a consistência das regras de negócio.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Sistemas de Saúde</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">Aplicações médicas utilizam esta arquitetura para garantir que as críticas regras relacionadas a tratamentos, dosagens e privacidade de dados sejam robustas e independentes de mudanças tecnológicas.</p>
                    
                    <h3 style="color: #3498db; margin: 25px 0 10px; font-size: 1.4rem;">Microsserviços</h3>
                    <p style="margin-bottom: 15px; text-align: justify;">A Clean Architecture é frequentemente combinada com arquitetura de microsserviços, onde cada serviço implementa sua própria clean architecture, garantindo independência e capacidade de evolução.</p>
                </section>
                
                <!-- Conclusão -->
                <section id="conclusao">
                    <h2 style="color: #2c3e50; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eaeaea; font-size: 1.8rem;">Conclusão</h2>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">A <strong>Arquitetura Limpa</strong> representa uma evolução significativa no design de software, oferecendo uma abordagem sistemática para criar sistemas que são maintainable, testable e independentes de frameworks e tecnologias externas.</p>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">Ao organizar o código em camadas concêntricas e seguir a Regra de Dependência, os desenvolvedores podem criar software que resiste ao teste do tempo e se adapta facilmente a mudanças tecnológicas e de requisitos de negócio.</p>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">Embora introduza complexidade inicial e tenha uma curva de aprendizado, os benefícios a longo prazo em termos de manutenibilidade, testabilidade e flexibilidade tornam a Clean Architecture uma escolha valiosa para projetos de software sérios que precisam evoluir e se manter relevantes ao longo do tempo.</p>
                    
                    <div style="background-color: #edf2f7; border-left: 4px solid #27ae60; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                        <div style="font-weight: bold; margin-bottom: 10px; color: #2c5282;">Principais Takeaways</div>
                        <ul style="margin: 10px 0; padding-left: 20px;">
                            <li style="margin-bottom: 5px;">As dependências devem apontar para dentro, em direção às regras de negócio</li>
                            <li style="margin-bottom: 5px;">Separe claramente as responsabilidades em camadas</li>
                            <li style="margin-bottom: 5px;">Use interfaces para desacoplar as camadas</li>
                            <li style="margin-bottom: 5px;">As entidades devem conter as regras de negócio mais fundamentais</li>
                            <li style="margin-bottom: 5px;">Os casos de uso orquestram o fluxo de dados entre as entidades</li>
                            <li style="margin-bottom: 5px;">Adaptadores convertem dados entre o formato interno e externo</li>
                            <li style="margin-bottom: 5px;">Mantenha as frameworks e tecnologias na camada mais externa</li>
                        </ul>
                    </div>
                    
                    <p style="margin-bottom: 15px; text-align: justify;">A adoção da Clean Architecture é um investimento no futuro do software - um investimento que paga dividendos significativos à medida que o sistema cresce, evolui e enfrenta as inevitáveis mudanças tecnológicas e de negócio.</p>
                </section>
            </article>
            
            <!-- Sidebar -->
            <aside style="background-color: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 25px; height: fit-content; position: sticky; top: 80px;">
                <h3 style="color: #2c3e50; margin: 0 0 15px; font-size: 1.4rem;">Recursos Adicionais</h3>
                <ul style="margin: 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 8px;"><a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank" style="color: #3498db; text-decoration: none;">Artigo Original - Uncle Bob</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://github.com/jbuget/clean-architecture-dotnet" target="_blank" style="color: #3498db; text-decoration: none;">Exemplo em .NET</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://github.com/bespoyasov/clean-architecture" target="_blank" style="color: #3498db; text-decoration: none;">Exemplo em TypeScript</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://github.com/bluething/clean-architecture" target="_blank" style="color: #3498db; text-decoration: none;">Exemplo em Java</a></li>
                    <li style="margin-bottom: 8px;"><a href="https://github.com/mattia-battiston/clean-architecture-example" target="_blank" style="color: #3498db; text-decoration: none;">Exemplo em Python</a></li>
                </ul>
                
                <h3 style="color: #2c3e50; margin: 25px 0 10px; font-size: 1.4rem;">Livros Recomendados</h3>
                <ul style="margin: 15px 0; padding-left: 20px; font-size: 0.9rem;">
                    <li style="margin-bottom: 8px;">"Clean Architecture" - Robert C. Martin</li>
                    <li style="margin-bottom: 8px;">"Domain-Driven Design" - Eric Evans</li>
                    <li style="margin-bottom: 8px;">"Implementing Domain-Driven Design" - Vaughn Vernon</li>
                    <li style="margin-bottom: 8px;">"Clean Code" - Robert C. Martin</li>
                </ul>
                
                <h3 style="color: #2c3e50; margin: 25px 0 10px; font-size: 1.4rem;">Próximos Passos</h3>
                <ul style="margin: 15px 0; padding-left: 20px; font-size: 0.9rem;">
                    <li style="margin-bottom: 8px;">Estude os princípios SOLID</li>
                    <li style="margin-bottom: 8px;">Pratique com um projeto pequeno</li>
                    <li style="margin-bottom: 8px;">Explore Domain-Driven Design</li>
                    <li style="margin-bottom: 8px;">Aprenda sobre CQRS e Event Sourcing</li>
                    <li style="margin-bottom: 8px;">Experimente diferentes padrões de injeção de dependência</li>
                </ul>
            </aside>`
    }
]