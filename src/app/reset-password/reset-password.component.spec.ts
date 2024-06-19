import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supabase } from '../supabase.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  token: string | null = null;
  message: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  async onSubmit(): Promise<void> {
    if (this.resetPasswordForm.valid && this.token) {
      const password = this.resetPasswordForm.get('password')?.value as string;
      const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value as string;

      if (password !== confirmPassword) {
        this.message = 'Passwords do not match.';
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password
      });

      if (error) {
        console.error('Error resetting password:', error.message);
        this.message = 'Error resetting password. Please try again.';
      } else {
        this.message = 'Password has been reset successfully.';
      }
    }
  }
}
