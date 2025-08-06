import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate([`/${category}`]);
  }

  navigateToCatalog(category: string) {
    // Asumiendo que tienes un archivo PDF llamado 'tuberias.pdf' en assets/catalogos
    window.open(`/assets/catalogos/${category}.pdf`, '_blank');
  }
}