import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Service {
  title: string;
  description: string;
  icon: string; // lien vers une icône ou image
  link?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  query = ''
  filter = 'all';

  services: Service[] = [
    { title: 'Installation', description: 'Installation professionnelle de vos systèmes.', icon: 'https://i.pinimg.com/1200x/96/33/40/963340d07b0cedce3b1604df4135b74c.jpg', link: '/services/installation' },
    { title: 'Maintenance', description: 'Maintenance et suivi régulier de vos équipements.', icon: 'https://i.pinimg.com/1200x/8c/c3/43/8cc3439e8c31d4ee8ffe05c97a14027c.jpg', link: '/services/maintenance' },
    { title: 'Support', description: 'Assistance technique et support client.', icon: 'https://i.pinimg.com/736x/37/b8/69/37b86959ba823a2d8c06b1eb8ba76f5c.jpg', link: '/support' },
    { title: 'Devis personnalisé', description: 'Établissement de devis sur-mesure pour vos projets.', icon: 'https://i.pinimg.com/736x/fb/8f/76/fb8f76fdc66abfc7b2b16fc808cb343b.jpg', link: '/devis' },
  ];

  get visibleServices(): Service[] {
    if (!this.query) return this.services;
    return this.services.filter(s => s.title.toLowerCase().includes(this.query.toLowerCase()));
  }

  delayForIndex(i: number) {
    return `${i * 0.1}s`;
  }
}
