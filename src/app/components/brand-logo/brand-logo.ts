import { Component, inject } from '@angular/core';
import { ConstantsService } from '../../services/constants';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-brand-logo',
  imports: [RouterLink],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.css',
})
export class BrandLogo {
  protected readonly constants = inject(ConstantsService);
}
