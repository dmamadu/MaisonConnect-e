import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface Product {
  id: number;
  category: 'camera' | 'alarm' | 'nvr';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-securite',
  standalone: true,
  imports: [CommonModule, FormsModule,TranslateModule],
  templateUrl: './securite.component.html',
  styleUrl: './securite.component.scss'
})
export class SecuriteComponent {
  // Parallax / background reactive values
  bgOffset = 0;

  // Filtre
  filter: 'all' | Product['category'] = 'all';

  // Modal / detail
  selectedProduct: Product | null = null;

  // Liste des produits (mock, remplacera par backend plus tard)
  products: Product[] = [
    {
      id: 1,
      category: 'camera',
      title: `Caméra Wi-Fi 1080p — Vision Nocturne`,
      description: `Caméra intérieure/extérieure, audio bidirectionnel et détection de mouvement intelligente.`,
      price: '29 000 FCFA',
      image: 'https://i.pinimg.com/736x/2f/89/53/2f89530cbdb9f40744f9889c245cee87.jpg',
      link: 'https://www.amazon.com/dp/B08XYZEXAMPLE',
      highlights: [`Vision nocturne`, `Audio bidirectionnel`, `App mobile`],
      specs: { 'Résolution': '1080p', 'Connexion': 'Wi-Fi', 'Étanchéité': 'IP65' }
    },
    {
      id: 2,
      category: 'camera',
      title: `Caméra PTZ Motorisée 4K`,
      description: `Rotation 360°, zoom optique, idéale pour surveillance extérieur/industriel.`,
      price: '150 000 FCFA',
      image: 'https://i.pinimg.com/1200x/d3/55/df/d355df4f7e17e1ed75b6852c8ce22656.jpg',
      link: 'https://www.amazon.com/dp/B07PTZEXAMPLE',
      highlights: [`Zoom optique`, `PTZ 360°`, `Contrôle mobile`],
      specs: { 'Résolution': '4K', 'Zoom': '20x optique', 'Alimentation': 'PoE / 12V' }
    },
    {
      id: 3,
      category: 'alarm',
      title: `Kit Alarme Sans Fil Maison`,
      description: `Détecteurs d'ouverture, capteurs de mouvement et sirène 120 dB.`,
      price: '89 000 FCFA',
      image: 'https://i.pinimg.com/1200x/e8/ad/7c/e8ad7cc49ee63dd29ee4090cc21c24a1.jpg',
      link: 'https://www.amazon.com/dp/B07ALARMEXAMPLE',
      highlights: [`Installation facile`, `Sirène 120dB`, `Notifications mobile`],
      specs: { 'Détecteurs inclus': '3 portes + 1 mouvement', 'Autonomie': '2 ans', 'Compatibilité': 'Wi-Fi' }
    },
    {
      id: 4,
      category: 'nvr',
      title: `Enregistreur NVR 8 canaux`,
      description: `Supporte caméras IP jusqu'à 5MP, accès distant et stockage sécurisé.`,
      price: '110 000 FCFA',
      image: 'https://i.pinimg.com/1200x/2e/84/40/2e844002a18ae93dbc7da7cb7901b19b.jpg',
      link: 'https://www.amazon.com/dp/B08NVREXAMPLE',
      highlights: [`8 canaux`, `Accès distant`, `Raid/backup`],
      specs: { 'Entrées': '8 PoE', 'Stockage': '2 x SATA (max 16TB)', 'Sortie': 'HDMI' }
    },
    {
      id: 5,
      category: 'camera',
      title: `Caméra Discrete Bullet 2K`,
      description: `Bullet camera compacte, vision longue portée et weatherproof.`,
      price: '45 000 FCFA',
      image: 'https://i.pinimg.com/736x/ed/3b/2c/ed3b2c3f4f6f4e1f4c8e4b2a5c9e8f7d.jpg',
      link: 'https://www.amazon.com/dp/B08BULLET',
      highlights: [`Longue portée`, `HD 2K`, `IP67`],
      specs: { 'Résolution': '2K', 'Portée IR': '40m', 'Indice': 'IP67' }
    }
  ];

  // Filtre appliqué (computed list)
  get visibleProducts(): Product[] {
    return this.filter === 'all' ? this.products : this.products.filter(p => p.category === this.filter);
  }

  // Ouvre le modal / détail
  openDetail(p: Product) {
    this.selectedProduct = p;
    // verrouiller scroll si besoin
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  // Scroll listener pour parallax du fond et léger mouvement hero
  @HostListener('window:scroll')
  onWindowScroll() {
    const sc = window.scrollY || window.pageYOffset;
    // on garde un offset réduit pour un effet subtil
    this.bgOffset = sc * 0.25;
    // on place une variable CSS sur root pour lier dans le scss
    (document.documentElement as any).style.setProperty('--bg-offset', `${this.bgOffset}px`);
  }

  // util (pour animation delay dans template)
  delayForIndex(i: number) {
    return `${0.06 * i}s`;
  }
}
