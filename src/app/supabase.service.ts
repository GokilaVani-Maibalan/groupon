import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://cimqazigxnrtbplwdnpi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbXFhemlneG5ydGJwbHdkbnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODQ5ODAsImV4cCI6MjAzMzg2MDk4MH0.7ll58hqWEwoXa1Z2tevKglBo0RF9JBG6ty-IuExYjHA';
export const supabase = createClient(supabaseUrl, supabaseKey);





// import { Injectable } from '@angular/core';
// import { createClient, SupabaseClient } from '@supabase/supabase-js';

// @Injectable({
//   providedIn: 'root',
// })
// export class SupabaseService {
//   private supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient('your-supabase-url', 'your-supabase-anon-key');
//   }

//   async signInWithGitHub() {
//     const { user, session, error } = await this.supabase.auth.signInWithOAuth({
//       provider: 'github',
//     });
//     if (error) {
//       console.error('Error signing in with GitHub:', error);
//     } else {
//       console.log('Signed in successfully:', user);
//     }
//   }
// }
