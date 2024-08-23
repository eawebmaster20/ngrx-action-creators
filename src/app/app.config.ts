import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore, provideState } from '@ngrx/store';
import { CounterEffects } from './state/counter.effects';
import { counterReducer } from './state/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({
        name: 'conter',
        reducer: counterReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideEffects(CounterEffects), provideAnimationsAsync('noop')
]
};
