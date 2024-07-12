import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
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
  selectedOption: boolean[] = [];
  availedServices: any[] = [];

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

  selectOption(index: number): void {
    this.selectedOption[index] = true;
    this.availedServices = this.selectedOption.filter((item) => item === true);
  }

  deselectOption(index: number): void {
    this.selectedOption[index] = false;
    this.availedServices = this.selectedOption.filter((item) => item === true);
  }
  toggleOption(index: number): void {
    this.selectedOption[index] = !this.selectedOption[index];
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

  continue(): void {
    const selectedOptions = this.selectedLevel3Items.filter(
      (tab, index) => this.selectedOption[index]
    );
    this.router.navigate(['/templates'], { state: { selectedOptions } });
    console.log(selectedOptions);
  }

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
  selectedOptions: any[] = [];

  selectedLevel3Items: any[] = [];
  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.selectedOption = new Array(this.selectedLevel3Items.length).fill(
      false
    );
  }

  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    this.services = (await this.supabaseService.getItems()) || [];
    console.log(this.services);
  }

  async level2_services(service_name: string) {
    console.log(service_name);
    this.selectedLevel2Items =
      (await this.supabaseService.getLevel2Services(service_name)) || [];
    console.log(this.selectedLevel2Items);
  }

  async options(level2_service_name: string) {
    console.log(level2_service_name);
    this.selectedOptions =
      (await this.supabaseService.getOptions(level2_service_name)) || [];
    this.selectedOptions.forEach((item) => {
      this.selectedLevel3Items.push(item);
    });
    console.log(this.selectedOptions);
    console.log(this.selectedLevel3Items);
  }

  modalOpen = false;

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
