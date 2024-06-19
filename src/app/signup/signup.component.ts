import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { supabase } from '../supabase.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    businessAddress: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    typeofBusiness: new FormControl('', Validators.required),

  });
  businesses = ['Local experiences (Restaurants, Beauty, Leisure & Services)', 'Ticketed Events', 'Hotels & Travel'];


  constructor(private router: Router) { }

  async onSubmit(): Promise<void> {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')!.value as string;
      const password = this.signupForm.get('password')!.value as string;
      const phoneNumber = this.signupForm.get('phoneNumber')!.value as string;
      const firstName = this.signupForm.get('firstName')!.value as string;
      const businessName = this.signupForm.get('businessName')!.value as string;
      const businessAddress = this.signupForm.get('businessAddress')!.value as string;
      const typeofBusiness = this.signupForm.get('business')!.value as string;


      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        console.error('Signup error:', error.message);
      } else {
        console.log('Signup successful');
        this.router.navigate(['/home']);
        const user = data.user;
        if (user) {
          await supabase.from('profiles').insert({
            id: user.id,
            firstName,
            email,
            phoneNumber,
            businessName,
            businessAddress,
            typeofBusiness
          });
        }
      }
    }
  }
}
