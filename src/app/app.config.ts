import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { InterceptoHttp } from './interceptor/interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScrollwindowService } from './service/scrollwindow.service';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_INITIALIZER } from '@angular/core';
import { I18nService } from './service/i18n.service';

export function i18nInitializerFactory(i18n: I18nService) {
  return () => i18n.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    importProvidersFrom(
      TranslateModule.forRoot()
    ),
    ...provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: i18nInitializerFactory,
      deps: [I18nService]
    },
    //{provide: HTTP_INTERCEPTORS, useClass: InterceptoHttp, multi: true}
    ScrollwindowService
  ]
};
