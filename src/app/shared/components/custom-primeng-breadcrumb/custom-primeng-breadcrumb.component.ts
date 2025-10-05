import { Component, Input } from '@angular/core';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-custom-primeng-breadcrumb',
  imports: [Breadcrumb],
  templateUrl: './custom-primeng-breadcrumb.component.html',
  styleUrl: './custom-primeng-breadcrumb.component.css',
})
export class CustomPrimengBreadcrumbComponent {
  @Input() items:
    | { label: string; icon: string; current?: boolean }[]
    | undefined;
}
