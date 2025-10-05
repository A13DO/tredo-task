import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [InputTextModule, PopoverModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  btn_loading = false;

  onClick() {
    this.btn_loading = true;
    setTimeout(() => {
      this.btn_loading = false;
    }, 2000);
  }
}
