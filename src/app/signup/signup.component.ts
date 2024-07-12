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
    taxIdDoc: new FormControl('', Validators.required),
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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.selectedFile = file;
      this.signupForm.patchValue({ taxIdDoc: file.name });
    }
  }

  async onSubmit(): Promise<void> {
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;

      try {
        const userExists = await this.supabaseService.checkUserExists(
          formValues.email!
        );
        if (userExists) {
          alert('Merchant already exists!');
        } else {
          const user = this.supabaseService.signUp(
            formValues.email!,
            formValues.password!
          );
          if (user !== null && user !== undefined) {
            //   if (fileUrl) {
            const merchantDetails = {
              email: formValues.email,
              phone_number: formValues.phoneNumber,
              name: formValues.firstName,
              business_name: formValues.businessName,
              business_address: formValues.businessAddress,
              tax_id: formValues.taxId,
              tax_id_doc: this.selectedFile ? this.selectedFile.name : '',
              typeof_business: formValues.typeofBusiness,
              password: formValues.password,
            };
            await this.supabaseService.storeUserData(
              merchantDetails,
              'merchants'
            );
            if (this.selectedFile) {
              const fileName = `${Date.now()}_${this.selectedFile.name}`;
              const file = this.selectedFile;
              const { data, error } = await this.supabaseService.uploadFile(
                fileName,
                file
              );
              console.log(data);
              if (data) {
                console.log('File uploaded:', data);
              } else {
                console.error('Error uploading file:', error);
              }
            }
            alert('Signup successful! Please wait for admin approval.');
            this.signupForm.reset();
            this.router.navigate(['/campaign']);
            this.selectedFile = null;
            console.log(merchantDetails);
          }
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed!');
      }
    }
  }
}
