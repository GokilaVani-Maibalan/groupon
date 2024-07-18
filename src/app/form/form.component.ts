import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  selectedSection: number = 1;
  businessInfoOpen: boolean = false;
  businessInfoSection: number = 1;
  count: number = 0;
  vouchercount: number = 0;
  bookingcount: number = 0;
  limitcount: number = 0;
  selectedFormOption: any[] = [];
  isModalOpen = false;
  showOptions = [false, false, false, false, false];
  modalContentType: string | null = null;
  modalContentIndex: number = 0;
  selectedVoucherOption: string | null = null;
  futureDate: string = '';

  calculateFutureDate() {
    const today = new Date();
    const future = new Date(today);
    future.setDate(today.getDate() + 2);

    this.futureDate = this.formatDate(future);
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  toggleOptions(index: number) {
    this.showOptions[index] = !this.showOptions[index];
  }
  onOptionClick(option: string) {
    console.log(option);
  }
  onValidOptionClick(option: string) {
    console.log(option);
  }
  onNextClick() {
    this.selectedSection++;
  }

  onPrevClick() {
    if (this.selectedSection > 1) {
      this.selectedSection--;
    }
  }

  onPrevInfoClick() {
    if (this.businessInfoSection === 1) {
      this.selectedSection--;
    } else {
      this.businessInfoSection--;
    }
  }
  onNextInfoClick() {
    if (this.businessInfoSection === 5) {
      this.selectedSection++;
    } else {
      this.businessInfoSection++;
    }
  }

  onVoucherOptionSelect(option: string): void {
    console.log(option);
    this.selectedVoucherOption = option;
    console.log(this.selectedVoucherOption);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.calculateFutureDate();
    this.route.paramMap.subscribe((params) => {
      const optionString = params.get('selectedFormOption');
      if (optionString) {
        this.selectedFormOption = JSON.parse(optionString);
      }
      console.log(this.selectedFormOption);
    });
  }

  openModal(type: string, index: number): void {
    this.modalContentType = type;
    this.modalContentIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalContentType = null;
  }

  removeModal(): void {
    this.selectedFormOption.splice(this.modalContentIndex, 1);
    this.isModalOpen = false;
    alert('Option removed');
    this.modalContentType = null;
  }

  onHelpClick() {
    alert('Help clicked');
  }

  onPreviewClick() {
    alert('Preview clicked');
  }

  onSaveExitClick() {
    alert('Save & Exit clicked');
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  incrementLimit() {
    this.limitcount++;
  }

  decrementLimit() {
    if (this.limitcount > 0) {
      this.limitcount--;
    }
  }

  decrementBookingOption() {
    if (this.bookingcount > 0) {
      this.bookingcount--;
    }
  }
  incrementBookingOption() {
    this.bookingcount++;
  }

  incrementvoucher() {
    this.vouchercount++;
  }

  decrementvoucher() {
    if (this.vouchercount > 0) {
      this.vouchercount--;
    }
  }

  selectSection(section: number): void {
    this.selectedSection = section;
  }

  toggleBusinessInfo() {
    this.businessInfoOpen = !this.businessInfoOpen;
  }

  selectBusinessInfo(info: number) {
    this.businessInfoSection = info;
  }

  storedInputs: { [key: string]: any } = { selectedCheckboxes: [] };

  storeInput(key: string, value: string) {
    this.storedInputs[key] = value;
    console.log(this.storedInputs);
  }

  toggleCheckbox(option: string) {
    if (this.storedInputs['selectedCheckboxes'].includes(option)) {
      this.storedInputs['selectedCheckboxes'] = this.storedInputs[
        'selectedCheckboxes'
      ].filter((item: any) => item !== option);
    } else {
      this.storedInputs['selectedCheckboxes'].push(option);
    }
  }
}
