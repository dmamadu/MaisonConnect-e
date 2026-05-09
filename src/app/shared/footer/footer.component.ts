import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private translate: TranslateService) {}

  cols = [
    {
      titleKey: 'footer.columns.entreprise',
      links: [
        { label: 'accueil', route: '/' },
        { label: 'a-propos', route: '/about' },
        { label: 'realisations', route: '/realisations' },
        { label: 'blog', route: '/blog' }
      ]
    },
    {
      titleKey: 'footer.columns.solutions',
      links: [
        { label: 'securite', route: '/securite' },
        { label: 'domotique', route: '/domotique' },
        { label: 'solaire', route: '/energie' },
        { label: 'finitions', route: '/services' }
      ]
    },
    {
      titleKey: 'footer.columns.services',
      links: [
        { label: 'devis', route: '/devis' },
        { label: 'boutique', route: '/shop' },
        { label: 'assistance', route: '/support' }
      ]
    },
    {
      titleKey: 'footer.columns.contact',
      links: [
        { label: 'contact', route: '/contact' }
      ]
    }
  ];

  getLinkTranslation(key: string) {
    return this.translate.instant(`footer.columns.links.${key}`);
  }
    currentYear = new Date().getFullYear();

}
