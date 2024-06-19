import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supabase } from '../supabase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  message: string | null = null;

  async onSubmit(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value as string;

      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        console.error('Error sending password reset email:', error.message);
        this.message = 'Error sending password reset email. Please try again.';
      } else {
        this.message = 'Password reset email sent. Please check your inbox.';
      }
    }
  }
}
