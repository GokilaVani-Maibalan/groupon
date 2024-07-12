import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css',
})
export class TemplatesComponent {
  currentPage: number = 0;
  totalPages: number = 2;
  nextClicked: boolean = false;

  selectedOptions: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedOptions = history.state.selectedOptions || [];
  }

  previous(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.nextClicked = false;
    }
  }

  next(): void {
    if (this.currentPage == 0) {
      this.currentPage++;
      this.nextClicked = true;
    } else {
      this.router.navigate(['/forms']);
    }
  }

  modalOpen = false;

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
