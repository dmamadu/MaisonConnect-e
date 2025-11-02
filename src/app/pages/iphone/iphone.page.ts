import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <section class="container-apple py-16">
      <h1 class="text-4xl font-semibold">Phone Pro Max</h1>
      <p class="text-gray-500 mt-2">Fiche produit, specs, sections, etc.</p>
    </section>
    <app-footer />
  `
})
export class IphonePage {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor(){
    this.title.setTitle('Phone Pro Max – Brand');
    this.meta.updateTag({ name:'description', content:'Performances, appareil photo, autonomie.' });
    this.meta.updateTag({ property:'og:type', content:'website' });
    this.meta.updateTag({ property:'og:title', content:'Phone Pro Max – Brand' });
  }
}
