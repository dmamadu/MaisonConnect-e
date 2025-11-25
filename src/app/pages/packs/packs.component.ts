import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../shared/services/cart.service';
import { CartComponent } from "../cart/cart.component";

interface Product {
  id: number;
  category: 'starter' | 'pro' | 'premium';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [CommonModule, TranslateModule, CartComponent],
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent {

constructor(public cartService: CartService) {}


  filter: 'all' | 'starter' | 'pro' | 'premium' = 'all';
  query: string = '';
  selectedPack?: Product;

  packs: Product[] = [
    {
      id: 1,
      category: 'starter',
      title: 'Pack Starter',
      description: 'Idéal pour une petite installation, avec les essentiels.',
      price: '299CFA',
      image: 'https://i.pinimg.com/1200x/e5/9e/4f/e59e4f947f80ac4a7da3eb3fbeb06c05.jpg',
      highlights: ['Panneau solaire 100W', 'Batterie 50Ah', 'Onduleur 300W'],
      specs: { 'Nombre de panneaux': '1', 'Capacité batterie': '50Ah', 'Puissance onduleur': '300W' },
      link: '#'
    },
    {
      id: 2,
      category: 'pro',
      title: 'Pack Pro',
      description: 'Pour une installation complète avec plus d’autonomie.',
      price: '699CFA',
      image: 'https://i.pinimg.com/736x/b6/f9/3d/b6f93d1b6c4ed4884350391532adf290.jpg',
      highlights: ['Panneau solaire 300W', 'Batterie 150Ah', 'Onduleur 1000W'],
      specs: { 'Nombre de panneaux': '3', 'Capacité batterie': '150Ah', 'Puissance onduleur': '1000W' },
      link: '#'
    },
    {
      id: 3,
      category: 'premium',
      title: 'Pack Premium',
      description: 'Solution haut de gamme pour grande autonomie et performance.',
      price: '1299CFA',
      image: 'https://i.pinimg.com/736x/d9/2d/f5/d92df557673f63ab799fd94fcbda752c.jpg',
      highlights: ['Panneau solaire 500W', 'Batterie 300Ah', 'Onduleur 2000W'],
      specs: { 'Nombre de panneaux': '5', 'Capacité batterie': '300Ah', 'Puissance onduleur': '2000W' },
      link: '#'
    }
  ];

  // Liste filtrée et recherchée
  get visiblePacks() {
    return this.packs.filter(p =>
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // Animation delay pour les cartes
  delayForIndex(index: number) {
    return `${index * 100}ms`;
  }

  openDetail(pack: Product) {
    this.selectedPack = pack;
  }

  closeDetail() {
    this.selectedPack = undefined;
  }


      cart: { product: Product, quantity: number }[] = [];

    addToCart(product: any) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if(existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
        this.cartService.addToCart(product);

  }
}

