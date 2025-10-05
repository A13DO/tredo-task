import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TypeBadgeDirective } from '../../Directives/type-badge.directive';
import { Popover, PopoverModule } from 'primeng/popover';
import { DatePickerModule } from "primeng/datepicker";

@Component({
  selector: 'app-shared-table',
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    TypeBadgeDirective,
    PopoverModule,
    DatePickerModule
],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.css',
})
export class SharedTableComponent {
  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];
  @Input() table_title: string = '';
  copiedCodeId: string | null = null;
  @ViewChild('filterPopover') filterPopover!: Popover;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedCodeId = text;
      setTimeout(() => {
        this.copiedCodeId = null;
      }, 1500);
    });
  }
  toggle(event: Event) {
    this.filterPopover.toggle(event);
  }
}
