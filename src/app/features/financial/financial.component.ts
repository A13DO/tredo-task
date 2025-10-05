import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { CustomPrimengBreadcrumbComponent } from '../../shared/components/custom-primeng-breadcrumb/custom-primeng-breadcrumb.component';
import { SharedTableComponent } from '../../shared/components/shared-table/shared-table.component';
import { StatisticsCardComponent } from '../../shared/components/statistics-card/statistics-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-financial',
  imports: [
    CustomPrimengBreadcrumbComponent,
    SharedTableComponent,
    StatisticsCardComponent,
    ButtonModule,
  ],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.css',
})
export class FinancialComponent {
  constructor(private messageService: MessageService) {}
  items: { icon: string; label: string; current?: boolean }[] | undefined;

  home: { icon: string; routerLink: string } | undefined;
  bills_header_columns = [
    { field: 'id', header: 'Id' },
    { field: 'code', header: 'Bill Code' },
    { field: 'fromDay', header: 'From Day' },
    { field: 'toDay', header: 'To Day' },
    { field: 'orders', header: 'Orders' },
    { field: 'actions', header: 'Actions' },
  ];
  payment_header_columns = [
    { field: 'id', header: 'Id' },
    { field: 'AWB', header: 'AWB Number' },
    { field: 'code', header: 'Reference Number' },
    { field: 'type', header: 'Type' },
    { field: 'pickupTime', header: 'Picked-Up Time' },
    { field: 'pickupSite', header: 'Picked-Up Site' },
    { field: 'COD', header: 'COD' },
    { field: 'shippingFees', header: 'Shipping Fees' },
  ];

  billsData = [
    {
      id: 1,
      code: 'BILL-2025-001',
      fromDay: new Date('2025-09-01T08:45:00'),
      toDay: new Date('2025-09-07T17:15:00'),
      orders: 15,
      actions: 'View',
    },
    {
      id: 2,
      code: 'BILL-2025-002',
      fromDay: new Date('2025-09-08T09:10:00'),
      toDay: new Date('2025-09-14T16:45:00'),
      orders: 12,
      actions: 'View',
    },
    {
      id: 3,
      code: 'BILL-2025-003',
      fromDay: new Date('2025-09-15T07:55:00'),
      toDay: new Date('2025-09-21T18:20:00'),
      orders: 18,
      actions: 'View',
    },
    {
      id: 4,
      code: 'BILL-2025-004',
      fromDay: new Date('2025-09-22T10:05:00'),
      toDay: new Date('2025-09-28T19:00:00'),
      orders: 10,
      actions: 'View',
    },
    {
      id: 5,
      code: 'BILL-2025-005',
      fromDay: new Date('2025-09-29T09:25:00'),
      toDay: new Date('2025-10-05T20:45:00'),
      orders: 21,
      actions: 'View',
    },
  ];
  paymentData = [
    {
      id: 1,
      AWB: 'AWB0012345',
      code: 'REF-2025-001',
      type: 'Delivery',
      pickupTime: new Date('2025-09-01T10:30:00'),
      pickupSite: 'Cairo Warehouse A',
      COD: 250.75,
      shippingFees: 45.0,
    },
    {
      id: 2,
      AWB: 'AWB0012346',
      code: 'REF-2025-002',
      type: 'Return',
      pickupTime: new Date('2025-09-02T11:00:00'),
      pickupSite: 'Alexandria Hub',
      COD: 0.0,
      shippingFees: 45.0,
    },
    {
      id: 3,
      AWB: 'AWB0012347',
      code: 'REF-2025-003',
      type: 'Delivery',
      pickupTime: new Date('2025-09-03T09:45:00'),
      pickupSite: 'Giza Station',
      COD: 310.0,
      shippingFees: 45.0,
    },
    {
      id: 4,
      AWB: 'AWB0012348',
      code: 'REF-2025-004',
      type: 'Delivery',
      pickupTime: new Date('2025-09-04T15:20:00'),
      pickupSite: 'Nasr City Drop-Off',
      COD: 0.0,
      shippingFees: 45.0,
    },
    {
      id: 5,
      AWB: 'AWB0012349',
      code: 'REF-2025-005',
      type: 'Pickup',
      pickupTime: new Date('2025-09-05T13:10:00'),
      pickupSite: 'Tanta Center',
      COD: 198.9,
      shippingFees: 45.0,
    },
  ];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Financial', icon: 'pi pi-wallet', current: true },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  btn_loading = false;

  onClick() {
    this.btn_loading = true;

    // Simulate a 2-second operation
    setTimeout(() => {
      this.btn_loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'All Reportes Exported Successfully',
      });
    }, 2000);
  }
}
