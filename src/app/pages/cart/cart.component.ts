import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CartService, CartItem } from '../../shared/services/cart.service';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  showOrderForm = false;
  loadData = false;
  orderForm = { name: '', email: '', phone: '', message: '' };

  private destroy$ = new Subject<void>();
  private rootService = inject(RootService);
  private snackbar = inject(SnackBarService);

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

  openOrderForm(): void {
    this.showOrderForm = true;
    document.body.style.overflow = 'hidden';
  }

  closeOrderForm(): void {
    this.showOrderForm = false;
    document.body.style.overflow = '';
  }

  get isFormValid(): boolean {
    const { name, email, phone } = this.orderForm;
    return !!(name.trim() && email.trim() && phone.trim());
  }

  submitOrder(): void {
    if (!this.isFormValid) return;

    const payload = {
      ...this.orderForm,
      items: this.items.map(item => ({
        title: this.getTitle(item),
        price: this.formatPrice(item.product.price),
        quantity: item.quantity,
        lineTotal: this.lineTotal(item),
      })),
      total: this.total,
    };

    this.snackbar
      .showConfirmation('Voulez-vous envoyer votre panier par email ?')
      .then((result) => {
        if (result['value'] === true) {
          this.loadData = true;
          this.rootService
            .add('commande', payload)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadData = false;
                this.closeOrderForm();
                this.orderForm = { name: '', email: '', phone: '', message: '' };
                this.snackbar.showSimpleNotification('Ok', 'Votre panier a été envoyé avec succès. Nous vous contacterons sous 24h.');
              },
              error: (err) => {
                console.error(err);
                this.loadData = false;
                this.snackbar.showSimpleNotification('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
              },
            });
        }
      });
  }
}
