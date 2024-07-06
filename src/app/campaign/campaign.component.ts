import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css',
})
export class CampaignComponent implements OnInit {
  currentPage: number = 0;
  totalPages: number = 5;
  selectedTab: number | null = null;
  selectedTabItems: any[] = [];
  nextClicked: boolean = false;
  hoveredTab: number | null = null;
  selectedOther: boolean = false;
  selectedType: number | null = null;

  selectItem(service: any) {
    if (!this.selectedTabItems.includes(service)) {
      this.selectedTabItems.push(service);
    } else {
      this.deselectTab(service);
    }
  }

  deselectTab(tab: any) {
    this.selectedTabItems = this.selectedTabItems.filter((t) => t !== tab);
  }

  isTabSelected(tab: any): boolean {
    return this.selectedTabItems.includes(tab);
  }

  handleAddServiceClick() {
    this.changePage(2);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  selectTab(index: number): void {
    this.selectedTab = index;
    this.selectedOther = false;
  }
  selectType(index: number): void {
    this.selectedType = index;
  }
  // selectItem(index: number): void {
  //   this.selectedItem = index;
  // }
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
    if (this.selectedTabItems.length != 0) {
      this.selectedTabItems = [];
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

  // ngOnInit(): void {}

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

  services: any[] = [];
  selectedLevel2Items: any[] = [];
  selectedLevel3Items: string[] = [];
  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    this.services = (await this.supabaseService.getItems()) || [];
  }

  selectLevel1Item(level2Items: any[]) {
    this.selectedLevel2Items = level2Items;
    console.log(this.selectedLevel2Items);
    this.selectedLevel3Items = [];
  }

  selectLevel2Item(level3Items: string[]) {
    this.selectedLevel3Items = level3Items;
    console.log(this.selectedLevel3Items);
  }
}
