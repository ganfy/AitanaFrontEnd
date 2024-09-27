import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';



@Component({
  selector: 'aitana-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
    messages: { text: string, user: string }[] = [];
    userMessage: string = '';

    @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

    ngAfterViewChecked() {
      this.scrollToBottom();
    }
  
    sendMessage() {
      if (this.userMessage.trim()) {
        // Agregar mensaje del usuario
        this.messages.push({ text: this.userMessage, user: 'user' });
  
        // Respuesta simulada de Aitana
        setTimeout(() => {
          this.messages.push({
            text: this.generateAitanaResponse(this.userMessage),
            user: 'aitana'
          });
        }, 1000);
  
        // Limpiar el campo de entrada
        this.userMessage = '';
      }
    }
  
    generateAitanaResponse(message: string): string {
      return `Aitana te responde: "${message}"`;
    }
    

    scrollToBottom(): void {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error('No se pudo hacer scroll:', err);
      }
    }
}
