import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [
    NgScrollbarModule,
    MatExpansionModule,
    RouterLinkActive,
    RouterModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css',
})
export class MainSidebarComponent {
  isSidebarToggled = false;

  // isToggled
  isToggled = false;

  constructor() // private toggleService: ToggleService,
  // public themeService: CustomizerSettingsService
  {
    // this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
    //     this.isSidebarToggled = isSidebarToggled;
    // });
    // this.themeService.isToggled$.subscribe(isToggled => {
    //     this.isToggled = isToggled;
    // });
  }

  // Burger Menu Toggle
  toggle() {
    // this.toggleService.toggle();
  }

  // Mat Expansion
  panelOpenState = false;

  // Hide Sidebar
  toggleHideSidebarTheme() {
    // this.themeService.toggleHideSidebarTheme();
  }
}
