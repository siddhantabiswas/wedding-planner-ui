import { Component, computed, signal } from '@angular/core';
import { PageHeader } from '../page-header/page-header';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import portfolio from './portfolio.json';

interface UnsplashPhoto {
  id: string;
  url: string;
  alt: string;
  author: string;
  authorAvatar: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [PageHeader, ButtonModule, RippleModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  // Update your photos signal with varying explicit dimensions to force layout randomness:
  photos = signal<UnsplashPhoto[]>(portfolio);

  sortedPhotos = computed(() => {
    // [...this.photos()] creates a shallow copy to prevent mutating the original signal array
    return [...this.photos()].sort((a, b) => Number(a.id) - Number(b.id));
  });

  downloadImage(url: string) {
    window.open(url, '_blank');
  }
}
