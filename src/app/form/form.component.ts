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
  selectedSection: string = 'section1';
  businessInfoOpen: boolean = false;
  businessInfoSection: string | null = null;
  count: number = 0;
  vouchercount: number = 0;
  selectedFormOption: any[] = [];
  isModalOpen = false;

  modalContentType: string | null = null;

  selectedVoucherOption: string | null = null;

  onVoucherOptionSelect(option: string): void {
    console.log(option);
    this.selectedVoucherOption = option;
    console.log(this.selectedVoucherOption);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const optionString = params.get('selectedFormOption');
      if (optionString) {
        this.selectedFormOption = JSON.parse(optionString);
      }
      console.log(this.selectedFormOption);
    });
  }

  openModal(type: string): void {
    this.modalContentType = type;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
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

  incrementvoucher() {
    this.vouchercount++;
  }

  decrementvoucher() {
    if (this.vouchercount > 0) {
      this.vouchercount--;
    }
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    // this.businessInfoOpen = false;
    // this.completedSections[section] = true;
  }

  toggleBusinessInfo() {
    this.businessInfoOpen = !this.businessInfoOpen;
  }

  selectBusinessInfo(info: string) {
    this.businessInfoSection = info;
    // this.completedSections[info] = true;
  }

  // completedSections: { [key: string]: boolean } = {
  //   section1: false,
  //   section2: false,
  //   section3: false,
  //   section4: false,
  //   section5: false,
  //   section6: false,
  //   section7: false,
  //   info1: false,
  //   info2: false,
  //   info3: false,
  //   info4: false,
  //   info5: false,
  //   section8: false,
  //   section9: false,
  // };

  // isCompleted(section: string): boolean {
  //   return this.completedSections[section];
  // }
}
