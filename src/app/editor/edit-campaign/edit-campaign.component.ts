import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-campaign',
  standalone: true,
  imports: [],
  templateUrl: './edit-campaign.component.html',
  styleUrl: './edit-campaign.component.css',
})
export class EditCampaignComponent {
  onHelpClick() {
    alert('Help clicked');
  }

  onPreviewClick() {
    alert('Preview clicked');
  }

  onSaveExitClick() {
    alert('Save & Exit clicked');
  }
}