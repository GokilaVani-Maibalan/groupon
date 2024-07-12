import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SignupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
