import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// 👇 Loader custom sans arguments
function customHttpLoader(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string) =>
      http.get<Record<string, any>>(`assets/i18n/${lang}.json`)
  } as TranslateLoader;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: customHttpLoader,
          deps: [HttpClient]
        }
      })
    )
  ]
};
