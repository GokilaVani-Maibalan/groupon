import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-campaign',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-campaign.component.html',
  styleUrl: './edit-campaign.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class EditCampaignComponent {
  item: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const itemId = params.get('id');
      this.item = history.state.item;
    });
  }

  editOption(field: string, data: any) {
    this.router.navigate(['/detail', field], { state: { data: data } });
  }

  handleUpdate(field: string, updatedData: any) {
    if (field === 'Description') {
      this.item.description = updatedData;
    } else if (field === 'Highlights') {
      this.item.highlights = updatedData;
    } else if (field === 'Option') {
      const index = this.item.details.findIndex(
        (detail: any) => detail.id === updatedData.id
      );
      if (index !== -1) {
        this.item.details[index] = updatedData;
      }
    }
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

  storedInputs: { [key: string]: any } = { selectedCheckboxes: [] };

  storeInput(key: string, value: string) {
    this.storedInputs[key] = value;
    console.log(this.storedInputs);
  }
}
