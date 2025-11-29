import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-whatsapp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-whatsapp.component.html',
  styleUrls: ['./contact-whatsapp.component.scss']
})
export class ContactWhatsappComponent {
  showModal = false;
  nome = '';
  telefone = '';
  empresa = '';

  get whatsappUrl(): string {
    const base = 'https://wa.me/';
    const numero = '11961969969'; // Substitua pelo número do WhatsApp
    const mensagem =
      `Olá! Meu nome é ${this.nome}, meu telefone é ${this.telefone} e sou da empresa ${this.empresa}. Gostaria de saber mais sobre seus serviços.`;
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
