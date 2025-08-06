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
    const pdfUrl = 'assets/catalogos/catalogo_tuberias_ccaj.pdf';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Para escritorio, usa iframe/embed
      window.open(`/pdf-viewer.html?file=${encodeURIComponent(pdfUrl)}`, '_blank');
    }
  }

}