import { inject, Injectable } from '@angular/core';
import Shepherd from 'shepherd.js';
import type { StepOptions, Tour } from 'shepherd.js';
import { offset } from '@floating-ui/dom';

@Injectable({
  providedIn: 'root',
})
export class TourGuideService {
  private tour: Tour;

  constructor() {
    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'shadow-lg bg-white rounded-lg max-w-[800px]',
        scrollTo: true,

        floatingUIOptions: {
          middleware: [offset({ mainAxis: 80, crossAxis: 60 })],
        },
      },

      useModalOverlay: true,
      // steps: [
      //   {
      //     floatingUIOptions: {
      //       middleware: [offset({ mainAxis: 0, crossAxis: 100 })],
      //     },
      //   },
      // ],
    });
  }

  addStep(options: StepOptions) {
    this.tour.addStep(options);
  }

  startTour() {
    this.tour.start();
  }

  cancelTour() {
    this.tour.cancel();
  }
}
