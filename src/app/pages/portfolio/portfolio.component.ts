// import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from '@angular/router';
// import { Subject, takeUntil } from 'rxjs';
// import { RootService } from '../../shared/services/root.service';

// export interface Project {
//   id: number;
//   titleKey: string;
//   descriptionKey: string;
//   category: string;
//   location: string;
//   year: string;
//   images: string[];
//   thumbnail: string;
//   tags: string[];
//   client?: string;
//   duration?: string;
//   services: string[];
// }

// @Component({
//   selector: 'app-portfolio',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   templateUrl: './portfolio.component.html',
//   styleUrl: './portfolio.component.scss'
// })
// export class PortfolioComponent implements OnInit, OnDestroy {
//   selectedCategory = signal('all');
//   selectedProject = signal<Project | null>(null);
//   showModal = signal(false);
//   loadData: boolean = false;
  
//   private destroy$ = new Subject<void>();
//   private baseService = inject(RootService);

//   categories = [
//     { value: 'all', labelKey: 'portfolio.categories.all' },
//     { value: 'villa', labelKey: 'portfolio.categories.villa' },
//     { value: 'apartment', labelKey: 'portfolio.categories.apartment' },
//     { value: 'office', labelKey: 'portfolio.categories.office' },
//     { value: 'commercial', labelKey: 'portfolio.categories.commercial' }
//   ];

//   projects: Project[] = [
//     // VILLAS
//     {
//       id: 1,
//       titleKey: 'portfolio.projects.project1.title',
//       descriptionKey: 'portfolio.projects.project1.description',
//       category: 'villa',
//       location: 'Almadies, Dakar',
//       year: '2024',
//       thumbnail: 'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg',
//         'https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302653.jpg',
//         'https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694097.jpg'
//       ],
//       tags: ['Sécurité', 'Domotique', 'Solaire', 'Finitions Premium'],
//       client: 'Privé',
//       duration: '6 mois',
//       services: ['security', 'automation', 'solar', 'finishing']
//     },
//     {
//       id: 2,
//       titleKey: 'portfolio.projects.project2.title',
//       descriptionKey: 'portfolio.projects.project2.description',
//       category: 'villa',
//       location: 'Saly, Mbour',
//       year: '2024',
//       thumbnail: 'https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2192.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2192.jpg',
//         'https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2151419988.jpg',
//         'https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2151420032.jpg'
//       ],
//       tags: ['Domotique', 'Finitions Luxe', 'Éclairage'],
//       client: 'Privé',
//       duration: '4 mois',
//       services: ['automation', 'finishing']
//     },
//     {
//       id: 3,
//       titleKey: 'portfolio.projects.project3.title',
//       descriptionKey: 'portfolio.projects.project3.description',
//       category: 'villa',
//       location: 'Ngor, Dakar',
//       year: '2023',
//       thumbnail: 'https://i.pinimg.com/1200x/62/de/2f/62de2f2f7a6bb3f52a18124259229273.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/solar-panels-roof-house_1268-30534.jpg',
//         'https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field_1268-30528.jpg',
//         'https://img.freepik.com/free-photo/solar-energy-concept-with-panels_23-2149379404.jpg'
//       ],
//       tags: ['Solaire', 'Autonomie Énergétique', 'Écologique'],
//       client: 'Privé',
//       duration: '3 mois',
//       services: ['solar']
//     },

//     // APPARTEMENTS
//     {
//       id: 4,
//       titleKey: 'portfolio.projects.project4.title',
//       descriptionKey: 'portfolio.projects.project4.description',
//       category: 'apartment',
//       location: 'Plateau, Dakar',
//       year: '2024',
//       thumbnail: 'https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg',
//         'https://img.freepik.com/free-photo/modern-residential-apartment-with-outdoor-relaxation-area-generated-by-ai_188544-39440.jpg',
//         'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg'
//       ],
//       tags: ['Domotique', 'Sécurité', 'Design Moderne'],
//       client: 'Résidence Les Jardins',
//       duration: '2 mois',
//       services: ['automation', 'security']
//     },
//     {
//       id: 5,
//       titleKey: 'portfolio.projects.project5.title',
//       descriptionKey: 'portfolio.projects.project5.description',
//       category: 'apartment',
//       location: 'Mermoz, Dakar',
//       year: '2023',
//       thumbnail: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg',
//         'https://img.freepik.com/free-photo/modern-bathroom-interior-with-marble-walls_23-2151020293.jpg',
//         'https://img.freepik.com/free-photo/modern-residential-building-with-balconies-parking-lot_1268-30528.jpg'
//       ],
//       tags: ['Finitions Premium', 'Marbre', 'Élégance'],
//       client: 'Privé',
//       duration: '3 mois',
//       services: ['finishing']
//     },

