import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);

  const user = await supabaseService.getCurrentUser();
  if (user) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
