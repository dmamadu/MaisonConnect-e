import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'article/:id',
        loadComponent: () =>
          import('./pages/home/article-detail/article-detail.component').then(m => m.ArticleDetailComponent),
      },
      {
        path: 'iphone',
        loadComponent: () =>
          import('./pages/iphone/iphone.page').then(m => m.IphonePage),
      },
      {
        path: 'mac',
        loadComponent: () =>
          import('./pages/mac/mac.page').then(m => m.MacPage),
      },
      {
        path: 'securite',
        loadComponent: () =>
          import('./pages/securite/securite.component').then(m => m.SecuriteComponent),
      },
      {
        path: 'domotique',
        loadComponent: () =>
          import('./pages/domotique/domotique.component').then(m => m.DomotiqueComponent),
      },
      {
        path: 'energie',
        loadComponent: () =>
          import('./pages/energie/energie.component').then(m => m.EnergieComponent),
      },
      {
        path: 'packs',
        loadComponent: () =>
          import('./pages/packs/packs.component').then(m => m.PacksComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.component').then(m => m.ServicesComponent),
      },
      {
        path: 'accessoires',
        loadComponent: () =>
          import('./pages/accessoires/accessoires.component').then(m => m.AccessoiresComponent),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('./pages/shop/shop.component').then(m => m.ShopComponent),
      },
      {
        path: 'devis',
        loadComponent: () =>
          import('./pages/devis/devis.component').then(m => m.DevisComponent),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./pages/support/support.component').then(m => m.SupportComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: 'recherche',
        loadComponent: () =>
          import('./pages/recherche/recherche.component').then(m => m.RechercheComponent),
      },
            {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then(m => m.AboutComponent),
      },
            {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog/blog.component').then(m => m.BlogComponent),
      },

      {
  path: 'blog/:id',
  loadComponent: () =>
    import('./pages/blog/blog-detail/blog-detail.component')
      .then(m => m.BlogDetailComponent)
},
//  {
//         path: 'realisations',
//         loadComponent: () =>
//           import('./pages/compnents/Smart home carousel.component').then(m => m.SmarthomeCarouselComponent),
//       },

 {
        path: 'realisations',
        loadComponent: () =>
          import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
      },
      

    ],
  },
  { path: '**', redirectTo: '' },
];
