import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../shared/services/cart.service';
import { CartComponent } from "../cart/cart.component";

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

@Component({
  selector: 'app-accessoires',
  standalone: true,
  imports: [CommonModule, TranslateModule, CartComponent],
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.scss']
})
export class AccessoiresComponent {
  constructor(public cartService: CartService) {}
  // Liste des produits accessoires
  products: Product[] = [
    {
      id: 1,
      category: 'accessory',
      title: 'Câble HDMI 2m',
      description: 'Câble haute qualité pour vos appareils électroniques.',
      price: '12 CFA',
      image: 'https://i.pinimg.com/1200x/8e/12/64/8e1264202e9986ac225616f2533b8c3a.jpg'
    },
    {
      id: 2,
      category: 'accessory',
      title: 'Support mural caméra',
      description: 'Fixation solide pour caméra de surveillance.',
      price: '25 CFA',
      image: 'https://i.pinimg.com/1200x/bb/d2/1e/bbd21e1bcd9eabe2bf9cee43f75d6d46.jpg'
    },
    {
      id: 3,
      category: 'accessory',
      title: 'Multiprise 6 prises',
      description: 'Multiprise sécurisée avec protection surtension.',
      price: '18 CFA',
      image: 'https://i.pinimg.com/1200x/cf/51/74/cf5174a2bec87dea4afbcff053c88ba1.jpg'
    },
    {
      id: 4,
      category: 'accessory',
      title: 'Kit de fixation universel',
      description: 'Vis et supports pour toutes vos installations.',
      price: '15 CFA',
      image: 'https://i.pinimg.com/1200x/04/f0/26/04f026b0ed50bdc26087b624a1dc1c7d.jpg'
    }
  ];

  // Filtres et recherche
  filter: 'panel' | 'battery' | 'inverter' | 'accessory' | 'all' = 'all';
  query: string = '';

  // Produit sélectionné pour le modal
  selectedProduct: Product | null = null;

  // Retourne les produits visibles selon le filtre et la recherche
  get visibleProducts(): Product[] {
    return this.products.filter(p => 
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // Ouvre le modal avec un produit
  openDetail(product: Product) {
    this.selectedProduct = product;
  }

  // Ferme le modal
  closeDetail() {
    this.selectedProduct = null;
  }

  // Optionnel : pour l'animation des cartes
  delayForIndex(index: number): string {
    return `${index * 100}ms`;
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
