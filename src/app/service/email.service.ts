import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_TEMPLATE_ID, 
  EMAILJS_PUBLIC_KEY,
  CONTACT_EMAIL,
  CONTACT_NAME
} from '../../../emailjs-config';

export interface EmailData {
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  // Configurações do EmailJS - obtidas do arquivo emailjs-config.ts
  private readonly SERVICE_ID = EMAILJS_SERVICE_ID;
  private readonly TEMPLATE_ID = EMAILJS_TEMPLATE_ID;
  private readonly PUBLIC_KEY = EMAILJS_PUBLIC_KEY;

  constructor() {
    // Inicializar EmailJS
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // Preparar os dados para o template
      const templateParams = {
        from_name: emailData.nome,
        from_email: emailData.email,
        phone: emailData.telefone,
        contact_type: this.getContactTypeLabel(emailData.tipo),
        message: emailData.mensagem,
        to_name: CONTACT_NAME,
        reply_to: emailData.email,
        current_date: new Date().toLocaleString('pt-BR')
      };

      console.log('Enviando email com dados:', templateParams);

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log('Email enviado com sucesso:', response);
      return response.status === 200;
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw new Error('Falha ao enviar email. Verifique as configurações do EmailJS.');
    }
  }

  private getContactTypeLabel(tipo: string): string {
    const tipos: Record<string, string> = {
      'elogio': 'Elogio',
      'proposta': 'Proposta de Trabalho',
      'orcamento': 'Solicitação de Orçamento',
      'curiosidade': 'Curiosidade Técnica',
      'sugestao': 'Sugestão',
      'colaboracao': 'Proposta de Colaboração'
    };
    return tipos[tipo] || tipo;
  }

  // Método para validar se as configurações estão corretas
  isConfigured(): boolean {
    const hasServiceId = this.SERVICE_ID && !this.SERVICE_ID.includes('SEU_');
    const hasTemplateId = this.TEMPLATE_ID && !this.TEMPLATE_ID.includes('SEU_');
    const hasPublicKey = this.PUBLIC_KEY && !this.PUBLIC_KEY.includes('SUA_');
    
    return hasServiceId && hasTemplateId && hasPublicKey;
  }

  // Método alternativo usando mailto como fallback
  sendEmailViaMailto(emailData: EmailData): void {
    const subject = `[${this.getContactTypeLabel(emailData.tipo)}] Contato de ${emailData.nome}`;
    const body = `
Nome: ${emailData.nome}
Email: ${emailData.email}
Telefone: ${emailData.telefone}
Tipo: ${this.getContactTypeLabel(emailData.tipo)}

Mensagem:
${emailData.mensagem}
    `.trim();

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  }
}