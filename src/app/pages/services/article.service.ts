import { Injectable } from '@angular/core';

export interface Article {
  id?: number; // Ajouter un ID unique
  date: string;
  title: string;
  summary: string;
  image: string;
  content?: string; // Contenu complet de l'article
}

@Injectable({
  providedIn: 'root'
})


export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      date: '22.07.2022',
      title: 'Un quotidien plus confortable grâce à la maison connectée',
      summary: 'Découvrez comment la domotique simplifie la vie de tous les jours.',
      image: 'https://i.pinimg.com/1200x/fa/09/26/fa0926e1a56aaa1c1d5eb8bb84f3f29f.jpg',
      content: `
        <h2>Introduction à la maison connectée</h2>
        <p>La domotique transforme notre quotidien en rendant nos maisons plus intelligentes et confortables...</p>
        
        <h3>Les avantages principaux</h3>
        <ul>
          <li>Contrôle à distance de vos appareils</li>
          <li>Économies d'énergie</li>
          <li>Sécurité renforcée</li>
          <li>Confort optimisé</li>
        </ul>
        
        <p>Avec les technologies modernes, il est désormais possible de contrôler l'éclairage, le chauffage, les volets et bien plus encore depuis votre smartphone...</p>
      `
    },
    {
      id: 2,
      date: '21.07.2022',
      title: 'Logement connecté : des avantages au quotidien',
      summary: 'Optimisez votre confort et votre sécurité grâce aux équipements connectés.',
      image: 'https://i.pinimg.com/736x/bb/13/90/bb1390a3aa49a00f645c579b20f3f9fe.jpg',
      content: `
        <h2>Les équipements connectés</h2>
        <p>Un logement connecté vous offre de nombreux avantages au quotidien...</p>
        <p>Découvrez comment optimiser votre espace de vie.</p>
      `
    },
    {
      id: 3,
      date: '21.07.2022',
      title: 'La domotique dans un appartement',
      summary: 'Solutions pour un habitat intelligent et sûr.',
      image: 'https://i.pinimg.com/736x/36/3f/f3/363ff31a4fc98252842a58407c119999.jpg',
      content: `
        <h2>Domotique en appartement</h2>
        <p>Même dans un appartement, il est possible d'installer des solutions domotiques efficaces...</p>
        <p>Voici nos recommandations pour un habitat intelligent.</p>
      `
    }
  ];

  constructor() { }

  // Récupérer tous les articles
  getArticles(): Article[] {
    return this.articles;
  }

  // Récupérer un article par son ID
  getArticleById(id: number): Article | undefined {
    return this.articles.find(a => a.id === id);
  }
}