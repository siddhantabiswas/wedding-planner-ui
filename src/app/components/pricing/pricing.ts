import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PageHeader } from "../page-header/page-header";

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, ButtonModule, PageHeader],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {}
