import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accesorios.html',
  styleUrls: ['./accesorios.css']
})
export class AccesoriosComponent {
  // Logos de marcas
  logos = [
    'assets/images/fv.png',
    'assets/images/stanley.png',
    'assets/images/veto.png',
    'assets/images/qsb.png',
    'assets/images/dewalt.png',
    'assets/images/fandeli.png',
    'assets/images/emtop.png'
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  viewPDF(): void {
    try {
      const pdfUrl = 'assets/catalogos/catalogo-iluminacion.pdf';
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