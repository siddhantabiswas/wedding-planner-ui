import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-service',
  imports: [ButtonModule, CardModule, RouterLink],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  cardTitle = input<string | null>(null);
  cardSubtitle = input<string | null>(null);
  description = input<string | null>(null);
  imageUrl = input<string | null>(null);
  serviceUrl  = input<string | null>(null);

  // Track whether the current card text is fully expanded
  isExpanded = signal<boolean>(false);

  // Set your character threshold limit
  private readonly textLimit = 100;

  // Check if the text actually requires a truncation block
  isLongText = computed(() => (this.description()?.length || 0) > this.textLimit);

  // Compute the visible text segment dynamically
  visibleDescription = computed(() => {
    const text = this.description() || '';
    if (!this.isLongText() || this.isExpanded()) {
      return text;
    }
    return `${text.slice(0, this.textLimit)}...`;
  });

  toggleExpand(): void {
    this.isExpanded.update((value) => !value);
  }
}
