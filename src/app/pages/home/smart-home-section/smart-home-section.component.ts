// // Component TypeScript (smart-home-section.component.ts)
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// interface SmartHomeFeature {
//   id: number;
//   title: string;
//   description: string;
//   details: string[];
//   image: string;
//   buttonText: string;
//   buttonLink: string;
// }

// @Component({
//   selector: 'app-smart-home-section',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './smart-home-section.component.html',
//   styleUrls: ['./smart-home-section.component.scss']
// })
// export class SmartHomeSectionComponent {
//   activeTab: number = 0;

//   tabs = [
//     'Améliorez vos performances énergétiques',
//     'Centralisez et pilotez',
//     'Pilotez et contrôlez à distance',
//     'Protéger votre maison'
//   ];

//   features: SmartHomeFeature[] = [
//     {
//       id: 0,
//       title: 'Améliorez vos performances énergétiques',
//       description: 'Programmez vos volets électriques et stores intérieurs en fonction de la météo.',
//       details: [
//         'En été, dès que la température intérieure excède 25°C, vos volets ou stores Somfy se baissent automatiquement. Vous protégez vos meubles, animaux et plantes du soleil, et votre maison reste plus au frais. Vous retardez également le besoin d\'allumer la climatisation.',
//         'En hiver, quand le soleil est là, vos volets et stores électriques s\'ouvrent pour laisser rentrer la chaleur, et se ferment quand il n\'y a plus de soleil pour conserver la chaleur intérieure.'
//       ],
//       image: 'https://i.pinimg.com/736x/99/40/27/994027efbc67a4291a31d7b1b38af3fb.jpg',
//       buttonText: 'En savoir plus sur le confort thermique',
//       buttonLink: '/confort-thermique'
//     },
//     {
//       id: 1,
//       title: 'Centralisez et pilotez',
//       description: 'Contrôlez tous vos équipements depuis une seule application.',
//       details: [
//         'Gérez votre chauffage, vos volets, votre éclairage et vos alarmes depuis votre smartphone.',
//         'Créez des scénarios personnalisés pour automatiser votre quotidien.'
//       ],
//       image: 'https://i.pinimg.com/1200x/36/e5/21/36e5212bf193ec38266224e9256a08e6.jpg',
//       buttonText: 'Découvrir les scénarios',
//       buttonLink: '/scenarios'
//     },
//     {
//       id: 2,
//       title: 'Pilotez et contrôlez à distance',
//       description: 'Restez connecté à votre maison où que vous soyez.',
//       details: [
//         'Contrôlez votre maison depuis n\'importe où dans le monde.',
//         'Recevez des notifications en temps réel sur l\'état de votre habitation.'
//       ],
//       image: 'https://i.pinimg.com/1200x/3b/3f/20/3b3f2029be0e6be25b3153ebd4090325.jpg',
//       buttonText: 'En savoir plus sur le contrôle à distance',
//       buttonLink: '/controle-distance'
//     },
//     {
//       id: 3,
//       title: 'Protéger votre maison',
//       description: 'Sécurisez votre habitation avec des solutions intelligentes.',
//       details: [
//         'Simulez votre présence lorsque vous êtes absent.',
//         'Recevez des alertes en cas d\'intrusion ou d\'anomalie.'
//       ],
//       image: 'https://i.pinimg.com/1200x/67/54/9e/67549e342d12a16fa71d6230b0b145a0.jpg',
//       buttonText: 'Découvrir les solutions de sécurité',
//       buttonLink: '/securite'
//     }
//   ];

//   selectTab(index: number): void {
//     this.activeTab = index;
//   }

//   get activeFeature(): SmartHomeFeature {
//     return this.features[this.activeTab];
//   }
// }


// // Template HTML (smart-home-section.component.html)
// /*
// <section class="py-16 px-4 bg-gray-50">
//   <div class="max-w-7xl mx-auto">
    
