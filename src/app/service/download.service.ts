// Serviço para gerenciar downloads de arquivos
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  /**
   * Download do currículo em formato DOCX
   */
  downloadCV(): void {
    this.downloadFile(
      '/assets/arquivos/curriculo_diego_dev.docx',
      'Curriculo_Diego_de_Souza_Dev.docx',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
  }

  /**
   * Função genérica para download de arquivos
   */
  private downloadFile(url: string, filename: string, mimeType?: string): void {
    try {
      // Verificar se o arquivo existe antes de tentar o download
      this.checkFileExists(url).then(exists => {
        if (exists) {
          this.performDownload(url, filename);
        } else {
          console.error('Arquivo não encontrado:', url);
          this.showDownloadError();
        }
      }).catch(() => {
        // Se falhar a verificação, tenta o download mesmo assim
        this.performDownload(url, filename);
      });
    } catch (error) {
      console.error('Erro no download:', error);
      this.showDownloadError();
    }
  }

  /**
   * Executa o download do arquivo
   */
  private performDownload(url: string, filename: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Adicionar ao DOM, clicar e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download iniciado: ${filename}`);
  }

  /**
   * Verifica se o arquivo existe
   */
  private async checkFileExists(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Mostra erro de download para o usuário
   */
  private showDownloadError(): void {
    alert('Erro ao fazer download do currículo. Tente novamente ou entre em contato.');
  }
}