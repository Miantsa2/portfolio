import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of, from } from 'rxjs';

export class SafeTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (typeof window === 'undefined') {
      return of({}); 
    }

    return from(
        fetch(`/portfolio/assets/i18n/${lang}.json`)
            .then(res => res.json())
            .catch(() => ({}))
        );
  }
}