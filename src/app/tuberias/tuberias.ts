import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tuberias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tuberias.html',
  styleUrl: './tuberias.css'
})
export class TuberiasComponent {
  // Logos de marcas
  logos = [
    'assets/images/plastigama.png',
    'assets/images/rival.jpg',

    
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  viewPDF(): void {
    try {
      const pdfUrl = 'assets/catalogos/catalogo_tuberias_ccaj.pdf';
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      console.log('Catálogo de accesorios abierto en nueva pestaña');
    } catch (error) {
      console.error('Error al abrir PDF:', error);
    }
  }

}