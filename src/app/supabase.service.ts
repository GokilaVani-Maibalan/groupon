import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
  AuthError,
  User,
} from '@supabase/supabase-js';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://yuivbdseztzjpvsxolkt.supabase.co';
  private supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXZiZHNlenR6anB2c3hvbGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDc2NTMsImV4cCI6MjAzNDUyMzY1M30.fiSFTl6c55ix-xe_KjU4ox0-EonMvidUus7-iG39Hhc';
  public supabase: SupabaseClient;

  constructor(private router: Router) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  async checkUserExists(email: string): Promise<boolean> {
    try {
      const { data, error } = await this.supabase
        .from('merchants')
        .select('id')
        .eq('email', email)
        .single();
      if (error && error.code !== 'PGRST116') {
        console.error('Error checking user:', error.message);
        throw error;
      }
      return !!data;
    } catch (error) {
      console.error('Error checking user:', error);
      throw error;
    }
  }

  async signUp(email: string, password: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }

    return data;
  }

  async storeUserData(data: any, merchants: string): Promise<any> {
    const { data: merchantData, error } = await this.supabase
      .from(merchants)
      .insert([data]);

    if (error) {
      console.error('Error storing user data:', error.message);
      throw error;
    }

    return merchantData;
  }

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert('Invalid credentials');
      } else {
        alert('User logged in successfully');
        this.router.navigate(['/campaign']);
      }
      return data;
    } catch (error) {
      console.error('Error signing in:', error);

      return { user: null, error: error as AuthError };
    }
  }
  async forgotPassword(email: string) {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error;
      }
      console.log('Password reset email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending password reset email:');
      return false;
    }
  }

  async updatePassword(newPassword: string) {
    const { data, error } = await this.supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) {
      alert('Password reset failed!');
    } else {
      alert('Password reset successful');
    }
    return { data, error };
  }

  async updateMerchantPassword(
    email: string,
    newPassword: string
  ): Promise<any> {
    try {
      const { error } = await this.supabase
        .from('merchants')
        .update({ password: newPassword })
        .eq('email', email);

      if (error) {
        throw new Error('Error updating merchant password: ' + error.message);
      }

      console.log('Merchant password updated successfully.');
    } catch (error) {
      console.error('Caught error while updating merchant password:');
      throw error;
    }
  }

  async getCurrentUserId(): Promise<string | null> {
    const { data: user, error } = await this.supabase.auth.getUser();
    if (error) {
      console.error('Error fetching user:', error.message);
      return null;
    }
    return user?.user.email || null;
  }

  async getCurrentUser(): Promise<User | null> {
    const { data, error } = await this.supabase.auth.getUser();
    if (error || !data.user) {
      return null;
    }
    return data.user;
  }

  async uploadFile(fileName: string, file: File) {
    const { data, error } = await this.supabase.storage
      .from('tax_docs')
      .upload(fileName, file);
    return { data, error };
  }

  async getItems() {
    const { data, error } = await this.supabase.from('services').select('*');
    if (error) console.error(error);
    return data;
  }
  async getLevel2Services(service_name: string) {
    const { data, error } = await this.supabase
      .from('level2_services')
      .select('*, services!inner(name)')
      .eq('services.name', service_name);
    if (error) console.error(error);
    return data;
  }

  async getOptions(level2_service_name: string) {
    const { data, error } = await this.supabase
      .from('options')
      .select('*, level2_services!inner(name)')
      .eq('level2_services.name', level2_service_name);
    if (error) console.error(error);
    return data;
  }

  async getTemplateOptions(option: string) {
    const { data, error } = await this.supabase
      .from('templates')
      .select('*, options!inner(name)')
      .eq('options.name', option);
    if (error) console.error(error);
    return data;
  }

  async saveInputs(inputs: any): Promise<void> {
    const { data, error } = await this.supabase
      .from('inputs')
      .insert([{ data: inputs }]);

    if (error) {
      console.error('Error saving inputs:', error);
    } else {
      console.log('Inputs saved successfully:', data);
    }
  }
}
