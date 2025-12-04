import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../shared/services/cart.service';
import { CartComponent } from "../cart/cart.component";
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';

interface Product {
  id: number;
  category: 'light' | 'sensor' | 'automation';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-domotique',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, CartComponent],
  templateUrl: './domotique.component.html',
  styleUrl: './domotique.component.scss'
})
export class DomotiqueComponent implements  OnInit , OnDestroy  {

    // Pour indiquer le chargement (spinner)
  loadData: boolean = false;

  private destroy$ = new Subject<void>();
  private  baseService= inject(RootService)
  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }




  // Parallax
  bgOffset = 0;

  // Filtre
  filter: 'all' | Product['category'] = 'all';

  selectedProduct: Product | null = null;

  // Produits domotiques
  products: Product[] = [
    {
      id: 1,
      category: 'light',
      title: `Ampoule LED Intelligente RGB`,
      description: `Contrôlez la couleur, la luminosité et les ambiances via smartphone ou assistant vocal.`,
      price: '12 000 FCFA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30Z5mH_iPr0Qutox3hAuufxq1gGW6fHlYXw&s',
      link: '#',
      highlights: ['16 millions de couleurs', 'Contrôle à distance', 'Scénarios lumineux'],
      specs: {
        'Connexion': 'Wi-Fi',
        'Durée de vie': '25 000h',
        'Compatibilité': 'Google / Alexa'
      }
    },
    {
      id: 2,
      category: 'sensor',
      title: `Capteur de Mouvement Intelligent`,
      description: `Active automatiquement vos lumières ou déclenche une alerte en cas de mouvement.`,
      price: '18 500 FCFA',
      image: 'https://i.pinimg.com/1200x/0a/79/b5/0a79b52c6df8e3e3dc0634db93486708.jpg',
      link: '#',
      highlights: ['Haute sensibilité', 'Automatisations', 'Basse consommation'],
      specs: {
        'Angle': '170°',
        'Autonomie': '2 ans',
        'Technologie': 'Zigbee 3.0'
      }
    },
    {
      id: 3,
      category: 'automation',
      title: `Prise Connectée Wi-Fi`,
      description: `Contrôlez vos appareils à distance, mesurez la consommation et planifiez des routines.`,
      price: '9 500 FCFA',
      image: 'https://i.pinimg.com/1200x/b1/d6/34/b1d63417cabf71c6475aace3bf76d527.jpg',
      link: '#',
      highlights: ['Programmation', 'Suivi énergie', 'Mode absence'],
      specs: {
        'Puissance': '2300W max',
        'Application': 'Mobile / Cloud',
        'Compatibilité': 'Alexa / Google'
      }
    },
    {
      id: 4,
      category: 'light',
      title: `Bande LED RGBIC Intelligente`,
      description: `Idéal pour salon, chambre, TV ou éclairage d’ambiance.`,
      price: '20 000 FCFA',
      image: 'https://i.pinimg.com/1200x/37/e8/3f/37e83ff4f9b59901bfa82ae08a43cdfb.jpg',
      link: '#',
      highlights: ['Effets dynamiques', 'Synchronisation musicale', 'Découpe possible'],
      specs: {
        'Longueur': '5m',
        'Connexion': 'Wi-Fi',
        'Type LED': 'RGBIC'
      }
    },
    {
      id: 5,
      category: 'sensor',
      title: `Capteur d’Ouverture Portes/Fenêtres`,
      description: `Recevez une alerte instantanée dès qu’une porte ou fenêtre s’ouvre.`,
      price: '7 000 FCFA',
      image: 'https://i.pinimg.com/1200x/cd/23/57/cd2357830d8b654b8ccea866241f86b7.jpg',
      link: '#',
      highlights: ['Ultra compact', 'Alerte en temps réel', 'Automatisation'],
      specs: {
        'Autonomie': '2 ans',
        'Technologie': 'Zigbee',
        'Fixation': 'Adhésif'
      }
    }
  ];

  get visibleProducts(): Product[] {
    return this.filter === 'all'
      ? this.products
      : this.products.filter(p => p.category === this.filter);
  }

  openDetail(p: Product) {
    this.selectedProduct = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sc = window.scrollY || window.pageYOffset;
    this.bgOffset = sc * 0.25;
    (document.documentElement as any).style.setProperty('--bg-offset', `${this.bgOffset}px`);
  }

  delayForIndex(i: number) {
    return `${0.06 * i}s`;
  }
    cart: { product: any, quantity: number }[] = [];
  constructor(public cartService: CartService) {}


    addToCart(product: any) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if(existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
        this.cartService.addToCart(product);
  }

      getDomotique() {
        this.loadData = true;
        console.log('Chargement des accessoires...');
        return this.baseService
          .all('accessories')
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (data: any) => {
              this.loadData = false;
              console.log('Accessoires chargés :', data);
      
              if (data && data.length > 0) {
                this.products = data;
              } else {
                this.products = [];
              }
            },
            (error) => {
              this.loadData = false;
              console.error('Erreur lors du chargement des accessoires :', error);
            }
          );
      }

}
