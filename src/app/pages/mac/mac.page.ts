import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

type MacItem = {
  name: string;
  tagline: string;
  price: string;
  img: string;
};

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './mac.page.html'
})
export class MacPage {
  private http = inject(HttpClient);
  items: MacItem[] = [];

  constructor(){
    this.http.get<{items: MacItem[]}>('/assets/content/mac.json').subscribe({
      next: (d)=> this.items = d.items,
      error: ()=> this.items = []
    });
  }
}
