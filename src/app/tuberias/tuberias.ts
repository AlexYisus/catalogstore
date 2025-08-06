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
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.width = '100%';
    iframe.height = '600px';
    iframe.style.border = 'none';
    
    // Abre en una ventana emergente o incrusta en el DOM
    const newWindow = window.open('', '_blank');
    newWindow?.document.body.appendChild(iframe);
    console.log('PDF abierto en ventana emergente');
  } catch (error) {
    console.error('Error al abrir PDF:', error);
  }
}

}