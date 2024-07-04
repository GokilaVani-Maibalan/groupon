import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  selectedSection: string = 'section1';
  count: number = 0;
  vouchercount: number = 0;

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
  }
}
