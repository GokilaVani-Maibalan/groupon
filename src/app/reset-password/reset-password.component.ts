// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute,Router } from '@angular/router';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { SupabaseService } from '../supabase.service';
// import { RouterModule } from '@angular/router';


// @Component({
//   selector: 'app-reset-password',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule,RouterModule],
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.css']
// })
// export class ResetPasswordComponent implements OnInit {
//   resetPasswordForm = new FormGroup({
//     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
//     confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
//   });

//   token: string | null = null;
//   message: string | null = null;

//   constructor(private route: ActivatedRoute,
//     private router: Router,
//   ) { }

//   ngOnInit(): void {
//     this.token = this.route.snapshot.queryParamMap.get('token');
//   }

  
//   async onSubmit(): Promise<void> {
//     if (this.resetPasswordForm.valid && this.token) {
//       const password = this.resetPasswordForm.get('password')?.value as string;
//       const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value as string;

//       if (password !== confirmPassword) {
//         this.message = 'Passwords do not match.';
//         return;
//       }

//       const { error } = await SupabaseService.auth.updateUser({
//         password
//       });

//       if (error) {
//         console.error('Error resetting password:', error.message);
//         this.message = 'Error resetting password. Please try again.';
//       } else {
//         this.message = 'Password has been reset successfully.';
//         this.router.navigate(['/login']);

//       }
//     }
//   }
// }
