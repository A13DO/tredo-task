import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  imports: [CommonModule],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.css',
})
export class StatisticsCardComponent {
  @Input() title!: string;
  @Input() amount!: string;
  @Input() percentage!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() trend: 'up' | 'down' | null = null;
  @Input() color: string = '#3F51B5'; // icon main color
}
