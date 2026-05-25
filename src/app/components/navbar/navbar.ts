import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { ConstantsService } from '../../services/constants';
import { ResponsiveService } from '../../services/responsive';
import { Router } from '@angular/router';
import { BrandLogo } from "../brand-logo/brand-logo";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MenubarModule, ButtonModule, BrandLogo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit  {
  private router = inject(Router);

  // Inject the global service
  protected readonly responsive = inject(ResponsiveService);

  menuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.menuItems = [
      { 
        label: 'Home', 
        icon: 'pi pi-home',
        routerLink: '/',
        command: () => this.router.navigate(['/'])
      },
      { 
        label: 'Services', 
        icon: 'pi pi-th-large',
        command: () => this.router.navigate(['/services']),
      },
      { 
        label: 'Portfolio', 
        icon: 'pi pi-images',
        routerLink: '/portfolio',
        command: () => this.router.navigate(['/portfolio'])
      },
      { 
        label: 'Pricing', 
        icon: 'pi pi-indian-rupee',
        command: () => this.router.navigate(['/pricing'])
      },
      { 
        label: 'Locations', 
        icon: 'pi pi-map-marker',
        routerLink: '/locations',
        command: () => this.router.navigate(['/locations'])
      },
    ];
  }

  smoothScroll(elementId: string): void {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}