import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CartService, CartItem } from '../../shared/services/cart.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  private destroy$ = new Subject<void>();

  constructor(public cartService: CartService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => (this.items = items));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private get lang(): 'fr' | 'en' {
    return (this.translate.currentLang || 'fr') as 'fr' | 'en';
  }

  getTitle(item: CartItem): string {
    const t = item.product.title;
    if (typeof t === 'string') return t;
    return t[this.lang] ?? t['fr'];
  }

  formatPrice(price: string): string {
    const num = parseFloat(price);
    return isNaN(num) ? price : num.toLocaleString('fr-FR') + ' FCFA';
  }

  lineTotal(item: CartItem): string {
    const num = parseFloat(item.product.price);
    return isNaN(num) ? '' : (num * item.quantity).toLocaleString('fr-FR') + ' FCFA';
  }

  increment(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrement(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  remove(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  get total(): string {
    return this.cartService.getTotalFormatted();
  }

  get isEmpty(): boolean {
    return this.items.length === 0;
  }
}
