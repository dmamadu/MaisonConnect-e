import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  category: 'panel' | 'battery' | 'inverter' | 'accessory';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

interface Pack {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
  highlights?: string[];
}

interface Testimonial {
  name: string;
  content: string;
  avatar?: string;
}

interface Article {
  date: string;
  title: string;
  summary: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

interface WhyUs {
  icon: string;
  title: string;
  description: string;
}
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SmartHomeSectionComponent } from "./smart-home-section/smart-home-section.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SmartHomeSectionComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('faqAnimation', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        paddingTop: '0',
        paddingBottom: '0'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        paddingTop: '*',
        paddingBottom: '*'
      })),
      transition('closed <=> open', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent {
  // -------------------------- Hero --------------------------
  heroTitle = 'Bienvenue chez Nous';
  heroSubtitle = 'Découvrez nos produits, packs et services pour sécuriser et automatiser votre maison tout en économisant de l’énergie.';

  // -------------------------- Produits --------------------------
  products: Product[] = [
    { id: 1, category: 'panel', title: 'Panneau Solaire 300W', description: 'Haute efficacité et durabilité.', price: '350CFA', image: 'https://i.pinimg.com/1200x/e4/4d/a5/e44da5f0251f003cb6e5a3054b24e670.jpg' },
    { id: 2, category: 'battery', title: 'Batterie Li-ion 5kWh', description: 'Stockage optimal pour vos besoins.', price: '1200CFA', image: 'https://i.pinimg.com/736x/12/1a/f8/121af8a1cc7670ec3d4ce699d9bd37b0.jpg' },
    { id: 3, category: 'inverter', title: 'Onduleur 5kW', description: 'Convertit efficacement votre énergie.', price: '600CFA', image: 'https://i.pinimg.com/1200x/ed/01/73/ed01733c2d2f05d3ca770c5ba44b04fc.jpg' },
  ];

  // -------------------------- Packs --------------------------
  packs: Pack[] = [
    { id: 1, title: 'Pack Maison Connectée', description: 'Sécurité et confort pour votre domicile.', price: '1800CFA', image: 'https://i.pinimg.com/736x/2f/fc/e6/2ffce627954199c172bd5947d589da92.jpg' },
    { id: 2, title: 'Pack Énergie Solaire', description: 'Production et stockage d’énergie.', price: '2500CFA', image: 'https://i.pinimg.com/736x/2f/fc/e6/2ffce627954199c172bd5947d589da92.jpg' },
  ];

  // -------------------------- Services --------------------------
  services: Service[] = [
    { id: 1, title: 'Installation domotique', description: 'Automatisez votre maison facilement.', icon: '🏠', highlights: ['Éclairage intelligent', 'Sécurité', 'Contrôle à distance'] },
    { id: 2, title: 'Maintenance & support', description: 'Assistance technique rapide et fiable.', icon: '🛠️' },
    { id: 3, title: 'Devis personnalisé', description: 'Solutions adaptées à vos besoins.', icon: '📄' },
  ];

  // -------------------------- Réalisations --------------------------
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  // -------------------------- Témoignages --------------------------
  testimonials: Testimonial[] = [
    { name: 'Alice', content: 'Service impeccable et produits de qualité.', avatar: 'https://i.pinimg.com/736x/cd/0a/6f/cd0a6ff185b5ff447d55fe0cb130feda.jpg' },
    { name: 'Bob', content: 'Ma maison est maintenant totalement automatisée !', avatar: ' https://i.pinimg.com/736x/17/36/77/173677533fe125d87ab5035776fe0da2.jpg' },
    { name: 'Charlie', content: 'Equipe professionnelle et réactive.', avatar: 'https://i.pinimg.com/736x/29/64/61/296461400be63b6501669e81eeb58a87.jpg' },
  ];

  testimonialIndex = 0;

  prevTestimonial() {
    this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
  }

  // -------------------------- Articles / Inspirez-vous --------------------------
  articles: Article[] = [
    { date: '22.07.2022', title: 'Un quotidien plus confortable grâce à la maison connectée', summary: 'Découvrez comment la domotique simplifie la vie de tous les jours.', image: 'https://i.pinimg.com/1200x/fa/09/26/fa0926e1a56aaa1c1d5eb8bb84f3f29f.jpg' },
    { date: '21.07.2022', title: 'Logement connecté : des avantages au quotidien', summary: 'Optimisez votre confort et votre sécurité grâce aux équipements connectés.', image: 'https://i.pinimg.com/736x/bb/13/90/bb1390a3aa49a00f645c579b20f3f9fe.jpg' },
    { date: '21.07.2022', title: 'La domotique dans un appartement', summary: 'Solutions pour un habitat intelligent et sûr.', image: 'https://i.pinimg.com/736x/36/3f/f3/363ff31a4fc98252842a58407c119999.jpg' },
  ];

  // -------------------------- Pourquoi nous choisir ? --------------------------
  whyUs: WhyUs[] = [
    { icon: '🛡️', title: 'Sécurité', description: 'Nos solutions assurent la protection de votre domicile et de vos proches.' },
    { icon: '⚡', title: 'Économie d’énergie', description: 'Réduisez votre consommation grâce à nos systèmes optimisés.' },
    { icon: '🏠', title: 'Confort', description: 'Automatisez votre maison pour un quotidien simplifié et agréable.' },
    { icon: '💼', title: 'Expertise', description: 'Une équipe professionnelle et expérimentée à votre service.' },
  ];

  // -------------------------- Animations --------------------------
  delayForIndex(id: number) {
    return `${id * 100}ms`;
  }


  openFAQIndex: number | null = null;

 // FAQ section
  faqs: FAQ[] = [
    {
      question: 'Comment ajouter de nouveaux équipements dans l’application TaHoma® ?',
      answer: 'Pour ajouter un nouvel équipement, ouvrez l’application TaHoma®, cliquez sur « Ajouter un appareil », choisissez le type d’équipement, puis suivez les instructions pour le connecter au réseau Wi-Fi et l’intégrer à votre installation domotique.'
    },
    {
      question: 'Comment ajouter un assistant vocal dans l’application TaHoma® ?',
      answer: 'Dans l’application TaHoma®, allez dans les paramètres, sélectionnez « Assistants vocaux », puis choisissez l’assistant souhaité (Amazon Alexa, Google Assistant…). Suivez les étapes pour connecter votre compte et autoriser le contrôle vocal des équipements.'
    },
    {
      question: 'Comment choisir la box domotique qui vous convient ?',
      answer: 'Le choix dépend du nombre d’équipements que vous souhaitez gérer, du type de protocole (Zigbee, RTS, Z-Wave), et des fonctionnalités souhaitées (scènes, alertes, contrôle à distance). Nos experts peuvent vous conseiller pour sélectionner la box adaptée à votre logement.'
    },
    {
      question: 'Comment savoir si votre équipement est compatible avec nos solutions connectées ?',
      answer: 'Tous les équipements compatibles sont listés dans l’application TaHoma® ou sur notre site. Vérifiez les logos de compatibilité (RTS, Somfy, Zigbee, etc.) ou contactez notre support pour confirmation.'
    },
    {
      question: 'Équipements connectés : la checklist Somfy',
      answer: '• Box domotique installée et connectée.\n• Capteurs de mouvement, ouverture, ou température correctement positionnés.\n• Commandes et scénarios configurés pour automatiser votre logement.\n• Applications mobiles installées sur vos appareils pour le contrôle à distance.\n• Vérification de la compatibilité de chaque nouvel équipement avant l’ajout.'
    },
    {
      question: 'Mes données sont-elles sécurisées avec TaHoma® switch ?',
      answer: 'Oui. TaHoma® utilise un protocole sécurisé pour protéger vos données personnelles et les informations de vos équipements. Les communications sont cryptées et les serveurs sont conformes aux normes de sécurité européennes.'
    }
  ];

  toggleFAQ(index: number) {
    this.openFAQIndex = this.openFAQIndex === index ? null : index;
  }
}
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { SmartHomeSectionComponent } from './smart-home-section/smart-home-section.component';

// interface Product {
//   id: number;
//   category: 'panel' | 'battery' | 'inverter' | 'accessory';
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   link?: string;
//   highlights?: string[];
//   specs?: Record<string, string>;
// }

// interface Pack {
//   id: number;
//   title: string;
//   description: string;
//   price: string;
//   image: string;
// }

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   highlights?: string[];
// }

// interface Testimonial {
//   name: string;
//   content: string;
//   avatar?: string;
// }

// interface Article {
//   date: string;
//   title: string;
//   summary: string;
//   image: string;
// }

// interface FAQ {
//   question: string;
//   answer: string;
//   open?: boolean;
// }

// interface WhyUs {
//   icon: string;
//   title: string;
//   description: string;
// }

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, SmartHomeSectionComponent,TranslateModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     trigger('faqAnimation', [
//       state('closed', style({ height: '0px', opacity: 0, paddingTop: '0', paddingBottom: '0' })),
//       state('open', style({ height: '*', opacity: 1, paddingTop: '*', paddingBottom: '*' })),
//       transition('closed <=> open', animate('400ms ease-in-out'))
//     ])
//   ]
// })
// export class HomeComponent {
//   constructor(private translate: TranslateService) {}

//   // --------- RTL detection ----------
//   get isRTL() {
//     return this.translate.currentLang === 'ar';
//   }

//   // --------- Hero ----------
//   heroTitle = 'home.hero.title';
//   heroSubtitle = 'home.hero.subtitle';

//   // --------- Products ----------
//   products: Product[] = [
//     { id: 1, category: 'panel', title: 'Panneau Solaire 300W', description: 'Haute efficacité et durabilité.', price: '350CFA', image: 'assets/panel1.jpg' },
//     { id: 2, category: 'battery', title: 'Batterie Li-ion 5kWh', description: 'Stockage optimal pour vos besoins.', price: '1200CFA', image: 'assets/battery1.jpg' },
//     { id: 3, category: 'inverter', title: 'Onduleur 5kW', description: 'Convertit efficacement votre énergie.', price: '600CFA', image: 'assets/inverter1.jpg' },
//   ];

//   // --------- Packs ----------
//   packs: Pack[] = [
//     { id: 1, title: 'Pack Maison Connectée', description: 'Sécurité et confort pour votre domicile.', price: '1800CFA', image: 'assets/pack1.jpg' },
//     { id: 2, title: 'Pack Énergie Solaire', description: 'Production et stockage d’énergie.', price: '2500CFA', image: 'assets/pack2.jpg' },
//   ];

//   // --------- Services ----------
//   services: Service[] = [
//     { id: 1, title: 'Installation domotique', description: 'Automatisez votre maison facilement.', icon: '🏠', highlights: ['Éclairage intelligent', 'Sécurité', 'Contrôle à distance'] },
//     { id: 2, title: 'Maintenance & support', description: 'Assistance technique rapide et fiable.', icon: '🛠️' },
//     { id: 3, title: 'Devis personnalisé', description: 'Solutions adaptées à vos besoins.', icon: '📄' },
//   ];

//   // --------- Réalisations ----------
//   currentIndex = 0;
//   prev() {
//     this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
//   }
//   next() {
//     this.currentIndex = (this.currentIndex + 1) % this.products.length;
//   }

//   // --------- Témoignages ----------
//   testimonials: Testimonial[] = [
//     { name: 'Alice', content: 'Service impeccable et produits de qualité.', avatar: 'assets/avatar1.jpg' },
//     { name: 'Bob', content: 'Ma maison est maintenant totalement automatisée !', avatar: 'assets/avatar2.jpg' },
//     { name: 'Charlie', content: 'Equipe professionnelle et réactive.', avatar: 'assets/avatar3.jpg' },
//   ];
//   testimonialIndex = 0;
//   prevTestimonial() {
//     this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
//   }
//   nextTestimonial() {
//     this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
//   }

//   // --------- Articles / Inspirez-vous ----------
//   articles: Article[] = [
//     { date: '22.07.2022', title: 'Un quotidien plus confortable grâce à la maison connectée', summary: 'Découvrez comment la domotique simplifie la vie de tous les jours.', image: 'assets/article1.jpg' },
//     { date: '21.07.2022', title: 'Logement connecté : des avantages au quotidien', summary: 'Optimisez votre confort et votre sécurité grâce aux équipements connectés.', image: 'assets/article2.jpg' },
//     { date: '21.07.2022', title: 'La domotique dans un appartement', summary: 'Solutions pour un habitat intelligent et sûr.', image: 'assets/article3.jpg' },
//   ];

//   // --------- FAQ ----------
//   faqs: FAQ[] = [
//     { question: 'home.faq.q1', answer: 'home.faq.a1' },
//     { question: 'home.faq.q2', answer: 'home.faq.a2' },
//     { question: 'home.faq.q3', answer: 'home.faq.a3' },
//     { question: 'home.faq.q4', answer: 'home.faq.a4' },
//     { question: 'home.faq.q5', answer: 'home.faq.a5' },
//     { question: 'home.faq.q6', answer: 'home.faq.a6' },
//   ];
//   openFAQIndex: number | null = null;
//   toggleFAQ(index: number) {
//     this.openFAQIndex = this.openFAQIndex === index ? null : index;
//   }

//   // --------- WhyUs ----------
//   whyUs: WhyUs[] = [
//     { icon: '🛡️', title: 'Sécurité', description: 'Nos solutions assurent la protection de votre domicile et de vos proches.' },
//     { icon: '⚡', title: 'Économie d’énergie', description: 'Réduisez votre consommation grâce à nos systèmes optimisés.' },
//     { icon: '🏠', title: 'Confort', description: 'Automatisez votre maison pour un quotidien simplifié et agréable.' },
//     { icon: '💼', title: 'Expertise', description: 'Une équipe professionnelle et expérimentée à votre service.' },
//   ];

//   delayForIndex(id: number) {
//     return `${id * 100}ms`;
//   }
// }
