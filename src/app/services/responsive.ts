import { afterNextRender, inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root', // Makes it globally available as a singleton
})
export class ResponsiveService {
  private breakpointObserver = inject(BreakpointObserver);

  // Read-only signals exposed to components
  readonly isXS = signal<boolean>(false);
  readonly isSM = signal<boolean>(false);
  readonly isMD = signal<boolean>(false);
  readonly isLG = signal<boolean>(false); // Default to desktop safely
  readonly isXL = signal<boolean>(true);

  // Custom multi-screen state helper string ('mobile' | 'tablet' | 'desktop')
  readonly currentScreen = signal<'XS' | 'SM' | 'MD' | 'LG' | 'XL'>('XL');

  constructor() {
    // safe lifecycle guard for SSR environments
    afterNextRender(() => {
      this.initBreakpointListeners();
    });
  }

  private initBreakpointListeners(): void {
    const rootStyles = getComputedStyle(document.documentElement);

    // Extract values and strip any trailing white spaces
    const xsMin = rootStyles.getPropertyValue('--xs-min').trim();
    const xsMax = rootStyles.getPropertyValue('--xs-max').trim();
    const smMin = rootStyles.getPropertyValue('--sm-min').trim();
    const smMax = rootStyles.getPropertyValue('--sm-max').trim();
    const mdMin = rootStyles.getPropertyValue('--md-min').trim();
    const mdMax = rootStyles.getPropertyValue('--md-max').trim();
    const lgMin = rootStyles.getPropertyValue('--lg-min').trim();
    const lgMax = rootStyles.getPropertyValue('--lg-max').trim();
    const xlMin = rootStyles.getPropertyValue('--xl-min').trim();

    // Re-build valid browser query syntaxes
    const xsBreakpoint = `(min-width: ${xsMin}) and (max-width: ${xsMax})`;
    const smBreakpoint = `(min-width: ${smMin}) and (max-width: ${smMax})`;
    const mdBreakpoint = `(min-width: ${mdMin}) and (max-width: ${mdMax})`;
    const lgBreakpoint = `(min-width: ${lgMin}) and (max-width: ${lgMax})`;
    const xlBreakpoint = `(min-width: ${xlMin})`;

    this.breakpointObserver
      .observe([xsBreakpoint, smBreakpoint, mdBreakpoint, lgBreakpoint, xlBreakpoint])
      .subscribe((result) => {
        // Update individual booleans based on query matches
        this.isXS.set(result.breakpoints[xsBreakpoint]);
        this.isSM.set(result.breakpoints[smBreakpoint]);
        this.isMD.set(result.breakpoints[mdBreakpoint]);
        this.isLG.set(result.breakpoints[lgBreakpoint]);
        this.isXL.set(result.breakpoints[xlBreakpoint]);

        // Update the convenient string state tracker
        // Evaluate matches using a switch case pattern
        switch (true) {
          case result.breakpoints[xsBreakpoint]:
            this.currentScreen.set('XS');
            break;

          case result.breakpoints[smBreakpoint]:
            this.currentScreen.set('SM');
            break;

          case result.breakpoints[mdBreakpoint]:
            this.currentScreen.set('MD');
            break;

          case result.breakpoints[lgBreakpoint]:
            this.currentScreen.set('LG');
            break;

          case result.breakpoints[xlBreakpoint]:
            this.currentScreen.set('XL');
            break;
        }
      });
  }
}
