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
      titleKey: 'footer.columns.produits',
      links: [
        'securite',
        'domotique',
        'energie',
        'packs',
        'accessoires'
      ]
    },
    {
      titleKey: 'footer.columns.services',
      links: [
        'services',
        'support',
        'devis'
      ]
    },
    {
      titleKey: 'footer.columns.boutique',
      links: ['shop']
    },
    {
      titleKey: 'footer.columns.contact',
      links: [
        'contact',
        'recherche'
      ]
    }
  ];

  getLinkTranslation(key: string) {
    return this.translate.instant(`footer.columns.links.${key}`);
  }
}