//     // BUREAUX
//     {
//       id: 6,
//       titleKey: 'portfolio.projects.project6.title',
//       descriptionKey: 'portfolio.projects.project6.description',
//       category: 'office',
//       location: 'Diamniadio',
//       year: '2024',
//       thumbnail: 'https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/modern-office-space-with-open-floor-plan_23-2151419962.jpg',
//         'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg',
//         'https://img.freepik.com/free-photo/view-modern-business-center_1359-635.jpg'
//       ],
//       tags: ['Domotique Bureaux', 'Sécurité', 'Contrôle Accès'],
//       client: 'Tech Solutions SA',
//       duration: '4 mois',
//       services: ['automation', 'security']
//     },
//     {
//       id: 7,
//       titleKey: 'portfolio.projects.project7.title',
//       descriptionKey: 'portfolio.projects.project7.description',
//       category: 'office',
//       location: 'VDN, Dakar',
//       year: '2023',
//       thumbnail: 'https://i.pinimg.com/1200x/04/67/bf/0467bf320d7e46517fb285de45946ab1.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/modern-office-building-with-glass-facade_23-2151419982.jpg',
//         'https://img.freepik.com/free-photo/security-surveillance-camera-system-operating_23-2151020302.jpg',
//         'https://img.freepik.com/free-photo/solar-panels-modern-building-roof_1268-30536.jpg'
//       ],
//       tags: ['Vidéosurveillance', 'Solaire', 'Immeuble'],
//       client: 'Holding ABC',
//       duration: '5 mois',
//       services: ['security', 'solar']
//     },

//     // COMMERCES
//     {
//       id: 8,
//       titleKey: 'portfolio.projects.project8.title',
//       descriptionKey: 'portfolio.projects.project8.description',
//       category: 'commercial',
//       location: 'Sea Plaza, Dakar',
//       year: '2024',
//       thumbnail: 'https://i.pinimg.com/1200x/b6/74/86/b67486b2b5dda4cc8700547bc3497ab2.jpg',
//       images: [
//         'https://img.freepik.com/free-photo/modern-shopping-mall-interior_23-2151419976.jpg',
//         'https://img.freepik.com/free-photo/retail-store-security-system_23-2151020308.jpg',
//         'https://img.freepik.com/free-photo/modern-retail-space-design_23-2151419980.jpg'
//       ],
//       tags: ['Sécurité Commerce', 'Alarme', 'Caméras IP'],
//       client: 'Centre Commercial Sea Plaza',
//       duration: '6 mois',
//       services: ['security']
//     }
//   ];

//   ngOnInit(): void {
//     // Décommentez pour charger depuis l'API
//     // this.loadProjects();
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

//   get filteredProjects(): Project[] {
//     if (this.selectedCategory() === 'all') {
//       return this.projects;
//     }
//     return this.projects.filter(p => p.category === this.selectedCategory());
//   }

//   setCategory(category: string): void {
//     this.selectedCategory.set(category);
//   }

//   openProject(project: Project): void {
//     this.selectedProject.set(project);
//     this.showModal.set(true);
//     document.body.style.overflow = 'hidden';
//   }

//   closeModal(): void {
//     this.showModal.set(false);
//     this.selectedProject.set(null);
//     document.body.style.overflow = 'auto';
//   }

//   loadProjects(): void {
//     this.loadData = true;
//     this.baseService
//       .all('projects')
//       .pipe(takeUntil(this.destroy$))
//       .subscribe({
//         next: (data: any) => {
//           this.loadData = false;
//           if (data && data.length > 0) {
//             this.projects = data;
//           }
//         },
//         error: (error) => {
//           this.loadData = false;
//           console.error('Erreur lors du chargement des projets :', error);
//         }
//       });
//   }
// }
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';

