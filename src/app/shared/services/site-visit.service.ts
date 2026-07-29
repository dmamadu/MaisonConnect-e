import { Injectable } from '@angular/core';
import { RootService } from './root.service';

const VISITOR_ID_KEY = 'mc_visitor_id';
const TRACKED_THIS_SESSION_KEY = 'mc_visit_tracked';

@Injectable({
  providedIn: 'root'
})
export class SiteVisitService {

  constructor(private baseService: RootService) {}

  /**
   * Enregistre une visite unique par visiteur/jour. Un seul appel par onglet
   * (sessionStorage) : pas la peine de re-notifier le serveur à chaque
   * navigation interne, il dédoublonne de toute façon par visitor_id + jour.
   */
  trackVisit(path: string): void {
    if (sessionStorage.getItem(TRACKED_THIS_SESSION_KEY)) {
      return;
    }

    const visitorId = this.getOrCreateVisitorId();

    this.baseService.add('site-visits', { visitor_id: visitorId, path }).subscribe({
      next: () => sessionStorage.setItem(TRACKED_THIS_SESSION_KEY, '1'),
      error: () => {} // pas grave si le tracking échoue, ne doit jamais bloquer l'utilisateur
    });
  }

  private getOrCreateVisitorId(): string {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  }
}