import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthError } from '@supabase/supabase-js';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value as string;
      const password = this.loginForm.get('password')!.value as string;

      try {
        const user = await this.supabaseService.signIn(email, password);
      } catch (error) {
        console.error('Sign-in process error:', error);
        alert('An error occurred during sign-in');
      }
    }
  }
}
