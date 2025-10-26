import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ToastModule } from 'primeng/toast';
import { TourGuideService } from './core/services/tour-guide.service';
import Shepherd from 'shepherd.js';
import { GuidelinesStepsComponent } from './core/layout/guidelines-steps/guidelines-steps.component';
interface DialogStep {
  id: string;
  imageUrl: string;
  header: string;
  description: string;
  next_btn: string;
  currentStep: number;
  totalSteps: number;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    ToastModule,
    GuidelinesStepsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tredo task';
  ngAfterViewInit() {
    const obj = document.querySelector(
      '.animated-bracket'
    ) as HTMLObjectElement;
    obj.addEventListener('load', () => {
      const svgDoc = obj.contentDocument;
      const snakeTop = svgDoc?.querySelector('.snake-top');
      const snakeBottom = svgDoc?.querySelector('.snake-bottom');

      // Example: animate with CSS or Anime.js
      svgDoc?.querySelectorAll('.snake').forEach((el) => {
        el.classList.add('animate');
      });
    });
  }
}
