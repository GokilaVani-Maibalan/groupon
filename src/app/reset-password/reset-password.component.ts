import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  message: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  async onSubmit(): Promise<void> {
    if (this.resetPasswordForm.valid) {
      const password = this.resetPasswordForm.get('password')?.value as string;
      const confirmPassword = this.resetPasswordForm.get('confirmPassword')
        ?.value as string;

      if (password !== confirmPassword) {
        this.message = 'Passwords do not match.';
        return;
      }

      const { data, error } = await this.supabaseService.updatePassword(
        password
      );
      console.log(data);
      try {
        const email = await this.supabaseService.getCurrentUserId();
        console.log(email);
        if (!email) {
          console.error('Email not found.');
          return;
        }

        await this.supabaseService.updateMerchantPassword(email, password);

        if (error) {
          alert('Error updating password');
        } else {
          console.log(data);
          alert(
            'Password updated successfully. You can now log in with your new password.'
          );
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
