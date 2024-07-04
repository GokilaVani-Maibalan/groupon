import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [NavbarComponent, SignupComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css',
})
export class GetStartedComponent {}
