// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { Subject, takeUntil } from 'rxjs';
// import { RootService } from '../../../shared/services/root.service';

// @Component({
//   selector: 'app-blog-detail',
//   standalone: true,
//   imports: [CommonModule, TranslateModule],
//   templateUrl: './blog-detail.component.html',
//   styleUrl: './blog-detail.component.scss'
// })
// export class BlogDetailComponent implements OnInit, OnDestroy {

//   private route = inject(ActivatedRoute);
//   private baseService = inject(RootService);

//   private destroy$ = new Subject<void>();

//   blog: any = null;
//   loading = false;

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.fetchBlog(id);
//   }

//   fetchBlog(id: number) {
//     this.loading = true;

//     this.baseService
//       .all(`blogs/${id}`)
//       .pipe(takeUntil(this.destroy$))
//       .subscribe({
//         next: (data) => {
//           this.blog = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Erreur récupération article', err);
//           this.loading = false;
//         }
//       });
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }
// }
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../../shared/services/root.service';
import { SnackBarService } from '../../../shared/services/snackBar.service';
import { TranslateModule } from '@ngx-translate/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  post: BlogPost | null = null;
  relatedPosts: BlogPost[] = [];
  loadData: boolean = false;
  
  private destroy$ = new Subject<void>();
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private baseService = inject(RootService);
  private snackbar = inject(SnackBarService);

  // Tous les articles (même liste que dans blog.component.ts)
  // allPosts: BlogPost[] = [
  //   {
  //     id: 1,
  //     title: 'Comment sécuriser une villa moderne',
  //     excerpt: 'Découvrez les meilleures pratiques et technologies pour protéger efficacement votre villa moderne contre les intrusions et les dangers.',
  //     content: `
  //       <h2>Introduction</h2>
  //       <p>La sécurité d'une villa moderne nécessite une approche globale combinant technologies de pointe et bonnes pratiques. Dans cet article, nous explorerons les solutions essentielles pour protéger votre propriété.</p>

  //       <h2>1. Systèmes de vidéosurveillance intelligents</h2>
  //       <p>Les caméras IP haute définition avec intelligence artificielle sont désormais la norme. Elles permettent :</p>
  //       <ul>
  //         <li>Détection de mouvement avancée</li>
  //         <li>Reconnaissance faciale</li>
  //         <li>Alertes en temps réel sur smartphone</li>
  //         <li>Vision nocturne infrarouge</li>
  //         <li>Stockage cloud sécurisé</li>
  //       </ul>

  //       <h2>2. Contrôle d'accès biométrique</h2>
  //       <p>Les systèmes d'accès par empreinte digitale ou reconnaissance faciale offrent un niveau de sécurité supérieur aux clés traditionnelles. Ils permettent également de tracer tous les accès à votre propriété.</p>

  //       <h2>3. Alarme connectée intelligente</h2>
  //       <p>Les alarmes modernes s'intègrent parfaitement avec votre smartphone et votre système domotique. Fonctionnalités clés :</p>
  //       <ul>
  //         <li>Détecteurs de mouvement volumétriques</li>
  //         <li>Capteurs d'ouverture sur portes et fenêtres</li>
  //         <li>Sirène intérieure et extérieure</li>
  //         <li>Liaison directe avec société de télésurveillance</li>
  //       </ul>

  //       <h2>4. Éclairage automatique dissuasif</h2>
  //       <p>Un éclairage bien pensé décourage les intrusions. Installez des projecteurs à détection de mouvement aux points stratégiques et programmez des scénarios d'éclairage pour simuler une présence.</p>

  //       <h2>5. Sécurisation du périmètre</h2>
  //       <p>Ne négligez pas la sécurité physique : portails automatiques, clôtures renforcées, barrières infrarouges périmétriques sont autant de premières lignes de défense efficaces.</p>

  //       <h2>Conclusion</h2>
  //       <p>Une villa vraiment sécurisée combine plusieurs couches de protection. L'investissement dans des systèmes de sécurité modernes est rapidement rentabilisé par la tranquillité d'esprit et la protection de vos biens.</p>
  //     `,
  //     image: 'assets/images/blog/security-villa.jpg',
  //     category: 'security',
  //     date: '2024-12-10',
  //     author: 'Jean Dupont',
  //     readTime: '8 min',
  //     tags: ['sécurité', 'villa', 'caméra', 'alarme', 'surveillance']
  //   },
  //   {
  //     id: 2,
  //     title: 'Domotique : ce qu\'il faut absolument automatiser',
  //     excerpt: 'Transformez votre maison en habitat intelligent. Découvrez les automatisations essentielles pour améliorer votre confort quotidien.',
  //     content: `
  //       <h2>La révolution de la maison intelligente</h2>
  //       <p>La domotique n'est plus un luxe mais devient une nécessité pour optimiser confort, sécurité et économies d'énergie. Voici ce qu'il faut absolument automatiser.</p>

  //       <h2>1. L'éclairage intelligent</h2>
  //       <p>L'éclairage représente 30% de la consommation électrique. Automatisez-le pour :</p>
  //       <ul>
  //         <li>Régler l'intensité selon l'heure et l'activité</li>
  //         <li>Créer des ambiances personnalisées</li>
  //         <li>Extinction automatique des lumières oubliées</li>
  //         <li>Simulation de présence en vacances</li>
  //         <li>Contrôle vocal avec Alexa ou Google Home</li>
  //       </ul>

  //       <h2>2. Le chauffage et la climatisation</h2>
  //       <p>Un thermostat intelligent peut réduire votre facture énergétique de 20 à 30%. Fonctionnalités essentielles :</p>
  //       <ul>
  //         <li>Programmation hebdomadaire automatique</li>
  //         <li>Ajustement selon la présence détectée</li>
  //         <li>Géolocalisation pour chauffer avant votre retour</li>
  //         <li>Analyse de consommation et recommandations</li>
  //       </ul>

  //       <h2>3. Volets et stores motorisés</h2>
  //       <p>Automatisez l'ouverture et fermeture selon :</p>
  //       <ul>
  //         <li>L'heure du lever et coucher du soleil</li>
  //         <li>La température extérieure</li>
  //         <li>Votre présence ou absence</li>
  //         <li>Des scénarios personnalisés (réveil, cinéma, etc.)</li>
  //       </ul>

  //       <h2>4. Sécurité intégrée</h2>
  //       <p>Connectez alarme, caméras, détecteurs et serrures pour un contrôle centralisé depuis votre smartphone.</p>

  //       <h2>5. Arrosage automatique du jardin</h2>
  //       <p>Économisez l'eau avec un système intelligent qui adapte l'arrosage à la météo et à l'humidité du sol.</p>

  //       <h2>6. Gestion de l'énergie solaire</h2>
  //       <p>Optimisez l'autoconsommation en programmant les appareils énergivores pendant les heures de production solaire.</p>

  //       <h2>Conclusion</h2>
  //       <p>Commencez par automatiser l'éclairage et le chauffage pour des économies immédiates, puis étendez progressivement votre installation domotique selon vos besoins.</p>
  //     `,
  //     image: 'assets/images/blog/domotique.jpg',
  //     category: 'domotique',
  //     date: '2024-12-08',
  //     author: 'Marie Diallo',
  //     readTime: '7 min',
  //     tags: ['domotique', 'automatisation', 'smart home', 'confort', 'économie']
  //   },
  //   {
  //     id: 3,
  //     title: 'Comment dimensionner une installation solaire',
  //     excerpt: 'Guide complet pour calculer précisément vos besoins en panneaux solaires et optimiser votre investissement dans l\'énergie renouvelable.',
  //     content: `
  //       <h2>Introduction au dimensionnement solaire</h2>
  //       <p>Bien dimensionner son installation solaire est crucial pour maximiser sa rentabilité. Un système sous-dimensionné ne couvrira pas vos besoins, un système surdimensionné représente un investissement inutile.</p>

  //       <h2>Étape 1 : Analyser votre consommation électrique</h2>
  //       <p>Commencez par étudier vos factures des 12 derniers mois pour déterminer :</p>
  //       <ul>
  //         <li>Votre consommation annuelle totale (kWh/an)</li>
  //         <li>Votre consommation mensuelle moyenne</li>
  //         <li>Les pics de consommation saisonniers</li>
  //         <li>Vos habitudes de consommation (jour/nuit)</li>
  //       </ul>

  //       <h2>Étape 2 : Évaluer votre potentiel solaire</h2>
  //       <p>Plusieurs facteurs influencent la production :</p>
  //       <ul>
  //         <li><strong>Ensoleillement</strong> : Au Sénégal, 5 à 6 kWh/m²/jour</li>
  //         <li><strong>Orientation</strong> : Idéalement plein Sud</li>
  //         <li><strong>Inclinaison</strong> : Entre 10° et 15° à Dakar</li>
  //         <li><strong>Ombrage</strong> : À éviter absolument</li>
  //         <li><strong>Surface disponible</strong> : Toiture ou terrain</li>
  //       </ul>

  //       <h2>Étape 3 : Calculer la puissance nécessaire</h2>
  //       <p>Formule de base :</p>
  //       <p><strong>Puissance (kWc) = Consommation annuelle (kWh) / (Ensoleillement × 365 × Rendement)</strong></p>
  //       <p>Exemple concret :</p>
  //       <ul>
  //         <li>Consommation : 6000 kWh/an</li>
  //         <li>Ensoleillement : 5,5 kWh/m²/jour</li>
  //         <li>Rendement système : 0,75</li>
  //         <li>Calcul : 6000 / (5,5 × 365 × 0,75) = <strong>4 kWc</strong></li>
  //       </ul>

  //       <h2>Étape 4 : Choisir le type de système</h2>
  //       <h3>Système raccordé au réseau (On-Grid)</h3>
  //       <ul>
  //         <li>Pas de batterie nécessaire</li>
  //         <li>Revente du surplus possible</li>
  //         <li>Investissement moindre</li>
  //       </ul>

  //       <h3>Système autonome (Off-Grid)</h3>
  //       <ul>
  //         <li>Batteries indispensables</li>
  //         <li>Indépendance totale</li>
  //         <li>Coût plus élevé</li>
  //       </ul>

  //       <h3>Système hybride</h3>
  //       <ul>
  //         <li>Batteries + raccordement réseau</li>
  //         <li>Sécurité en cas de coupure</li>
  //         <li>Solution optimale mais coûteuse</li>
  //       </ul>

  //       <h2>Étape 5 : Dimensionner les batteries (si nécessaire)</h2>
  //       <p>Capacité batterie (kWh) = Consommation journalière × Nombre de jours d'autonomie / Profondeur de décharge</p>
  //       <p>Pour 2 jours d'autonomie avec 20 kWh/jour :</p>
  //       <p>Capacité = 20 × 2 / 0,5 = <strong>80 kWh</strong></p>

  //       <h2>Budget indicatif (Sénégal - 2024)</h2>
  //       <table>
  //         <tr><th>Puissance</th><th>Prix moyen</th></tr>
  //         <tr><td>3 kWc</td><td>2 500 000 - 3 500 000 FCFA</td></tr>
  //         <tr><td>5 kWc</td><td>4 000 000 - 5 500 000 FCFA</td></tr>
  //         <tr><td>10 kWc</td><td>7 500 000 - 10 000 000 FCFA</td></tr>
  //       </table>

  //       <h2>Conclusion</h2>
  //       <p>Un dimensionnement précis nécessite une étude personnalisée. Faites appel à un professionnel certifié pour une analyse détaillée et un devis adapté à vos besoins réels.</p>
  //     `,
  //     image: 'assets/images/blog/solar-installation.jpg',
  //     category: 'solar',
  //     date: '2024-12-05',
  //     author: 'Amadou Sow',
  //     readTime: '10 min',
  //     tags: ['solaire', 'dimensionnement', 'calcul', 'panneaux', 'énergie']
  //   },
  //   {
  //     id: 4,
  //     title: 'Finitions haut de gamme : les tendances 2025',
  //     excerpt: 'Découvrez les matériaux, couleurs et finitions premium qui définissent le luxe résidentiel en 2025.',
  //     content: `
  //       <h2>Le luxe contemporain en 2025</h2>
  //       <p>Les finitions haut de gamme évoluent vers plus de naturel, de durabilité et de technologie intégrée. Voici les tendances qui marquent 2025.</p>

  //       <h2>1. Matériaux naturels et nobles</h2>
  //       <h3>Pierre naturelle</h3>
  //       <ul>
  //         <li>Marbre de Carrare pour salles de bains</li>
  //         <li>Travertin pour sols extérieurs</li>
  //         <li>Granit pour plans de travail cuisine</li>
  //         <li>Finitions brossées et adoucies</li>
  //       </ul>

  //       <h3>Bois massif</h3>
  //       <ul>
  //         <li>Chêne massif pour parquets</li>
  //         <li>Teck pour terrasses et salles d'eau</li>
  //         <li>Noyer pour mobilier intégré</li>
  //         <li>Essence locale : Iroko, Tali</li>
  //       </ul>

  //       <h2>2. Palette de couleurs 2025</h2>
  //       <h3>Couleurs dominantes</h3>
  //       <ul>
  //         <li><strong>Tons terreux</strong> : Terracotta, ocre, beige</li>
  //         <li><strong>Verts naturels</strong> : Sauge, olive, kaki</li>
  //         <li><strong>Neutres chauds</strong> : Grège, taupe, lin</li>
  //         <li><strong>Bleus profonds</strong> : Marine, pétrole</li>
  //       </ul>

  //       <h3>Finitions</h3>
  //       <ul>
  //         <li>Murs : Enduits à la chaux, tadelakt</li>
  //         <li>Peintures : Finitions mates veloutées</li>
  //         <li>Métaux : Laiton brossé, bronze noir mat</li>
  //       </ul>

  //       <h2>3. Salles de bains de luxe</h2>
  //       <h3>Équipements premium</h3>
  //       <ul>
  //         <li>Douche à l'italienne XXL avec pluie tropicale</li>
  //         <li>Baignoire îlot design en solid surface</li>
  //         <li>Robinetterie thermostatique encastrée</li>
  //         <li>Vasques en pierre naturelle sculptée</li>
  //         <li>WC japonais suspendu avec bidet intégré</li>
  //       </ul>

  //       <h3>Revêtements</h3>
  //       <ul>
  //         <li>Grands formats 120x120 cm</li>
  //         <li>Effet marbre veiné ou terrazzo</li>
  //         <li>Mosaïque artisanale pour niches</li>
  //       </ul>

  //       <h2>4. Cuisine haut de gamme</h2>
  //       <h3>Plans de travail</h3>
  //       <ul>
  //         <li>Quartz compact antibactérien</li>
  //         <li>Granit brossé 3 cm d'épaisseur</li>
  //         <li>Céramique effet marbre</li>
  //         <li>Inox brossé pour zone cuisson</li>
  //       </ul>

  //       <h3>Façades et rangements</h3>
  //       <ul>
  //         <li>Laque mate au toucher velours</li>
  //         <li>Placage bois naturel</li>
  //         <li>Système push-to-open sans poignées</li>
  //         <li>Îlot central avec coin repas intégré</li>
  //       </ul>

  //       <h2>5. Sols premium</h2>
  //       <h3>Intérieur</h3>
  //       <ul>
  //         <li>Parquet massif à l'anglaise</li>
  //         <li>Grands carreaux marbre 100x100</li>
  //         <li>Résine époxy effet béton ciré</li>
  //       </ul>

  //       <h3>Extérieur</h3>
  //       <ul>
  //         <li>Carrelage grès cérame 20mm antidérapant</li>
  //         <li>Bois composite effet teck</li>
  //         <li>Pierre reconstituée</li>
  //       </ul>

  //       <h2>6. Éclairage architectural</h2>
  //       <ul>
  //         <li>LED intégré indirect (corniches, plinthes)</li>
  //         <li>Spots encastrés orientables</li>
  //         <li>Suspensions design statement</li>
  //         <li>Variateurs et scénarios domotiques</li>
  //       </ul>

  //       <h2>7. Faux-plafonds et moulures</h2>
  //       <ul>
  //         <li>Caissons lumineux</li>
  //         <li>Corniches XXL pour éclairage indirect</li>
  //         <li>Staff et plâtre sculpté pour pièces nobles</li>
  //         <li>Lambris acoustiques design</li>
  //       </ul>

  //       <h2>Budget indicatif finitions premium</h2>
  //       <p>Pour une villa de 200m² :</p>
  //       <ul>
  //         <li>Sols marbre : 15 000 - 25 000 FCFA/m²</li>
  //         <li>Parquet massif : 20 000 - 40 000 FCFA/m²</li>
  //         <li>Cuisine équipée : 8 000 000 - 15 000 000 FCFA</li>
  //         <li>Salle de bain complète : 3 000 000 - 6 000 000 FCFA</li>
  //       </ul>

  //       <h2>Conclusion</h2>
  //       <p>Les finitions haut de gamme 2025 allient esthétique intemporelle, matériaux durables et technologies discrètement intégrées. Investir dans la qualité, c'est investir dans la durabilité et la valeur de votre bien.</p>
  //     `,
  //     image: 'assets/images/blog/finitions-luxe.jpg',
  //     category: 'finitions',
  //     date: '2024-12-03',
  //     author: 'Fatou Ndiaye',
  //     readTime: '9 min',
  //     tags: ['finitions', 'luxe', 'design', 'tendances', 'matériaux']
  //   },
  //   {
  //     id: 5,
  //     title: 'Guides : vidéosurveillance, alarmes, énergie solaire',
  //     excerpt: 'Guides pratiques complets pour choisir et installer vos systèmes de sécurité et solutions énergétiques.',
  //     content: `
  //       <h2>Guide complet : Sécurité et Énergie</h2>
  //       <p>Ce guide regroupe l'essentiel à savoir sur la vidéosurveillance, les alarmes et l'énergie solaire pour votre habitat.</p>

  //       <h2>PARTIE 1 : VIDÉOSURVEILLANCE</h2>

  //       <h3>Types de caméras</h3>
  //       <h4>1. Caméras IP (recommandées)</h4>
  //       <ul>
  //         <li><strong>Résolution</strong> : 2MP (1080p) minimum, idéalement 4MP ou 8MP</li>
  //         <li><strong>Vision nocturne</strong> : IR jusqu'à 30m minimum</li>
  //         <li><strong>Prix</strong> : 80 000 - 250 000 FCFA/caméra</li>
  //       </ul>

  //       <h4>2. Caméras analogiques HD</h4>
  //       <ul>
  //         <li>Moins chères : 40 000 - 100 000 FCFA</li>
  //         <li>Qualité inférieure</li>
  //         <li>Bonnes pour petits budgets</li>
  //       </ul>

  //       <h3>Nombre de caméras nécessaires</h3>
  //       <ul>
  //         <li><strong>Villa standard</strong> : 4-6 caméras (entrée, portail, jardin, angles morts)</li>
  //         <li><strong>Grande propriété</strong> : 8-12 caméras</li>
  //         <li><strong>Appartement</strong> : 2-3 caméras (entrée, salon, balcon)</li>
  //       </ul>

  //       <h3>Stockage des vidéos</h3>
  //       <ul>
  //         <li><strong>DVR/NVR local</strong> : 500 Go à 4 To selon durée conservation</li>
  //         <li><strong>Cloud</strong> : Abonnement 5 000 - 15 000 FCFA/mois</li>
  //         <li><strong>Durée conservation recommandée</strong> : 30 jours minimum</li>
  //       </ul>

  //       <h3>Installation</h3>
  //       <ul>
  //         <li>Câblage : Cat 6 pour IP, coaxial pour analogique</li>
  //         <li>Hauteur : 2,5m à 3,5m pour éviter vandalisme</li>
  //         <li>Alimentation : POE pour caméras IP (idéal)</li>
  //       </ul>

  //       <h3>Budget vidéosurveillance complète</h3>
  //       <ul>
  //         <li><strong>Kit 4 caméras IP + NVR</strong> : 400 000 - 800 000 FCFA</li>
  //         <li><strong>Installation pro</strong> : 150 000 - 300 000 FCFA</li>
  //         <li><strong>Total</strong> : 550 000 - 1 100 000 FCFA</li>
  //       </ul>

  //       <h2>PARTIE 2 : SYSTÈMES D'ALARME</h2>

  //       <h3>Composants essentiels</h3>
  //       <h4>1. Centrale d'alarme</h4>
  //       <ul>
  //         <li>GSM intégré pour alertes SMS</li>
  //         <li>8 à 32 zones selon taille habitat</li>
  //         <li>Batterie secours 12V 7Ah</li>
  //         <li>Prix : 80 000 - 250 000 FCFA</li>
  //       </ul>

  //       <h4>2. Détecteurs</h4>
  //       <ul>
  //         <li><strong>PIR (mouvement volumétrique)</strong> : 15 000 - 35 000 FCFA/unité</li>
  //         <li><strong>Contacts portes/fenêtres</strong> : 5 000 - 15 000 FCFA/unité</li>
  //         <li><strong>Détecteurs bris de vitre</strong> : 25 000 - 50 000 FCFA</li>
  //         <li><strong>Barrières infrarouges extérieures</strong> : 60 000 - 150 000 FCFA</li>
  //       </ul>

  //       <h4>3. Sirènes</h4>
  //       <ul>
  //         <li><strong>Intérieure</strong> : 30 000 - 60 000 FCFA</li>
  //         <li><strong>Extérieure avec flash</strong> : 50 000 - 100 000 FCFA</li>
  //       </ul>

  //       <h3>Télésurveillance</h3>
  //       <ul>
  //         <li>Abonnement : 15 000 - 35 000 FCFA/mois</li>
  //         <li>Intervention agent sécurité en cas d'alerte</li>
  //         <li>Recommandé pour résidences secondaires</li>
  //       </ul>

  //       <h3>Budget alarme complète villa</h3>
  //       <ul>
  //         <li>Centrale GSM : 150 000 FCFA</li>
  //         <li>6 détecteurs PIR : 150 000 FCFA</li>
  //         <li>8 contacts : 80 000 FCFA</li>
  //         <li>2 sirènes : 120 000 FCFA</li>
  //         <li>Installation : 100 000 FCFA</li>
  //         <li><strong>Total : 600 000 - 800 000 FCFA</strong></li>
  //       </ul>

  //       <h2>PARTIE 3 : ÉNERGIE SOLAIRE</h2>

  //       <h3>Système solaire résidentiel type</h3>
  //       <h4>Pour villa consommant 20 kWh/jour</h4>

  //       <h3>Composants</h3>
  //       <h4>1. Panneaux solaires</h4>
  //       <ul>
  //         <li>16 panneaux × 400Wc = 6,4 kWc</li>
  //         <li>Monocristallins rendement >20%</li>
  //         <li>Garantie 25 ans</li>
  //         <li>Prix : 180 000 FCFA/panneau × 16 = 2 880 000 FCFA</li>
  //       </ul>

  //       <h4>2. Onduleur hybride</h4>
  //       <ul>
  //         <li>Puissance : 5 kW</li>
  //         <li>Hybride (solaire + réseau + batteries)</li>
  //         <li>Prix : 1 500 000 - 2 200 000 FCFA</li>
  //       </ul>

  //       <h4>3. Batteries lithium (optionnel)</h4>
  //       <ul>
  //         <li>Capacité : 10 kWh (2 batteries 5kWh)</li>
  //         <li>Autonomie : 12-15 heures</li>
  //         <li>Durée vie : 10 ans</li>
  //         <li>Prix : 3 000 000 - 4 500 000 FCFA</li>
  //       </ul>

  //       <h4>4. Structure et câblage</h4>
  //       <ul>
  //         <li>Supports aluminium inclinaison 15°</li>
  //         <li>Câbles solaires 6mm²</li>
  //         <li>Protections AC et DC</li>
  //         <li>Prix : 400 000 - 600 000 FCFA</li>
  //       </ul>

  //       <h3>Budget total installation solaire 6kWc</h3>
  //       <h4>Système ON-GRID (sans batteries)</h4>
  //       <ul>
  //         <li>Panneaux : 2 880 000 FCFA</li>
  //         <li>Onduleur : 1 800 000 FCFA</li>
  //         <li>Structure + câblage : 500 000 FCFA</li>
  //         <li>Installation : 600 000 FCFA</li>
  //         <li><strong>Total : 5 780 000 FCFA</strong></li>
  //       </ul>

  //       <h4>Système HYBRIDE (avec batteries)</h4>
  //       <ul>
  //         <li>Total ON-GRID : 5 780 000 FCFA</li>
  //         <li>Batteries 10kWh : 3 500 000 FCFA</li>
  //         <li><strong>Total : 9 280 000 FCFA</strong></li>
  //       </ul>

  //       <h3>Rentabilité</h3>
  //       <ul>
  //         <li><strong>Économie mensuelle</strong> : 80 000 - 120 000 FCFA (si tarif SENELEC 100 FCFA/kWh)</li>
  //         <li><strong>Retour sur investissement</strong> : 5-7 ans (ON-GRID), 8-10 ans (HYBRIDE)</li>
  //         <li><strong>Durée de vie</strong> : 25-30 ans</li>
  //       </ul>

  //       <h3>Entretien</h3>
  //       <ul>
  //         <li>Nettoyage panneaux : 2 fois/an (20 000 FCFA)</li>
  //         <li>Vérification annuelle : 50 000 FCFA</li>
  //         <li>Remplacement onduleur : tous les 10-12 ans</li>
  //       </ul>

  //       <h2>Conseils d'expert</h2>
  //       <h3>Sécurité</h3>
  //       <ul>
  //         <li>Combinez vidéo + alarme pour protection optimale</li>
  //         <li>Privilégiez marques reconnues (Hikvision, Dahua, DSC)</li>
  //         <li>Maintenance annuelle indispensable</li>
  //       </ul>

  //       <h3>Solaire</h3>
  //       <ul>
  //         <li>Commencez par ON-GRID, ajoutez batteries plus tard</li>
  //         <li>Vérifiez garanties et certifications installateur</li>
  //         <li>Comparez 3 devis minimum</li>
  //       </ul>

  //       <h2>Conclusion</h2>
  //       <p>Investir dans la sécurité et l'énergie solaire améliore votre qualité de vie et valorise votre bien immobilier. Faites appel à des professionnels certifiés pour une installation durable et performante.</p>
  //     `,
  //     image: 'assets/images/blog/guides-complets.jpg',
  //     category: 'tips',
  //     date: '2024-12-01',
  //     author: 'Équipe Loneed',
  //     readTime: '15 min',
  //     tags: ['guide', 'sécurité', 'solaire', 'surveillance', 'conseils']
  //   }
  // ];
    allPosts: BlogPost[] = [
      {
        id: 1,
        title: 'Comment sécuriser une villa moderne',
        excerpt: 'Découvrez les meilleures pratiques et technologies pour protéger efficacement votre villa moderne contre les intrusions et les dangers.',
        content: `
          <h2>Introduction</h2>
          <p>La sécurité d'une villa moderne nécessite une approche globale combinant technologies de pointe et bonnes pratiques. Dans cet article, nous explorerons les solutions essentielles pour protéger votre propriété.</p>
  
          <h2>1. Systèmes de vidéosurveillance intelligents</h2>
          <p>Les caméras IP haute définition avec intelligence artificielle sont désormais la norme. Elles permettent :</p>
          <ul>
            <li>Détection de mouvement avancée</li>
            <li>Reconnaissance faciale</li>
            <li>Alertes en temps réel sur smartphone</li>
            <li>Vision nocturne infrarouge</li>
            <li>Stockage cloud sécurisé</li>
          </ul>
  
          <h2>2. Contrôle d'accès biométrique</h2>
          <p>Les systèmes d'accès par empreinte digitale ou reconnaissance faciale offrent un niveau de sécurité supérieur aux clés traditionnelles. Ils permettent également de tracer tous les accès à votre propriété.</p>
  
          <h2>3. Alarme connectée intelligente</h2>
          <p>Les alarmes modernes s'intègrent parfaitement avec votre smartphone et votre système domotique. Fonctionnalités clés :</p>
          <ul>
            <li>Détecteurs de mouvement volumétriques</li>
            <li>Capteurs d'ouverture sur portes et fenêtres</li>
            <li>Sirène intérieure et extérieure</li>
            <li>Liaison directe avec société de télésurveillance</li>
          </ul>
  
          <h2>4. Éclairage automatique dissuasif</h2>
          <p>Un éclairage bien pensé décourage les intrusions. Installez des projecteurs à détection de mouvement aux points stratégiques et programmez des scénarios d'éclairage pour simuler une présence.</p>
  
          <h2>5. Sécurisation du périmètre</h2>
          <p>Ne négligez pas la sécurité physique : portails automatiques, clôtures renforcées, barrières infrarouges périmétriques sont autant de premières lignes de défense efficaces.</p>
  
          <h2>Conclusion</h2>
          <p>Une villa vraiment sécurisée combine plusieurs couches de protection. L'investissement dans des systèmes de sécurité modernes est rapidement rentabilisé par la tranquillité d'esprit et la protection de vos biens.</p>
        `,
        image: 'https://blog.materielelectrique.com/wp-content/uploads/2021/07/securite-maison-piece-1200x900.jpg',
        category: 'security',
        date: '2024-12-10',
        author: 'Jean Dupont',
        readTime: '8 min',
        tags: ['sécurité', 'villa', 'caméra', 'alarme', 'surveillance']
      },
      {
        id: 2,
        title: 'Domotique : ce qu\'il faut absolument automatiser',
        excerpt: 'Transformez votre maison en habitat intelligent. Découvrez les automatisations essentielles pour améliorer votre confort quotidien.',
        content: `
          <h2>La révolution de la maison intelligente</h2>
          <p>La domotique n'est plus un luxe mais devient une nécessité pour optimiser confort, sécurité et économies d'énergie. Voici ce qu'il faut absolument automatiser.</p>
  
          <h2>1. L'éclairage intelligent</h2>
          <p>L'éclairage représente 30% de la consommation électrique. Automatisez-le pour :</p>
          <ul>
            <li>Régler l'intensité selon l'heure et l'activité</li>
            <li>Créer des ambiances personnalisées</li>
            <li>Extinction automatique des lumières oubliées</li>
            <li>Simulation de présence en vacances</li>
            <li>Contrôle vocal avec Alexa ou Google Home</li>
          </ul>
  
          <h2>2. Le chauffage et la climatisation</h2>
          <p>Un thermostat intelligent peut réduire votre facture énergétique de 20 à 30%. Fonctionnalités essentielles :</p>
          <ul>
            <li>Programmation hebdomadaire automatique</li>
            <li>Ajustement selon la présence détectée</li>
            <li>Géolocalisation pour chauffer avant votre retour</li>
            <li>Analyse de consommation et recommandations</li>
          </ul>
  
          <h2>3. Volets et stores motorisés</h2>
          <p>Automatisez l'ouverture et fermeture selon :</p>
          <ul>
            <li>L'heure du lever et coucher du soleil</li>
            <li>La température extérieure</li>
            <li>Votre présence ou absence</li>
            <li>Des scénarios personnalisés (réveil, cinéma, etc.)</li>
          </ul>
  
          <h2>4. Sécurité intégrée</h2>
          <p>Connectez alarme, caméras, détecteurs et serrures pour un contrôle centralisé depuis votre smartphone.</p>
  
          <h2>5. Arrosage automatique du jardin</h2>
          <p>Économisez l'eau avec un système intelligent qui adapte l'arrosage à la météo et à l'humidité du sol.</p>
  
          <h2>6. Gestion de l'énergie solaire</h2>
          <p>Optimisez l'autoconsommation en programmant les appareils énergivores pendant les heures de production solaire.</p>
  
          <h2>Conclusion</h2>
          <p>Commencez par automatiser l'éclairage et le chauffage pour des économies immédiates, puis étendez progressivement votre installation domotique selon vos besoins.</p>
        `,
        image: 'https://forumdomotique.com/uploads/monthly_2025_07/domotique-definition.webp.069113f45890b3e99facdb98384f1e82.webp',
        category: 'domotique',
        date: '2024-12-08',
        author: 'Marie Diallo',
        readTime: '7 min',
        tags: ['domotique', 'automatisation', 'smart home', 'confort', 'économie']
      },
      {
        id: 3,
        title: 'Comment dimensionner une installation solaire',
        excerpt: 'Guide complet pour calculer précisément vos besoins en panneaux solaires et optimiser votre investissement dans l\'énergie renouvelable.',
        content: `
          <h2>Introduction au dimensionnement solaire</h2>
          <p>Bien dimensionner son installation solaire est crucial pour maximiser sa rentabilité. Un système sous-dimensionné ne couvrira pas vos besoins, un système surdimensionné représente un investissement inutile.</p>
  
          <h2>Étape 1 : Analyser votre consommation électrique</h2>
          <p>Commencez par étudier vos factures des 12 derniers mois pour déterminer :</p>
          <ul>
            <li>Votre consommation annuelle totale (kWh/an)</li>
            <li>Votre consommation mensuelle moyenne</li>
            <li>Les pics de consommation saisonniers</li>
            <li>Vos habitudes de consommation (jour/nuit)</li>
          </ul>
  
          <h2>Étape 2 : Évaluer votre potentiel solaire</h2>
          <p>Plusieurs facteurs influencent la production :</p>
          <ul>
            <li><strong>Ensoleillement</strong> : Au Sénégal, 5 à 6 kWh/m²/jour</li>
            <li><strong>Orientation</strong> : Idéalement plein Sud</li>
            <li><strong>Inclinaison</strong> : Entre 10° et 15° à Dakar</li>
            <li><strong>Ombrage</strong> : À éviter absolument</li>
            <li><strong>Surface disponible</strong> : Toiture ou terrain</li>
          </ul>
  
          <h2>Étape 3 : Calculer la puissance nécessaire</h2>
          <p>Formule de base :</p>
          <p><strong>Puissance (kWc) = Consommation annuelle (kWh) / (Ensoleillement × 365 × Rendement)</strong></p>
          <p>Exemple concret :</p>
          <ul>
            <li>Consommation : 6000 kWh/an</li>
            <li>Ensoleillement : 5,5 kWh/m²/jour</li>
            <li>Rendement système : 0,75</li>
            <li>Calcul : 6000 / (5,5 × 365 × 0,75) = <strong>4 kWc</strong></li>
          </ul>
  
          <h2>Étape 4 : Choisir le type de système</h2>
          <h3>Système raccordé au réseau (On-Grid)</h3>
          <ul>
            <li>Pas de batterie nécessaire</li>
            <li>Revente du surplus possible</li>
            <li>Investissement moindre</li>
          </ul>
  
          <h3>Système autonome (Off-Grid)</h3>
          <ul>
            <li>Batteries indispensables</li>
            <li>Indépendance totale</li>
            <li>Coût plus élevé</li>
          </ul>
  
          <h3>Système hybride</h3>
          <ul>
            <li>Batteries + raccordement réseau</li>
            <li>Sécurité en cas de coupure</li>
            <li>Solution optimale mais coûteuse</li>
          </ul>
  
          <h2>Étape 5 : Dimensionner les batteries (si nécessaire)</h2>
          <p>Capacité batterie (kWh) = Consommation journalière × Nombre de jours d'autonomie / Profondeur de décharge</p>
          <p>Pour 2 jours d'autonomie avec 20 kWh/jour :</p>
          <p>Capacité = 20 × 2 / 0,5 = <strong>80 kWh</strong></p>
  
          <h2>Budget indicatif (Sénégal - 2024)</h2>
          <table>
            <tr><th>Puissance</th><th>Prix moyen</th></tr>
            <tr><td>3 kWc</td><td>2 500 000 - 3 500 000 FCFA</td></tr>
            <tr><td>5 kWc</td><td>4 000 000 - 5 500 000 FCFA</td></tr>
            <tr><td>10 kWc</td><td>7 500 000 - 10 000 000 FCFA</td></tr>
          </table>
  
          <h2>Conclusion</h2>
          <p>Un dimensionnement précis nécessite une étude personnalisée. Faites appel à un professionnel certifié pour une analyse détaillée et un devis adapté à vos besoins réels.</p>
        `,
        image: 'https://www.domotique123.fr/wp-content/uploads/2025/01/domotique-et-poulailler-solaire-ce-que-vous-navez-_1_0_41194.webp',
        category: 'solar',
        date: '2024-12-05',
        author: 'Amadou Sow',
        readTime: '10 min',
        tags: ['solaire', 'dimensionnement', 'calcul', 'panneaux', 'énergie']
      },
      {
        id: 4,
        title: 'Finitions haut de gamme : les tendances 2025',
        excerpt: 'Découvrez les matériaux, couleurs et finitions premium qui définissent le luxe résidentiel en 2025.',
        content: `
          <h2>Le luxe contemporain en 2025</h2>
          <p>Les finitions haut de gamme évoluent vers plus de naturel, de durabilité et de technologie intégrée. Voici les tendances qui marquent 2025.</p>
  
          <h2>1. Matériaux naturels et nobles</h2>
          <h3>Pierre naturelle</h3>
          <ul>
            <li>Marbre de Carrare pour salles de bains</li>
            <li>Travertin pour sols extérieurs</li>
            <li>Granit pour plans de travail cuisine</li>
            <li>Finitions brossées et adoucies</li>
          </ul>
  
          <h3>Bois massif</h3>
          <ul>
            <li>Chêne massif pour parquets</li>
            <li>Teck pour terrasses et salles d'eau</li>
            <li>Noyer pour mobilier intégré</li>
            <li>Essence locale : Iroko, Tali</li>
          </ul>
  
          <h2>2. Palette de couleurs 2025</h2>
          <h3>Couleurs dominantes</h3>
          <ul>
            <li><strong>Tons terreux</strong> : Terracotta, ocre, beige</li>
            <li><strong>Verts naturels</strong> : Sauge, olive, kaki</li>
            <li><strong>Neutres chauds</strong> : Grège, taupe, lin</li>
            <li><strong>Bleus profonds</strong> : Marine, pétrole</li>
          </ul>
  
          <h3>Finitions</h3>
          <ul>
            <li>Murs : Enduits à la chaux, tadelakt</li>
            <li>Peintures : Finitions mates veloutées</li>
            <li>Métaux : Laiton brossé, bronze noir mat</li>
          </ul>
  
          <h2>3. Salles de bains de luxe</h2>
          <h3>Équipements premium</h3>
          <ul>
            <li>Douche à l'italienne XXL avec pluie tropicale</li>
            <li>Baignoire îlot design en solid surface</li>
            <li>Robinetterie thermostatique encastrée</li>
            <li>Vasques en pierre naturelle sculptée</li>
            <li>WC japonais suspendu avec bidet intégré</li>
          </ul>
  
          <h3>Revêtements</h3>
          <ul>
            <li>Grands formats 120x120 cm</li>
            <li>Effet marbre veiné ou terrazzo</li>
            <li>Mosaïque artisanale pour niches</li>
          </ul>
  
          <h2>4. Cuisine haut de gamme</h2>
          <h3>Plans de travail</h3>
          <ul>
            <li>Quartz compact antibactérien</li>
            <li>Granit brossé 3 cm d'épaisseur</li>
            <li>Céramique effet marbre</li>
            <li>Inox brossé pour zone cuisson</li>
          </ul>
  
          <h3>Façades et rangements</h3>
          <ul>
            <li>Laque mate au toucher velours</li>
            <li>Placage bois naturel</li>
            <li>Système push-to-open sans poignées</li>
            <li>Îlot central avec coin repas intégré</li>
          </ul>
  
          <h2>5. Sols premium</h2>
          <h3>Intérieur</h3>
          <ul>
            <li>Parquet massif à l'anglaise</li>
            <li>Grands carreaux marbre 100x100</li>
            <li>Résine époxy effet béton ciré</li>
          </ul>
  
          <h3>Extérieur</h3>
          <ul>
            <li>Carrelage grès cérame 20mm antidérapant</li>
            <li>Bois composite effet teck</li>
            <li>Pierre reconstituée</li>
          </ul>
  
          <h2>6. Éclairage architectural</h2>
          <ul>
            <li>LED intégré indirect (corniches, plinthes)</li>
            <li>Spots encastrés orientables</li>
            <li>Suspensions design statement</li>
            <li>Variateurs et scénarios domotiques</li>
          </ul>
  
          <h2>7. Faux-plafonds et moulures</h2>
          <ul>
            <li>Caissons lumineux</li>
            <li>Corniches XXL pour éclairage indirect</li>
            <li>Staff et plâtre sculpté pour pièces nobles</li>
            <li>Lambris acoustiques design</li>
          </ul>
  
          <h2>Budget indicatif finitions premium</h2>
          <p>Pour une villa de 200m² :</p>
          <ul>
            <li>Sols marbre : 15 000 - 25 000 FCFA/m²</li>
            <li>Parquet massif : 20 000 - 40 000 FCFA/m²</li>
            <li>Cuisine équipée : 8 000 000 - 15 000 000 FCFA</li>
            <li>Salle de bain complète : 3 000 000 - 6 000 000 FCFA</li>
          </ul>
  
          <h2>Conclusion</h2>
          <p>Les finitions haut de gamme 2025 allient esthétique intemporelle, matériaux durables et technologies discrètement intégrées. Investir dans la qualité, c'est investir dans la durabilité et la valeur de votre bien.</p>
        `,
        image: 'https://www.slcpitance.com/wp-content/uploads/2021/05/domotique.jpg',
        category: 'finitions',
        date: '2024-12-03',
        author: 'Fatou Ndiaye',
        readTime: '9 min',
        tags: ['finitions', 'luxe', 'design', 'tendances', 'matériaux']
      },
      {
        id: 5,
        title: 'Guides : vidéosurveillance, alarmes, énergie solaire',
        excerpt: 'Guides pratiques complets pour choisir et installer vos systèmes de sécurité et solutions énergétiques.',
        content: `
          <h2>Guide complet : Sécurité et Énergie</h2>
          <p>Ce guide regroupe l'essentiel à savoir sur la vidéosurveillance, les alarmes et l'énergie solaire pour votre habitat.</p>
  
          <h2>PARTIE 1 : VIDÉOSURVEILLANCE</h2>
  
          <h3>Types de caméras</h3>
          <h4>1. Caméras IP (recommandées)</h4>
          <ul>
            <li><strong>Résolution</strong> : 2MP (1080p) minimum, idéalement 4MP ou 8MP</li>
            <li><strong>Vision nocturne</strong> : IR jusqu'à 30m minimum</li>
            <li><strong>Prix</strong> : 80 000 - 250 000 FCFA/caméra</li>
          </ul>
  
          <h4>2. Caméras analogiques HD</h4>
          <ul>
            <li>Moins chères : 40 000 - 100 000 FCFA</li>
            <li>Qualité inférieure</li>
            <li>Bonnes pour petits budgets</li>
          </ul>
  
          <h3>Nombre de caméras nécessaires</h3>
          <ul>
            <li><strong>Villa standard</strong> : 4-6 caméras (entrée, portail, jardin, angles morts)</li>
            <li><strong>Grande propriété</strong> : 8-12 caméras</li>
            <li><strong>Appartement</strong> : 2-3 caméras (entrée, salon, balcon)</li>
          </ul>
  
          <h3>Stockage des vidéos</h3>
          <ul>
            <li><strong>DVR/NVR local</strong> : 500 Go à 4 To selon durée conservation</li>
            <li><strong>Cloud</strong> : Abonnement 5 000 - 15 000 FCFA/mois</li>
            <li><strong>Durée conservation recommandée</strong> : 30 jours minimum</li>
          </ul>
  
          <h3>Installation</h3>
          <ul>
            <li>Câblage : Cat 6 pour IP, coaxial pour analogique</li>
            <li>Hauteur : 2,5m à 3,5m pour éviter vandalisme</li>
            <li>Alimentation : POE pour caméras IP (idéal)</li>
          </ul>
  
          <h3>Budget vidéosurveillance complète</h3>
          <ul>
            <li><strong>Kit 4 caméras IP + NVR</strong> : 400 000 - 800 000 FCFA</li>
            <li><strong>Installation pro</strong> : 150 000 - 300 000 FCFA</li>
            <li><strong>Total</strong> : 550 000 - 1 100 000 FCFA</li>
          </ul>
  
          <h2>PARTIE 2 : SYSTÈMES D'ALARME</h2>
  
          <h3>Composants essentiels</h3>
          <h4>1. Centrale d'alarme</h4>
          <ul>
            <li>GSM intégré pour alertes SMS</li>
            <li>8 à 32 zones selon taille habitat</li>
            <li>Batterie secours 12V 7Ah</li>
            <li>Prix : 80 000 - 250 000 FCFA</li>
          </ul>
  
          <h4>2. Détecteurs</h4>
          <ul>
            <li><strong>PIR (mouvement volumétrique)</strong> : 15 000 - 35 000 FCFA/unité</li>
            <li><strong>Contacts portes/fenêtres</strong> : 5 000 - 15 000 FCFA/unité</li>
            <li><strong>Détecteurs bris de vitre</strong> : 25 000 - 50 000 FCFA</li>
            <li><strong>Barrières infrarouges extérieures</strong> : 60 000 - 150 000 FCFA</li>
          </ul>
  
          <h4>3. Sirènes</h4>
          <ul>
            <li><strong>Intérieure</strong> : 30 000 - 60 000 FCFA</li>
            <li><strong>Extérieure avec flash</strong> : 50 000 - 100 000 FCFA</li>
          </ul>
  
          <h3>Télésurveillance</h3>
          <ul>
            <li>Abonnement : 15 000 - 35 000 FCFA/mois</li>
            <li>Intervention agent sécurité en cas d'alerte</li>
            <li>Recommandé pour résidences secondaires</li>
          </ul>
  
          <h3>Budget alarme complète villa</h3>
          <ul>
            <li>Centrale GSM : 150 000 FCFA</li>
            <li>6 détecteurs PIR : 150 000 FCFA</li>
            <li>8 contacts : 80 000 FCFA</li>
            <li>2 sirènes : 120 000 FCFA</li>
            <li>Installation : 100 000 FCFA</li>
            <li><strong>Total : 600 000 - 800 000 FCFA</strong></li>
          </ul>
  
          <h2>PARTIE 3 : ÉNERGIE SOLAIRE</h2>
  
          <h3>Système solaire résidentiel type</h3>
          <h4>Pour villa consommant 20 kWh/jour</h4>
  
          <h3>Composants</h3>
          <h4>1. Panneaux solaires</h4>
          <ul>
            <li>16 panneaux × 400Wc = 6,4 kWc</li>
            <li>Monocristallins rendement >20%</li>
            <li>Garantie 25 ans</li>
            <li>Prix : 180 000 FCFA/panneau × 16 = 2 880 000 FCFA</li>
          </ul>
  
          <h4>2. Onduleur hybride</h4>
          <ul>
            <li>Puissance : 5 kW</li>
            <li>Hybride (solaire + réseau + batteries)</li>
            <li>Prix : 1 500 000 - 2 200 000 FCFA</li>
          </ul>
  
          <h4>3. Batteries lithium (optionnel)</h4>
          <ul>
            <li>Capacité : 10 kWh (2 batteries 5kWh)</li>
            <li>Autonomie : 12-15 heures</li>
            <li>Durée vie : 10 ans</li>
            <li>Prix : 3 000 000 - 4 500 000 FCFA</li>
          </ul>
  
          <h4>4. Structure et câblage</h4>
          <ul>
            <li>Supports aluminium inclinaison 15°</li>
            <li>Câbles solaires 6mm²</li>
            <li>Protections AC et DC</li>
            <li>Prix : 400 000 - 600 000 FCFA</li>
          </ul>
  
          <h3>Budget total installation solaire 6kWc</h3>
          <h4>Système ON-GRID (sans batteries)</h4>
          <ul>
            <li>Panneaux : 2 880 000 FCFA</li>
            <li>Onduleur : 1 800 000 FCFA</li>
            <li>Structure + câblage : 500 000 FCFA</li>
            <li>Installation : 600 000 FCFA</li>
            <li><strong>Total : 5 780 000 FCFA</strong></li>
          </ul>
  
          <h4>Système HYBRIDE (avec batteries)</h4>
          <ul>
            <li>Total ON-GRID : 5 780 000 FCFA</li>
            <li>Batteries 10kWh : 3 500 000 FCFA</li>
            <li><strong>Total : 9 280 000 FCFA</strong></li>
          </ul>
  
          <h3>Rentabilité</h3>
          <ul>
            <li><strong>Économie mensuelle</strong> : 80 000 - 120 000 FCFA (si tarif SENELEC 100 FCFA/kWh)</li>
            <li><strong>Retour sur investissement</strong> : 5-7 ans (ON-GRID), 8-10 ans (HYBRIDE)</li>
            <li><strong>Durée de vie</strong> : 25-30 ans</li>
          </ul>
  
          <h3>Entretien</h3>
          <ul>
            <li>Nettoyage panneaux : 2 fois/an (20 000 FCFA)</li>
            <li>Vérification annuelle : 50 000 FCFA</li>
            <li>Remplacement onduleur : tous les 10-12 ans</li>
          </ul>
  
          <h2>Conseils d'expert</h2>
          <h3>Sécurité</h3>
          <ul>
            <li>Combinez vidéo + alarme pour protection optimale</li>
            <li>Privilégiez marques reconnues (Hikvision, Dahua, DSC)</li>
            <li>Maintenance annuelle indispensable</li>
          </ul>
  
          <h3>Solaire</h3>
          <ul>
            <li>Commencez par ON-GRID, ajoutez batteries plus tard</li>
            <li>Vérifiez garanties et certifications installateur</li>
            <li>Comparez 3 devis minimum</li>
          </ul>
  
          <h2>Conclusion</h2>
          <p>Investir dans la sécurité et l'énergie solaire améliore votre qualité de vie et valorise votre bien immobilier. Faites appel à des professionnels certifiés pour une installation durable et performante.</p>
        `,
        image: 'https://www.appartement.org/wp-content/uploads/2025/10/shutterstock_1901663263-min.jpg',
        category: 'tips',
        date: '2024-12-01',
        author: 'Équipe Loneed',
        readTime: '15 min',
        tags: ['guide', 'sécurité', 'solaire', 'surveillance', 'conseils']
      }
    ];

  categories = [
    { value: 'security', label: 'Sécurité' },
    { value: 'domotique', label: 'Domotique' },
    { value: 'solar', label: 'Solaire' },
    { value: 'finitions', label: 'Finitions' },
    { value: 'tips', label: 'Conseils' }
  ];

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const postId = Number(params['id']);
      this.loadPost(postId);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPost(id: number): void {
    // Chercher l'article par ID
    this.post = this.allPosts.find(p => p.id === id) || null;
    
    if (this.post) {
      // Charger les articles similaires (même catégorie, max 3)
      this.relatedPosts = this.allPosts
        .filter(p => p.category === this.post!.category && p.id !== this.post!.id)
        .slice(0, 3);

      // Si moins de 3 articles similaires, compléter avec d'autres articles
      if (this.relatedPosts.length < 3) {
        const remaining = this.allPosts
          .filter(p => p.id !== this.post!.id && !this.relatedPosts.includes(p))
          .slice(0, 3 - this.relatedPosts.length);
        this.relatedPosts = [...this.relatedPosts, ...remaining];
      }

      // Scroll vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getCategoryLabel(categoryValue: string): string {
    const category = this.categories.find(c => c.value === categoryValue);
    return category ? category.label : categoryValue;
  }

  // Pour charger depuis l'API
  // getPostFromApi(id: number): void {
  //   this.loadData = true;
  //   this.baseService
  //     .getOne('blogs', id)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (data: any) => {
  //         this.loadData = false;
  //         this.post = data;
  //         this.loadRelatedPosts(data.category, data.id);
  //       },
  //       error: (error) => {
  //         this.loadData = false;
  //         this.snackbar.openSnackBar('Erreur lors du chargement de l\'article', 'error');
  //         console.error('Erreur:', error);
  //       }
  //     });
  // }

  loadRelatedPosts(category: string, currentId: number): void {
    // Logique pour charger les articles similaires depuis l'API
  }
}