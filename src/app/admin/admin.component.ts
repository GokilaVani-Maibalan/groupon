import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  merchants: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.supabase
      .from('merchants')
      .select('*')
      .eq('approved', false);

    if (error) {
      console.error('Error fetching merchants:', error);
    } else {
      this.merchants = data;
    }
  }

  async approveMerchant(merchantId: string) {
    const { data, error } = await this.supabaseService.supabase
      .from('merchants')
      .update({ approved: true })
      .eq('id', merchantId);

    if (error) {
      console.error('Error approving merchant:', error);
    } else {
      this.merchants = this.merchants.filter((m) => m.id !== merchantId);
    }
  }
}
