import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cables-electricos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cables.html',
  styleUrl: './cables.css'
})
export class CablesElectricosComponent {
  // Logos de marcas
  logos = [
    'assets/images/andes.jpg',
    'assets/images/incable.png',

    
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  viewPDF(): void {
    try {
      const pdfUrl = 'assets/catalogos/cables_electricos_catalogo_ccaj.pdf';
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      console.log('Catálogo de accesorios abierto en nueva pestaña');
    } catch (error) {
      console.error('Error al abrir PDF:', error);
    }
  }

  /*downloadPDF(): void {
    try {
      const link = document.createElement('a');
      link.href = 'assets/catalogos/accesorios.pdf';
      link.download = 'catalogo-accesorios.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Descarga de catálogo iniciada');
    } catch (error) {
      console.error('Error al descargar PDF:', error);
    }
  }*/
}