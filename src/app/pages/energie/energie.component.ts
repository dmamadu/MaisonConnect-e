import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface SolarProduct {
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

@Component({
  selector: 'app-energie',
  standalone: true,
  imports: [CommonModule, FormsModule,TranslateModule],
  templateUrl: './energie.component.html',
  styleUrl: './energie.component.scss'
})
export class EnergieComponent {
  bgOffset = 0;

  filter: 'all' | SolarProduct['category'] = 'all';
  query = '';

  selectedProduct: SolarProduct | null = null;

  products: SolarProduct[] = [
    {
      id: 1,
      category: 'panel',
      title: 'Panneau Solaire Monocristallin 550W',
      description: 'Haute efficacité, idéal pour installations résidentielles ou industrielles.',
      price: '165 000 FCFA',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
      link: 'https://www.amazon.com/solar-panels',
      highlights: ['Cellules monocristallines', 'Rendement 21%', 'Durée de vie 25 ans'],
      specs: { Puissance: '550W', Tension: '41V', Dimensions: '2279 x 1134 mm' }
    },
    {
      id: 2,
      category: 'battery',
      title: 'Batterie Lithium 5KWh — 48V',
      description: 'Stockage longue durée, sécurité BMS, idéale pour autonomie solaire.',
      price: '690 000 FCFA',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
      link: 'https://www.amazon.com/lifepo4-battery',
      highlights: ['Technologie LiFePO4', '6000 cycles', 'Protection BMS'],
      specs: { Capacité: '5KWh', Tension: '48V', Cycles: '6000 cycles' }
    },
    {
      id: 3,
      category: 'inverter',
      title: 'Onduleur Hybride 5KW MPPT',
      description: 'Compatible réseau, gestion intelligente charge/solaire/batterie.',
      price: '350 000 FCFA',
      image: 'https://i.pinimg.com/1200x/da/c5/ba/dac5ba9b284d64d3c0c1aae10f52678a.jpg',
      link: 'https://www.amazon.com/solar-inverter',
      highlights: ['MPPT 120A', 'Mode hybride', 'Écran LCD'],
      specs: { Puissance: '5000W', Tension: '48V', MPPT: '120A' }
    },
    {
      id: 4,
      category: 'accessory',
      title: 'Kit Câbles Solaires + Connecteurs MC4',
      description: 'Câbles 4mm² haute qualité + connecteurs étanches.',
      price: '18 000 FCFA',
      image: 'https://i.pinimg.com/1200x/db/18/60/db1860142120734da4c2fb33e0fb440a.jpg',
      link: 'https://www.amazon.com/mc4-kit',
      highlights: ['Norme IP67', 'Haute conductivité', 'Résistant UV'],
      specs: { Section: '4mm²', Longueur: '5m', Type: 'MC4' }
    },
    {
      id: 5,
      category: 'panel',
      title: 'Mini Panneau Solaire Portable 100W',
      description: 'Idéal camping, recharge powerbank, autonome et léger.',
      price: '45 000 FCFA',
      image: 'https://i.pinimg.com/1200x/c1/09/e6/c109e6f6ab30ff323a5ed257fb3a7573.jpg',
      link: 'https://www.amazon.com/portable-solar-panel',
      highlights: ['Portable', 'USB 5V/12V', 'Résistant outdoor'],
      specs: { Puissance: '100W', Poids: '2.5kg', Format: 'pliable' }
    }
  ];

  get visibleProducts(): SolarProduct[] {
    let list = this.filter === 'all'
      ? this.products
      : this.products.filter(p => p.category === this.filter);

    if (this.query.trim().length > 0) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(this.query.toLowerCase()) ||
        p.description.toLowerCase().includes(this.query.toLowerCase())
      );
    }

    return list;
  }

  openDetail(p: SolarProduct) {
    this.selectedProduct = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll() {
    const sc = window.scrollY || 0;
    this.bgOffset = sc * 0.25;
    document.documentElement.style.setProperty('--bg-offset', `${this.bgOffset}px`);
  }

  delayForIndex(i: number) {
    return `${i * 0.06}s`;
  }
}
