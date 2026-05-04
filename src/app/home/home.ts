import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Datos del formulario
  formData = {
    name: '',
    email: '',
    product: '',
    message: ''
  };
  
  // Estado de la notificación
  notification = {
    show: false,
    message: '',
    type: 'success' // 'success' o 'error'
  };
  
  // Número de WhatsApp del negocio
  private readonly WHATSAPP_NUMBER = '593992953397'; // Cambia por tu número

  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate([`/${category}`]);
  }

  navigateToCatalog(category: string) {
    window.open(`/assets/catalogos/${category}.pdf`, '_blank');
  }

  // Método para enviar el formulario por WhatsApp
  sendToWhatsApp(event: Event): void {
    event.preventDefault();
    
    // Validar campos
    if (!this.validateForm()) {
      return;
    }
    
    // Formatear mensaje de WhatsApp
    const message = this.formatWhatsAppMessage();
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${message}`;
    
    // Mostrar notificación
    this.showNotification('Redirigiendo a WhatsApp...', 'success');
    
    // Abrir WhatsApp después de 1 segundo
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      
      // Opcional: Limpiar el formulario
      setTimeout(() => {
        this.clearForm();
        this.showNotification('¡Mensaje listo para enviar! Te contactaremos pronto', 'success');
      }, 2000);
    }, 1000);
  }

  // Validar todos los campos del formulario
  private validateForm(): boolean {
    if (!this.formData.name.trim()) {
      this.showNotification('Por favor, ingresa tu nombre completo', 'error');
      return false;
    }
    
    if (!this.formData.email.trim()) {
      this.showNotification('Por favor, ingresa tu email', 'error');
      return false;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.showNotification('Por favor, ingresa un email válido', 'error');
      return false;
    }
    
    if (!this.formData.product.trim()) {
      this.showNotification('Por favor, ingresa el producto de interés', 'error');
      return false;
    }
    
    if (!this.formData.message.trim()) {
      this.showNotification('Por favor, ingresa tu mensaje', 'error');
      return false;
    }
    
    return true;
  }

  // Formatear mensaje para WhatsApp
  private formatWhatsAppMessage(): string {
    return `*NUEVA COTIZACIÓN - ELECTROFERRETERÍA-CCAJ%0A` +
           `*Nombre:* ${this.encodeWhatsAppText(this.formData.name)}%0A` +
           `*Email:* ${this.encodeWhatsAppText(this.formData.email)}%0A` +
           `*Producto de interés:* ${this.encodeWhatsAppText(this.formData.product)}%0A` +
           `*Mensaje:*%0A${this.encodeWhatsAppText(this.formData.message)}%0A%0A` +
           `_Mensaje enviado desde el formulario web_`;
  }

  // Codificar texto para URL de WhatsApp
  private encodeWhatsAppText(text: string): string {
    return encodeURIComponent(text.trim());
  }

  // Mostrar notificación
  private showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = {
      show: true,
      message: message,
      type: type
    };
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
      this.notification.show = false;
    }, 5000);
  }

  // Limpiar el formulario
  clearForm(): void {
    this.formData = {
      name: '',
      email: '',
      product: '',
      message: ''
    };
  }

  // Cerrar notificación manualmente
  closeNotification(): void {
    this.notification.show = false;
  }
}