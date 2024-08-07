import { CommonModule, Location } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-option',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-option.component.html',
  styleUrl: './edit-option.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class EditOptionComponent {
  field: string = '';
  data: any;
  itemId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.field = this.route.snapshot.paramMap.get('field')!;
    this.data = history.state.data;
    this.itemId = history.state.itemId;
    console.log(this.data);
    if (!this.data) {
      console.error('No data found in history state.');
      // this.router.navigate(['/']);
    }
  }

  onCancelClick() {
    this.location.back();
  }

  onDoneClick() {
    this.router.navigate(['/editor', this.itemId], {
      state: { field: this.field, updatedData: this.data },
    });
  }
}
