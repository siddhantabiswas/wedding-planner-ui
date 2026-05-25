import { Component } from '@angular/core';
import { BrandLogo } from "../brand-logo/brand-logo";

@Component({
  selector: 'app-footer',
  imports: [BrandLogo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
