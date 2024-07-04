import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  message: string | null = null;
  constructor(private supabaseService: SupabaseService) {}
  async onSubmit(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value as string;
      if (!email) {
        console.error('Email is required');
        return;
      }
      const resetSent = await this.supabaseService.forgotPassword(email);
      if (resetSent) {
        alert('Reset email sent');
        console.log('Password reset email sent to', email);
      } else {
        alert('Failed to send email');

        console.error('Failed to send password reset email');
      }
    }
  }
}
