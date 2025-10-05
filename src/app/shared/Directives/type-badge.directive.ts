import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTypeBadge]',
})
export class TypeBadgeDirective implements OnChanges {
  @Input('appTypeBadge') type!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (!this.type) return;

    const value = this.type.trim().toLowerCase();

    let color = '';
    let label = this.type;

    switch (value) {
      case 'delivery':
        color = '#2E7D32';
        label = 'Delivery';
        break;
      case 'return':
        color = '#F44336';
        label = 'Return';
        break;
      case 'pickup':
        color = '#2196F3';
        label = 'Pickup';
        break;
      default:
        color = '#9E9E9E';
        label = 'Other';
        break;
    }

    this.el.nativeElement.innerHTML = '';

    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-flex');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'gap', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.el.nativeElement, 'color', color);

    const circle = this.renderer.createElement('span');
    this.renderer.setStyle(circle, 'width', '15px');
    this.renderer.setStyle(circle, 'height', '15px');
    this.renderer.setStyle(circle, 'border-radius', '50%');
    this.renderer.setStyle(circle, 'background-color', color);
    this.renderer.appendChild(this.el.nativeElement, circle);

    // Create the label text
    const text = this.renderer.createText(label);
    this.renderer.appendChild(this.el.nativeElement, text);
  }
}