const STORAGE_BASE = 'https://bo.itsloneed.com/storage/';

// ─── Interfaces alignées sur la réponse API ───────────────────────────────────
export interface ProjectType {
  id: number;
  slug: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  icon: string;
  color: string;
  is_active: boolean;
  order: number;
}

export interface ProjectTag {
  id: number;
  project_id: number;
  tag: string;
}

export interface ProjectService {
  id: number;
  project_id: number;
  service: string;
}

export interface ApiProject {
  id: number;
  project_type_id: number;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  location: string;
  year: string;
  thumbnail: string;
  client: string | null;
  duration: string | null;
  is_active: boolean;
  order: number;
  project_type: ProjectType;
  images: { id: number; url: string }[];
  tags: ProjectTag[];
  services: ProjectService[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {

  selectedCategory = signal('all');
  selectedProject  = signal<ApiProject | null>(null);
  showModal        = signal(false);
  loadData         = false;

  projects: ApiProject[]                      = [];
  categories: { value: string; label: string }[] = [
    { value: 'all', label: 'Tous' }
  ];

  private destroy$    = new Subject<void>();
  private baseService = inject(RootService);
  private translate   = inject(TranslateService);

  ngOnInit(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement depuis l'API ─────────────────────────────────────────────────
  loadProjects(): void {
    this.loadData = true;

    this.baseService
      .all('projects')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.loadData = false;
          const data: ApiProject[] = Array.isArray(response)
            ? response
            : (response?.data ?? []);

          this.projects = data.filter(p => p.is_active);
          this.buildCategories(this.projects);
        },
        error: (err) => {
          this.loadData = false;
          console.error('Erreur chargement portfolio :', err);
        }
      });
  }

  // ─── Construire les filtres depuis les types de projets ──────────────────────
  private buildCategories(projects: ApiProject[]): void {
    const seen  = new Set<number>();
    const extras: { value: string; label: string }[] = [];

    for (const p of projects) {
      if (p.project_type && !seen.has(p.project_type.id)) {
        seen.add(p.project_type.id);
        extras.push({
          value: p.project_type.slug,
          label: p.project_type.name[this.lang] ?? p.project_type.name['fr']
        });
      }
    }

    this.categories = [{ value: 'all', label: 'Tous' }, ...extras];
  }

  // ─── Helpers multilingues ────────────────────────────────────────────────────
  private get lang(): 'fr' | 'en' {
    return (this.translate.currentLang || 'fr') as 'fr' | 'en';
  }

  getTitle(p: ApiProject): string {
    return p.title[this.lang] ?? p.title['fr'];
  }

  getDescription(p: ApiProject): string {
    const raw = p.description[this.lang] ?? p.description['fr'] ?? '';
    return raw.replace(/<[^>]*>/g, '');
  }

  getDescriptionHtml(p: ApiProject): string {
    return p.description[this.lang] ?? p.description['fr'] ?? '';
  }

  getCategoryName(p: ApiProject): string {
    return p.project_type?.name?.[this.lang] ?? p.project_type?.name?.['fr'] ?? '';
  }

  getThumbnail(p: ApiProject): string {
    if (!p.thumbnail) return 'assets/images/placeholder.png';
    if (p.thumbnail.startsWith('http')) return p.thumbnail;
    return STORAGE_BASE + p.thumbnail;
  }

  getImages(p: ApiProject): string[] {
    // Image principale en premier, puis galerie
    const thumb = this.getThumbnail(p);
    const gallery = p.images.map(img =>
      img.url?.startsWith('http') ? img.url : STORAGE_BASE + img.url
    );
    return [thumb, ...gallery];
  }

  getTags(p: ApiProject): string[] {
    return p.tags.map(t => t.tag);
  }

  getServices(p: ApiProject): string[] {
    return p.services.map(s => s.service);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.png';
  }

  // ─── Filtrage ────────────────────────────────────────────────────────────────
  get filteredProjects(): ApiProject[] {
    if (this.selectedCategory() === 'all') return this.projects;
    return this.projects.filter(
      p => p.project_type?.slug === this.selectedCategory()
    );
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  // ─── Modal ───────────────────────────────────────────────────────────────────
  openProject(project: ApiProject): void {
    this.selectedProject.set(project);
    this.showModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal.set(false);
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}