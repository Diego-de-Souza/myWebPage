import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-whatsapp',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-whatsapp.component.html',
  styleUrls: ['./contact-whatsapp.component.scss']
})
export class ContactWhatsappComponent {
  constructor(private translate: TranslateService) {}

  showModal = false;
  nome = '';
  telefone = '';
  empresa = '';

  get whatsappUrl(): string {
    const base = 'https://wa.me/';
    const numero = '11961969969'; // Substitua pelo número do WhatsApp
    const mensagem = this.translate.instant('whatsapp.message', {
      name: this.nome,
      phone: this.telefone,
      company: this.empresa
    });
    return `${base}${numero}?text=${encodeURIComponent(mensagem)}`;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.nome = '';
    this.telefone = '';
    this.empresa = '';
  }

  sendWhatsapp() {
    window.open(this.whatsappUrl, '_blank');
    this.closeModal();
  }
}
