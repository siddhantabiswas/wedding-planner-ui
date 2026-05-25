import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import primary from './themes/primary.json';
import surface from './themes/surface-light.json';

const WeddingTheme = definePreset(Aura, {
    semantic: {
        // 1. PRIMARY: Defining our brand colors (Maroon/Crimson)
        primary: primary,
        // 2. SURFACE: Swapping default grey backgrounds to warm stone tones
        surface: surface
    }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: WeddingTheme,
      },
    }),
  ],
};
