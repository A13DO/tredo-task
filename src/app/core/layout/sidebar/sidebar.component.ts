import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Output() toggle = new EventEmitter<void>();

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    if (window.innerWidth < 1168) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  toggleSidebar() {
    this.toggle.emit();
    this.isOpen = !this.isOpen;
  }
}
