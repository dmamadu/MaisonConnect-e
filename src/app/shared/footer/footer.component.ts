import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor, TranslateModule,CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  cols = [
    { title: 'Shop et Découvrir', links: ['Store','Mac','iPad','iPhone','Watch','AirPods'] },
    { title: 'Services', links: ['Compte','iCloud','Entertainment'] },
    { title: 'Apple Store', links: ['Trouver un Store','Financement','Aide'] },
    { title: 'Business', links: ['Apple et Business','Entreprises'] },
  ];
}
