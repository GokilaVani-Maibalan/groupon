import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supabase } from '../supabase.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) {}

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value as string;
      const password = this.loginForm.get('password')!.value as string;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        console.error('Login error:', error.message);
      } else {
        this.router.navigate(['/home']);
        console.log('Login successful');
      }
    }
  }
}
