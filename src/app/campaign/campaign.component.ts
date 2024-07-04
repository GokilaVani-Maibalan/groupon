import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css',
})
export class CampaignComponent {
  currentPage: number = 0;
  totalPages: number = 5;
  selectedTab: number | null = null;
  selectedItem: number | null = null;
  selectedTabItems: any[] = [];
  nextClicked: boolean = false;
  hoveredTab: number | null = null;
  selectedOther: boolean = false;

  handleAddServiceClick() {
    this.changePage(2);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  selectTab(index: number): void {
    this.selectedTab = index;
    this.selectedTabItems = this.tabs[index].types;
    this.selectedOther = false;
  }

  selectItem(index: number): void {
    this.selectedItem = index;
  }
  selectOtherTab(): void {
    this.selectedTab = null;
    this.selectedOther = true;
  }

  hoverTab(index: number | null): void {
    this.hoveredTab = index;
  }
  previous(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.nextClicked = false;
    }
  }

  next(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.nextClicked = true;
    }
  }
  searchTerm: string = '';
  showSuggestions: boolean = false;
  suggestions: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
  ];
  filteredSuggestions: string[] = [];
  selectedItems: string[] = [];

  ngOnInit(): void {}

  onInputChange(): void {
    this.filteredSuggestions = this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.showSuggestions = this.searchTerm.length > 0;
  }

  selectSuggestion(suggestion: string): void {
    this.selectedItems.push(suggestion);
    this.searchTerm = '';
    this.showSuggestions = false;
  }

  tabs = [
    {
      label: 'Health, beauty & wellness',
      content: 'Spas, Salons, Gyms, Doctors, Alternative medicine, etc.',
      types: [
        {
          id: 1,
          name: 'Med spa services',
          typecontent:
            'Laser hair removal, Microblading, Non-surgical facelifts, etc.',
        },
        {
          id: 2,
          name: 'Spa services',
          typecontent: 'Body wraps, Saunas, Float tanks, Salt caves, etc.',
        },
        {
          id: 3,
          name: 'Massage services',
          typecontent: 'Deep tissue, Hot stone, Reflexology, etc.',
        },
        {
          id: 4,
          name: 'Nail services',
          typecontent: 'Mani-pedi, No-chip, Nail design, etc.',
        },
        {
          id: 5,
          name: 'Brow & lash services',
          typecontent: 'Eyebrow shaping and tinting, Eyelash extensions, etc.',
        },
      ],
    },
    {
      label: 'Things to do',
      content: 'Events, Activities, Classes, etc.',
      types: [
        {
          id: 1,
          name: 'Skills & training workshops',
          typecontent:
            'Dance classes, Horseback riding, Trade skills, Resume writing, etc.',
        },
        {
          id: 2,
          name: 'Education',
          typecontent:
            'Academic courses, Certifications, Driver’s education, Firearm safety, etc.',
        },
        {
          id: 3,
          name: 'Events & festivals',
          typecontent:
            'Beer and wine festivals, Conventions, Food and drink exhibitions, etc.',
        },
        {
          id: 4,
          name: 'Indoor activities',
          typecontent:
            'Arcades, Bowling, Trampolines, Climbing walls, Room-escape games, etc.',
        },
        {
          id: 5,
          name: 'Sports activities',
          typecontent:
            'Golf, Paintball, Shooting ranges, Skydiving, Off-roading, etc.',
        },
      ],
    },
    {
      label: 'Home & auto',
      content: 'Automotive services, Home services, Pet care, etc.',
      types: [
        {
          id: 1,
          name: 'Car enhancements & repair',
          typecontent: 'Brake pads, Window tinting, Remote starters, etc.',
        },
        {
          id: 2,
          name: 'Car maintenance',
          typecontent:
            'Oil changes, Wheel alignments, Inspections, Emissions testing, etc.',
        },
        {
          id: 3,
          name: 'Car wash',
          typecontent: 'Exterior washes, Detailing, Wax and polish, etc.',
        },
        {
          id: 4,
          name: 'Entertainment rentals',
          typecontent: 'DJ equipment, Catering, Photo booths, etc.',
        },
        {
          id: 5,
          name: 'Exterior home services',
          typecontent:
            'Landscaping, Window cleaning, Pressure washing, Pest control, Paving, etc.',
        },
      ],
    },
    {
      label: 'Restaurants',
      content: 'Dine-in, Takeout, Delivery, etc.',
      types: [
        {
          id: 1,
          name: 'American food',
          typecontent:
            'Pub grub, New American, Pizza, Burgers, Steakhouses, etc.',
        },
        {
          id: 2,
          name: 'International food',
          typecontent: 'Italian, Mexican, Sushi, Indian, etc.',
        },
        {
          id: 3,
          name: 'Quick service',
          typecontent: 'Cafes, Sandwich shops, Ice cream parlors, etc.',
        },
      ],
    },
    {
      label: 'Retail',
      content: 'Storefronts, Online shopping, Online services, etc.',
      types: [
        {
          id: 1,
          name: 'eLearning',
          typecontent: 'Online courses and certifications, etc.',
        },
        {
          id: 2,
          name: 'Photography',
          typecontent: 'Photoshoots, etc.',
        },
        {
          id: 3,
          name: 'Personal services',
          typecontent:
            'Meal prep delivery, Online consulting, Online tarot and psychic readings, etc.',
        },
        {
          id: 4,
          name: 'Online retail shopping',
          typecontent: 'Shopping on a website, etc.',
        },
        {
          id: 5,
          name: 'Consulting Services',
          typecontent:
            'Financial/tax consultant, counselor/therapist, marketing consultant, etc.',
        },
      ],
    },
  ];
}
