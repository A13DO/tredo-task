import { Component } from '@angular/core';
import { TourGuideService } from '../../services/tour-guide.service';
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
  selector: 'app-guidelines-steps',
  imports: [],
  templateUrl: './guidelines-steps.component.html',
  styleUrl: './guidelines-steps.component.css',
})
export class GuidelinesStepsComponent {
  showOrdersDialog: boolean = false;
  constructor(private shepherd: TourGuideService) {}
  steps: DialogStep[] = [
    // {
    //   id: 'sidebar_dashboard',
    //   imageUrl: 'assets/step_1.svg',
    //   header: 'Kickstart Your Tredo Journey! Your First Shipment Awaits',
    //   description:
    //     'Start shipping in just a few steps! Create your order with the recipient’s details, upload multiple orders at once with Bulk Import, and Schedule Pickup at your convenience. Then, track everything easily from your dashboard, it’s that simple with Tredo!',
    //   currentStep: 1,
    //   totalSteps: 4,
    // },
    {
      id: 'sidebar_warehouse',
      imageUrl: 'assets/step_2.svg',
      header: 'Manage and Customize Your Warehouses Effectively',
      description:
        'Take full control of your pickup locations with ease! Add new warehouses, set one as your Primary default pickup point, and review performance insights for each location. Keep your operations smooth and efficient by managing everything right from your Warehouses page! ',
      next_btn: 'Start Creating Your First Order',
      currentStep: 2,
      totalSteps: 4,
    },
    {
      id: 'sidebar_couriers',
      imageUrl: 'assets/step_3.svg',
      header: '	Shipping Partners: Rates, Terms & Policies',
      description:
        'Find everything you need to know about your shipping partners in one place! Compare rates, zones, and service terms, review prohibited items, and explore packaging material prices before shipping. With all the details at your fingertips, you can choose the right partner and ship with confidence every time.',
      next_btn: 'Next',
      currentStep: 3,
      totalSteps: 4,
    },
    {
      id: 'sidebar_customers',
      imageUrl: 'assets/step_4.svg',
      header: 'Manage and Track Your Customers with Ease',
      description:
        'Build your customer network effortlessly! Add new customer records with complete details to simplify order creation, explore overall growth and insights through your management dashboard, and review each customer’s performance, order history, and quality score all in one place.',
      next_btn: 'Next',
      currentStep: 4,
      totalSteps: 4,
    },
  ];
  ngOnInit() {
    this.steps.forEach((step) => {
      this.useShepherdTemplate(
        step.id,
        step.imageUrl,
        step.header,
        step.description || '',
        step.next_btn || 'Next'
      );
    });
  }

  startTour() {
    this.shepherd.startTour();
  }
  useShepherdTemplate(
    elementId: string,
    imagePath: string,
    header: string,
    description: string,
    next_btn: string
  ) {
    this.shepherd.addStep({
      id: elementId,
      text: `
      <div class="flex flex-col items-center justify-center text-center gap-6 p-4">
        <!-- Image Section -->
        <div class="flex justify-center">
          <img src="${imagePath}" alt="${header}"
            class="max-w-full max-h-[334.5px] object-cover mx-auto" />
        </div>
        <!-- Header -->
        <h2 class="text-[28px] text-p-text font-RMedium text-center w-full">
          ${header}
        </h2>
        <!-- Description -->
        <p class="text-hs-text text-lg font-RRegular text-center w-full mx-auto">
          ${description}
        </p>
      </div>
    `,

      attachTo: { element: `#${elementId}`, on: 'right' },
      when: {
        show: () => {
          const activeElement = document.querySelector(
            '#sidebar_dashboard.active'
          );
          console.log('Active element:', activeElement);
          // 👉 Do whatever you need here (set class, emit event, run logic)
        },
      },
      classes: 'shepherd-large-step',
      buttons: [
        { text: 'Back', action: this.shepherd['tour'].back },
        { text: next_btn, action: this.shepherd['tour'].next },
      ],
    });
  }
}
