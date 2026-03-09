// // cart.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export interface Product {
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

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartSubject = new BehaviorSubject<CartItem[]>([]);
//   cart$ = this.cartSubject.asObservable();

//   constructor() {}

//   // Ajouter un produit au panier
//   addToCart(product: Product) {
//     const cart = [...this.cartSubject.value]; // clone pour immutabilité
//     const existing = cart.find(c => c.product.id === product.id);

//     if (existing) {
//       existing.quantity += 1;
//     } else {
//       cart.push({ product, quantity: 1 });
//     }

//     this.cartSubject.next(cart);
//   }

//   // Retirer un produit
//   removeFromCart(productId: number) {
//     const cart = this.cartSubject.value.filter(c => c.product.id !== productId);
//     this.cartSubject.next(cart);
//   }

//   // Modifier la quantité
//   updateQuantity(productId: number, quantity: number) {
//     const cart = [...this.cartSubject.value];
//     const item = cart.find(c => c.product.id === productId);
//     if (item) {
//       item.quantity = quantity;
//       if (item.quantity <= 0) {
//         this.removeFromCart(productId);
//         return;
//       }
//       this.cartSubject.next(cart);
//     }
//   }

//   // Vider le panier
//   clearCart() {
//     this.cartSubject.next([]);
//   }

//   // Calculer le total
//   getTotal(): number {
//     return this.cartSubject.value.reduce((sum, item) => {
//       const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g,"")); // convert string price
//       return sum + price * item.quantity;
//     }, 0);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// ─── Interface alignée sur la réponse API ─────────────────────────────────────
export interface Product {
  id: number;
  title: { fr: string; en: string } | string; // supporte les deux formats
  description: { fr: string; en: string } | string;
  price: string;
  image: string;
  link?: string | null;
  highlights?: { text: string }[] | string[];
  specs?: { label: string; value: string }[] | Record<string, string>;
  category?: any;
  sub_category?: any;
  category_id?: number;
  subcategory_id?: number | null;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  // ─── Ajouter un produit ────────────────────────────────────────────────────
  addToCart(product: Product): void {
    const cart = [...this.cartSubject.value];
    const existing = cart.find(c => c.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }

    this.cartSubject.next(cart);
  }

  // ─── Retirer un produit ────────────────────────────────────────────────────
  removeFromCart(productId: number): void {
    const cart = this.cartSubject.value.filter(c => c.product.id !== productId);
    this.cartSubject.next(cart);
  }

  // ─── Modifier la quantité ──────────────────────────────────────────────────
  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const cart = [...this.cartSubject.value];
    const item = cart.find(c => c.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next(cart);
    }
  }

  // ─── Vider le panier ──────────────────────────────────────────────────────
  clearCart(): void {
    this.cartSubject.next([]);
  }

  // ─── Total ─────────────────────────────────────────────────────────────────
  getTotal(): number {
    return this.cartSubject.value.reduce((sum, item) => {
      const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, ''));
      return sum + (isNaN(price) ? 0 : price * item.quantity);
    }, 0);
  }

  // ─── Nombre d'articles ─────────────────────────────────────────────────────
  getCount(): number {
    return this.cartSubject.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  // ─── Helper : titre selon la langue ───────────────────────────────────────
  getTitle(product: Product, lang: 'fr' | 'en' = 'fr'): string {
    if (typeof product.title === 'string') return product.title;
    return product.title[lang] ?? product.title['fr'];
  }

  // ─── Helper : prix formaté ─────────────────────────────────────────────────
  formatPrice(price: string): string {
    const num = parseFloat(price);
    return isNaN(num) ? price : num.toLocaleString('fr-FR') + ' FCFA';
  }

  // ─── Total formaté ─────────────────────────────────────────────────────────
  getTotalFormatted(): string {
    return this.getTotal().toLocaleString('fr-FR') + ' FCFA';
  }
}