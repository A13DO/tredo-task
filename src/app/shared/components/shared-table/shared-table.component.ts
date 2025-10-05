import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TypeBadgeDirective } from '../../Directives/type-badge.directive';

@Component({
  selector: 'app-shared-table',
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    TypeBadgeDirective,
  ],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.css',
})
export class SharedTableComponent {
  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];
  @Input() table_title: string = '';
  copiedCodeId: string | null = null;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedCodeId = text;
      setTimeout(() => {
        this.copiedCodeId = null;
      }, 1500);
    });
  }
}
