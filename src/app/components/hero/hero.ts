import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly responsive = inject(ResponsiveService);
}