//     <!-- Title -->
//     <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-12 max-w-4xl">
//       Les 4 bonnes raisons pour rendre votre maison connectée
//     </h2>

//     <!-- Tabs Navigation -->
//     <div class="mb-12 border-b border-gray-300">
//       <div class="flex flex-wrap gap-4 md:gap-8">
//         <button
//           *ngFor="let tab of tabs; let i = index"
//           (click)="selectTab(i)"
//           [class]="'pb-4 text-sm md:text-base font-medium transition-all duration-300 ' +
//                    (activeTab === i 
//                      ? 'text-blue-900 border-b-4 border-yellow-500' 
//                      : 'text-gray-400 hover:text-gray-600')"
//         >
//           {{ tab }}
//         </button>
//       </div>
//     </div>

//     <!-- Content -->
//     <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
//       <!-- Image -->
//       <div class="order-2 lg:order-1">
//         <div class="relative rounded-3xl overflow-hidden shadow-2xl">
//           <img 
//             [src]="activeFeature.image" 
//             [alt]="activeFeature.title"
//             class="w-full h-auto object-cover"
//           />
//         </div>
//       </div>

//       <!-- Text Content -->
//       <div class="order-1 lg:order-2">
//         <h3 class="text-3xl font-bold text-blue-900 mb-6">
//           {{ activeFeature.title }}
//         </h3>
        
//         <p class="text-lg text-gray-700 mb-6 font-medium">
//           {{ activeFeature.description }}
//         </p>

//         <div class="space-y-4 mb-8">
//           <p 
//             *ngFor="let detail of activeFeature.details"
//             class="text-gray-600 leading-relaxed"
//           >
//             {{ detail }}
//           </p>
//         </div>

//         <a 
//           [href]="activeFeature.buttonLink"
//           class="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//         >
//           {{ activeFeature.buttonText }}
//         </a>
//       </div>

//     </div>

//   </div>
// </section>
// */


// // Styles CSS (smart-home-section.component.css)
// /*
// :host {
//   display: block;
// }

// button:focus {
//   outline: none;
// }

// button:focus-visible {
//   outline: 2px solid #3b82f6;
//   outline-offset: 4px;
// }

// @media (max-width: 768px) {
//   h2 {
//     font-size: 2rem;
//   }
  
//   h3 {
//     font-size: 1.75rem;
//   }
// }
// */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface SmartHomeFeature {
  image: string;
  buttonLink: string;
}

@Component({
  selector: 'app-smart-home-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './smart-home-section.component.html',
  styleUrls: ['./smart-home-section.component.scss']
})
export class SmartHomeSectionComponent {
  activeTab: number = 0;

  tabs = [
    'smartHome.tabs.energy',
    'smartHome.tabs.centralize',
    'smartHome.tabs.remote',
    'smartHome.tabs.security'
  ];

  features: SmartHomeFeature[] = [
    {
      image: 'https://i.pinimg.com/736x/99/40/27/994027efbc67a4291a31d7b1b38af3fb.jpg',
      buttonLink: '/confort-thermique'
    },
    {
      image: 'https://i.pinimg.com/1200x/36/e5/21/36e5212bf193ec38266224e9256a08e6.jpg',
      buttonLink: '/scenarios'
    },
    {
      image: 'https://i.pinimg.com/1200x/3b/3f/20/3b3f2029be0e6be25b3153ebd4090325.jpg',
      buttonLink: '/controle-distance'
    },
    {
      image: 'https://i.pinimg.com/1200x/67/54/9e/67549e342d12a16fa71d6230b0b145a0.jpg',
      buttonLink: '/securite'
    }
  ];

  selectTab(index: number): void {
    this.activeTab = index;
  }

  get featureKey() {
    return [
      'smartHome.features.energy',
      'smartHome.features.centralize',
      'smartHome.features.remote',
      'smartHome.features.security'
    ][this.activeTab];
  }
}
