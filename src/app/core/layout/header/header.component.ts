import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PopoverModule } from "primeng/popover";

@Component({
  selector: 'app-header',
  imports: [InputTextModule, PopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
