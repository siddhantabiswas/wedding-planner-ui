import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  readonly appFirstName = signal('Wedding');
  readonly appLastName = signal('Planner');
  readonly appFullName = computed(() => `${this.appFirstName()} ${this.appLastName()}`);
}
