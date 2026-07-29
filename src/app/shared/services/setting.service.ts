import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { RootService } from './root.service';

export type SettingValue = string | { [lang: string]: string } | null;
export type SettingsMap = { [key: string]: SettingValue };

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private baseService: RootService) {}

  // partagé entre tous les composants : un seul appel HTTP pour toute la page
  private settings$: Observable<SettingsMap> = this.baseService
    .all<SettingsMap>('settings')
    .pipe(
      map((data) => data ?? {}),
      catchError((error) => {
        console.error("Erreur lors du chargement des réglages :", error);
        return of({});
      }),
      shareReplay(1)
    );

  getSettings(): Observable<SettingsMap> {
    return this.settings$;
  }

  /** Lien WhatsApp prêt à l'emploi, avec fallback si non configuré. */
  getWhatsappLink(defaultNumber = '+221786722222'): Observable<string> {
    return this.settings$.pipe(
      map((settings) => `https://wa.me/${this.getText(settings, 'whatsapp_number') || defaultNumber}`)
    );
  }

  /** Email texte brut, avec fallback si non configuré. */
  getEmail(key: string, defaultEmail: string): Observable<string> {
    return this.settings$.pipe(
      map((settings) => this.getText(settings, key) || defaultEmail)
    );
  }

  /**
   * Résout la valeur d'un réglage texte simple (whatsapp, email...).
   * Retourne null si non configuré, pour laisser l'appelant garder son fallback par défaut.
   */
  getText(settings: SettingsMap, key: string): string | null {
    const raw = settings?.[key];
    return typeof raw === 'string' && raw.trim() !== '' ? raw : null;
  }

  /**
   * Résout la valeur d'un réglage traduisible (hero_title, cta_title...) pour la langue donnée.
   * Retourne null si non configuré pour cette langue, pour laisser l'appelant garder son fallback par défaut.
   */
  getTranslatable(settings: SettingsMap, key: string, lang: string): string | null {
    const raw = settings?.[key];
    if (!raw || typeof raw === 'string') return null;
    const value = raw[lang];
    return typeof value === 'string' && value.trim() !== '' ? value : null;
  }
}
