import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditCampaignComponent } from '../../editor/edit-campaign/edit-campaign.component';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, EditCampaignComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  campaigns = CAMPAIGN_DATA;
  selectedSection: number = 1;

  selectSection(section: number): void {
    this.selectedSection = section;
  }

  constructor(private router: Router) {}

  onItemClick(item: any) {
    this.router.navigate(['/editor', item.id], { state: { item } });
  }
}

const CAMPAIGN_DATA: Campaign[] = [
  {
    id: 1,
    name: 'American Food',
    highlights: 'Food with american styles',
    description: 'This is the first campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$50',
          discount_price: '$20',
          discount: '45%',
          monthly_voucher: 50,
        },
      },
    ],
    isActive: true,
  },
  {
    id: 2,
    name: ' Indian Cuisine',
    highlights: 'Food with Indian styles',
    description: 'This is the second campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$50',
          discount_price: '$20',
          discount: '45%',
          monthly_voucher: 50,
        },
      },
      {
        id: 2,
        option_name: 'Breakfast or lunch Sat,Sun',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
    ],
    isActive: true,
  },
  {
    id: 3,
    name: ' Chinese Cuisine',
    highlights: 'Food with Chinese styles',
    description: 'This is the third campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$50',
          discount_price: '$20',
          discount: '45%',
          monthly_voucher: 50,
        },
      },
    ],
    isActive: false,
  },
  {
    id: 4,
    name: ' Spanish Cuisine',
    highlights: 'Food with Spanish styles',
    description: 'This is the fourth campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
      {
        id: 2,
        option_name: 'Breakfast or lunch Sat,Sun',
        price: {
          regular_price: '$30',
          discount_price: '$20',
          discount: '15%',
          monthly_voucher: 50,
        },
      },
      {
        id: 3,
        option_name: 'Breakfast or lunch Sat,Sun',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
    ],
    isActive: true,
  },
  {
    id: 5,
    name: ' Micro Needling',
    highlights: 'Makeup',
    description: 'This is the fifth campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
      {
        id: 2,
        option_name: 'Breakfast or lunch Sat,Sun',
        price: {
          regular_price: '$30',
          discount_price: '$20',
          discount: '15%',
          monthly_voucher: 50,
        },
      },
    ],
    isActive: true,
  },
  {
    id: 6,
    name: ' Permanent MAKEUP',
    highlights: 'Makeup permanently',
    description: 'This is the sixth campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$30',
          discount_price: '$20',
          discount: '15%',
          monthly_voucher: 50,
        },
      },
      {
        id: 2,
        option_name: 'Breakfast or lunch Sat,Sun',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
    ],
    isActive: true,
  },
  {
    id: 7,
    name: ' Indian Cuisine',
    highlights: 'Food with Indian styles',
    description: 'This is the sevent campaign',

    details: [
      {
        id: 1,
        option_name: 'Breakfast or lunch Mon-Fri',
        price: {
          regular_price: '$70',
          discount_price: '$20',
          discount: '25%',
          monthly_voucher: 30,
        },
      },
    ],
    isActive: false,
  },
];

export interface Campaign {
  id: number;
  name: string;
  highlights: string;
  description: string;

  details: any;
  isActive: boolean;
}

export interface Details {
  id: number;
  option_name: string;
  price: any;
}
