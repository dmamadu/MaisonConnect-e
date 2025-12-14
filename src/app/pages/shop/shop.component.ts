import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../shared/services/cart.service';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';
import { CategoryService } from '../../shared/services/category.service';

interface Product {
  id: number;
  category: 'securite' | 'domotique' | 'energie' | 'packs' | 'accessory';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,FormsModule,CartComponent,TranslateModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements  OnInit , OnDestroy {
  filter: string = 'all';
  query: string = '';
  // cart: Product[] = [];




  // Pour indiquer le chargement (spinner)
    loadData: boolean = false;
  // Pour gérer les subscriptions et éviter les memory leaks
    private destroy$ = new Subject<void>();
    private  baseService= inject(RootService)
    private snackbar= inject(SnackBarService)
    private categoryService= inject(CategoryService)
  
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
  
      ngOnInit(): void {
      }


        getProduits() {
          this.loadData = true;
          console.log('Chargement des produits...');
          return this.baseService
            .all('products')
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


 
        
    loadCategories() {
    this.loadData = true;
    this.categoryService.getCategories().subscribe({
    next: (data) => {
      this.categories = data;
      this.loadData = false;
    },
    error: () => {
      this.loadData = false;
    }
  });
}


  selectedProduct?: Product;

    constructor(public cartService: CartService) {}

  // products: Product[] = [
  //   {
  //     id: 1,
  //     category: 'securite',
  //     title: 'Caméra HD',
  //     description: 'Caméra de sécurité haute définition pour la surveillance intérieure et extérieure.',
  //     price: '120 CFA',
  //     image: 'https://i.pinimg.com/736x/2f/89/53/2f89530cbdb9f40744f9889c245cee87.jpg',
  //     highlights: ['HD 1080p', 'Vision nocturne', 'Résistant aux intempéries'],
  //     specs: { Marque: 'SecureCam', Connexion: 'WiFi', Garantie: '2 ans' },
  //     link: '#'
  //   },
  //   {
  //     id: 2,
  //     category: 'domotique',
  //     title: 'Assistant Vocal',
  //     description: 'Contrôlez votre maison avec votre voix et automatisez vos routines.',
  //     price: '80 CFA',
  //     image: 'https://i.pinimg.com/736x/3d/f8/e9/3df8e9bd6fe612135c262cbac0ceeeca.jpg',
  //     highlights: ['Contrôle vocal', 'Compatibilité multi-appareils', 'Mises à jour automatiques'],
  //     specs: { Marque: 'HomeAI', Connectivité: 'WiFi', Langue: 'FR' },
  //     link: '#'
  //   },
  //   {
  //     id: 3,
  //     category: 'energie',
  //     title: 'Panneau Solaire 100W',
  //     description: 'Panneau solaire autonome pour alimentation d’appareils et recharge de batteries.',
  //     price: '150 CFA',
  //     image: 'https://i.pinimg.com/1200x/fe/4b/9c/fe4b9c9c65059371eb745efbb053db31.jpg',
  //     highlights: ['100W', 'Polycristallin', 'Résistant aux UV'],
  //     specs: { Marque: 'SolarTech', Tension: '12V', Garantie: '5 ans' },
  //     link: '#'
  //   },
  //   {
  //     id: 4,
  //     category: 'packs',
  //     title: 'Pack Domotique Complet',
  //     description: 'Kit complet pour automatiser votre maison dès l’installation.',
  //     price: '350 CFA',
  //     image: 'https://i.pinimg.com/736x/98/51/fe/9851fe28c11c67ea660f797a39f682c3.jpg',
  //     highlights: ['Assistant vocal', 'Caméra', 'Capteurs de mouvement'],
  //     specs: { Marque: 'SmartHome', NombreAppareils: '10', Garantie: '3 ans' },
  //     link: '#'
  //   },
  //   {
  //     id: 5,
  //     category: 'accessory',
  //     title: 'Batterie de Secours',
  //     description: 'Batterie externe pour vos équipements solaires et domotiques.',
  //     price: '50 CFA',
  //     image: 'https://i.pinimg.com/736x/1c/5d/67/1c5d670628756abcf2758eda17b90474.jpg',
  //     highlights: ['10000 mAh', 'Charge rapide', 'Compact'],
  //     specs: { Marque: 'PowerX', Type: 'Li-ion', Garantie: '1 an' },
  //     link: '#'
  //   },
  // ];

  products: Product[] = [
    {
      id: 1,
      category: 'securite',
      title: 'Produit X',
      description: 'Caméra de sécurité haute définition pour la surveillance intérieure et extérieure.',
      price: '120 CFA',
      image: 'assets/images/products/1.png',
      highlights: ['HD 1080p', 'Vision nocturne', 'Résistant aux intempéries'],
      specs: { Marque: 'SecureCam', Connexion: 'WiFi', Garantie: '2 ans' },
      link: '#'
    },
    {
      id: 2,
      category: 'domotique',
      title: 'Produit Y',
      description: 'Contrôlez votre maison avec votre voix et automatisez vos routines.',
      price: '80 CFA',
      image: 'assets/images/products/2.png',
      highlights: ['Contrôle vocal', 'Compatibilité multi-appareils', 'Mises à jour automatiques'],
      specs: { Marque: 'HomeAI', Connectivité: 'WiFi', Langue: 'FR' },
      link: '#'
    },
    {
      id: 3,
      category: 'energie',
      title: 'Produit Z',
      description: 'Panneau solaire autonome pour alimentation d\'appareils et recharge de batteries.',
      price: '150 CFA',
      image: 'assets/images/products/3.png',
      highlights: ['100W', 'Polycristallin', 'Résistant aux UV'],
      specs: { Marque: 'SolarTech', Tension: '12V', Garantie: '5 ans' },
      link: '#'
    },
    {
      id: 4,
      category: 'packs',
      title: 'Produit A',
      description: 'Kit complet pour automatiser votre maison dès l\'installation.',
      price: '350 CFA',
      image: 'assets/images/products/4.png',
      highlights: ['Assistant vocal', 'Caméra', 'Capteurs de mouvement'],
      specs: { Marque: 'SmartHome', NombreAppareils: '10', Garantie: '3 ans' },
      link: '#'
    },
    {
      id: 5,
      category: 'accessory',
      title: 'Produit B',
      description: 'Batterie externe pour vos équipements solaires et domotiques.',
      price: '50 CFA',
      image: 'assets/images/products/5.jpg',
      highlights: ['10000 mAh', 'Charge rapide', 'Compact'],
      specs: { Marque: 'PowerX', Type: 'Li-ion', Garantie: '1 an' },
      link: '#'
    },
  ];
  get visibleProducts() {
    return this.products.filter(p =>
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // addToCart(product: Product) {
  //   this.cart.push(product);
  // }

  // removeFromCart(product: Product) {
  //   this.cart = this.cart.filter(p => p.id !== product.id);
  // }

  openDetail(product: Product) {
    this.selectedProduct = product;
  }

  closeDetail() {
    this.selectedProduct = undefined;
  }

  delayForIndex(i: number) {
    return `${i * 100}ms`;
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

  categories = [
  { key: 'all', label: 'shop.categories.all' },
  { key: 'securite', label: 'shop.categories.securite' },
  { key: 'domotique', label: 'shop.categories.domotique' },
  { key: 'energie', label: 'shop.categories.energie' },
  // { key: 'packs', label: 'shop.categories.packs' },
  // { key: 'accessory', label: 'shop.categories.accessory' },
];







}
