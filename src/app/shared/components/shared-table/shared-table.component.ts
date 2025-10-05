import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TypeBadgeDirective } from '../../Directives/type-badge.directive';
import { Popover, PopoverModule } from 'primeng/popover';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-shared-table',
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    TypeBadgeDirective,
    PopoverModule,
    DatePickerModule,
  ],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.css',
})
export class SharedTableComponent {
  constructor(private messageService: MessageService) {}

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
  all_PDF_btn_loading: boolean = false;
  all_Excel_btn_loading: boolean = false;
  PDF_btn_loading: boolean = false;
  Excel_btn_loading: boolean = false;

  onAllDownloadPDF() {
    this.all_PDF_btn_loading = true;
    setTimeout(() => {
      this.all_PDF_btn_loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'All Data Exported as PDF Successfully',
      });
    }, 2000);
  }
  onAllDownloadExcel() {
    this.all_Excel_btn_loading = true;
    setTimeout(() => {
      this.all_Excel_btn_loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'All Data Exported as Excel Successfully',
      });
    }, 2000);
  }
  onDownloadPDF(row: any) {
    row.PDF_btn_loading = true; // per row loading
    setTimeout(() => {
      row.PDF_btn_loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Row ${row.code} exported as PDF successfully`,
      });
    }, 2000);
  }

  onDownloadExcel(row: any) {
    row.Excel_btn_loading = true; // per row loading
    setTimeout(() => {
      row.Excel_btn_loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Row ${row.code} exported as Excel successfully`,
      });
    }, 2000);
  }
}
