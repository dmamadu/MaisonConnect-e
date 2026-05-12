import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';

const STORAGE_BASE = 'https://admin.itsloneed.com/storage/';

export interface Finition {
  id: number;
  titre: { fr: string; en: string } | string;
  description: { fr: string; en: string } | string;
  photo: string;
  galerie?: string[];
  categorie: string;
  ordre: number;
}

const CATEGORIES = [
  { key: 'all',        label: 'Toutes' },
  { key: 'peinture',   label: 'Peinture' },
  { key: 'carrelage',  label: 'Carrelage' },
  { key: 'menuiserie', label: 'Menuiserie' },
  { key: 'design',     label: 'Design d\'intérieur' },
  { key: 'plafonds',   label: 'Plafonds' },
];

@Component({
  selector: 'app-finitions',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslateModule],
  templateUrl: './finitions.component.html',
  styleUrls: ['./finitions.component.scss'],
})
export class FinitionsComponent implements OnInit, OnDestroy {

  finitions: Finition[] = [];
  loading = true;
  filter = 'all';
  query = '';
  selected: Finition | null = null;
  categories = CATEGORIES;

  private destroy$ = new Subject<void>();
  private rootService = inject(RootService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private load(): void {
    this.loading = true;
    this.rootService
      .all('finitions')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.finitions = Array.isArray(res) ? res : (res?.data ?? []);
          this.loading = false;
        },
        error: () => { this.loading = false; },
      });
  }

  get visible(): Finition[] {
    return this.finitions.filter(f => {
      const matchCat = this.filter === 'all' || f.categorie === this.filter;
      const matchQ   = !this.query || this.getTitle(f).toLowerCase().includes(this.query.toLowerCase());
      return matchCat && matchQ;
    });
  }

  getTitle(f: Finition): string {
    const lang = (this.translate.currentLang || 'fr') as 'fr' | 'en';
    if (typeof f.titre === 'string') return f.titre;
    return f.titre[lang] ?? f.titre['fr'];
  }

  getDescription(f: Finition): string {
    const lang = (this.translate.currentLang || 'fr') as 'fr' | 'en';
    if (typeof f.description === 'string') return f.description;
    return f.description[lang] ?? f.description['fr'];
  }

  imageUrl(path: string): string {
    if (!path) return '';
    return path.startsWith('http') ? path : STORAGE_BASE + path;
  }

  openDetail(f: Finition): void {
    this.selected = f;
    document.body.style.overflow = 'hidden';
  }

  closeDetail(): void {
    this.selected = null;
    document.body.style.overflow = '';
  }

  onImgError(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'none';
  }

  get skeletons(): number[] {
    return [1, 2, 3, 4, 5, 6];
  }
}
