import { Component, OnInit, inject, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ResponsiveService } from '../../services/responsive';

export interface Item {
  title: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit {
  protected readonly responsive = inject(ResponsiveService);
  
  items = input<Item[]>([]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 1,
      }
    ];
  }

  // 1. Keep track of the current page index (binds to carousel)
  currentPage = 0;

  // 2. Helper method to determine if a card index is currently in the center slot
  isCenterCard(item: any): boolean {
    const itemsArray = this.items();
    if (!itemsArray || itemsArray.length === 0) return false;

    // With 3 items visible, the center item is always exactly 1 slot ahead of the current page index
    const centerIndex = (this.currentPage + 1) % itemsArray.length;

    // Compare by unique item property (or titles if unique) to guarantee accuracy
    return itemsArray[centerIndex] === item;
  }
}
