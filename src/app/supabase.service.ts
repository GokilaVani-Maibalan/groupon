import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, AuthError } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://yuivbdseztzjpvsxolkt.supabase.co';
  private supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXZiZHNlenR6anB2c3hvbGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDc2NTMsImV4cCI6MjAzNDUyMzY1M30.fiSFTl6c55ix-xe_KjU4ox0-EonMvidUus7-iG39Hhc';
  private supabase: SupabaseClient;

  constructor() {
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
    const { data: user, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }

    return user;
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

  async signIn(
    email: string,
    password: string
  ): Promise<{ user: any; error: AuthError | null }> {
    try {
      const { data: user, error } = await this.supabase.auth.signInWithPassword(
        { email, password }
      );
      return { user, error };
    } catch (error) {
      console.error('Error signing in:', error);
      return { user: null, error: error as AuthError };
    }
  }

  async uploadFile(file: File): Promise<any> {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await this.supabase.storage
      .from('merchants')
      .upload(fileName, file);

    if (error) {
      console.error('File upload error:', error);
      return null;
    }

    // const {  tax_id_doc, error: urlError } = await this.supabase
    //   .storage
    //   .from('merchants')
    //   .getPublicUrl(fileName);

    // if (urlError) {
    //   console.error('Error getting public URL:', urlError);
    //   return null;
    // }

    return { data };
  }
}
