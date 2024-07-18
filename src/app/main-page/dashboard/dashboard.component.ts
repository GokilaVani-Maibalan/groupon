import { Component } from '@angular/core';
import { MainSidebarComponent } from '../main-sidebar/main-sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MainSidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
