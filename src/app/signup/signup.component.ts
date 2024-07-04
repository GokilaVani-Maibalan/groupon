import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    taxId: new FormControl('', Validators.required),
    // taxIdDoc: new FormControl('', Validators.required),
    businessAddress: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    typeofBusiness: new FormControl('', Validators.required),
  });
  businesses = [
    'Local experiences (Restaurants, Beauty, Leisure & Services)',
    'Ticketed Events',
    'Hotels & Travel',
  ];

  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  async onSubmit(): Promise<void> {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')!.value as string;
      const phoneNumber = this.signupForm.get('phoneNumber')!.value as string;
      const firstName = this.signupForm.get('firstName')!.value as string;
      const businessName = this.signupForm.get('businessName')!.value as string;
      const businessAddress = this.signupForm.get('businessAddress')!
        .value as string;
      const taxId = this.signupForm.get('taxId')!.value as string;
      // const taxIdDoc = this.signupForm.get('taxIdDoc')!.value as string;
      const typeofBusiness = this.signupForm.get('typeofBusiness')!
        .value as string;
      const password = this.signupForm.get('password')!.value as string;

      try {
        const userExists = await this.supabaseService.checkUserExists(email);
        if (userExists) {
          alert('Merchant already exists!');
        } else {
          const user = this.supabaseService.signUp(email, password);
          if (user !== null && user !== undefined) {
            // if (this.selectedFile) {
            //   const fileUrl = await this.supabaseService.uploadFile(
            //     this.selectedFile
            //   );
            //   if (fileUrl) {
            const merchantDetails = {
              email: email,
              phone_number: phoneNumber,
              name: firstName,
              business_name: businessName,
              business_address: businessAddress,
              tax_id: taxId,
              // tax_id_doc: taxIdDoc,
              typeof_business: typeofBusiness,
              password: password,
            };
            await this.supabaseService.storeUserData(
              merchantDetails,
              'merchants'
            );
            alert('Signup successful! Please wait for admin approval.');
            this.signupForm.reset();
            this.router.navigate(['/get-started']);

            console.log('value got');
          }
          // else {
          //   alert('File upload failed!');
          // }
          //   }
          // }
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed!');
      }
    }
  }
}
