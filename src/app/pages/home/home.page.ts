import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

type Section = {
  id: string;
  theme: 'light'|'dark';
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctas?: { label: string; link: string; variant: 'dark'|'light' }[];
  img: { src: string; alt: string; position?: 'left' | 'right' | 'center' };
  bg?: string;
};

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent, NgFor, NgIf, RouterLink, HttpClientModule, TranslateModule,CommonModule],
  templateUrl: './home.page.html'
})
export class HomePage {
  private http = inject(HttpClient);
  sections: Section[] = [];

  constructor(){
    this.http.get<{sections: Section[]}>('/assets/content/home.json').subscribe({
      next: (data)=> this.sections = data.sections,
      error: ()=> this.sections = []
    });
  }
}
