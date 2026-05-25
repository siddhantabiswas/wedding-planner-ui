import { Hero } from "../hero/hero";
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Item, Carousel } from "../carousel/carousel";
import { StepperModule } from 'primeng/stepper';
import { DividerModule } from 'primeng/divider';
import { ResponsiveService } from "../../services/responsive";
import { Services } from "../services/services";

interface City { name: string; code: string; }
interface WeddingService { name: string; value: string; }

@Component({
  selector: 'app-home',
  imports: [Hero, FormsModule, InputGroupModule, InputGroupAddonModule, SelectModule, ButtonModule, CardModule, Carousel, StepperModule, DividerModule, Services],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly responsive = inject(ResponsiveService);
  
  cities: City[] = [];
  services: WeddingService[] = [];

  selectedCity: City | null = null;
  selectedService: WeddingService | null = null;

  items: Item[] = [];

  ngOnInit() {
    this.cities = [
      { name: 'Mumbai', code: 'BOM' },
      { name: 'Delhi', code: 'DEL' },
      { name: 'Bengaluru', code: 'BLR' },
      { name: 'Jaipur', code: 'JAI' }
    ];

    this.services = [
      { name: 'Venues & Mandaps', value: 'venue' },
      { name: 'Catering / Food', value: 'catering' },
      { name: 'Photography & Cinema', value: 'photography' },
      { name: 'Bridal Makeup & Henna', value: 'makeup' }
    ];

    this.items = [
      {
        title: "Photography",
        imageUrl: "images/photography.webp",
        description: ""
      },
      {
        title: "Catering",
        imageUrl: "images/catering.webp",
        description: ""
      },
      {
        title: "Makeup",
        imageUrl: "images/makeup.webp",
        description: ""
      },
      {
        title: "Mehendi",
        imageUrl: "images/mehendi.webp",
        description: ""
      },
      {
        title: "Invitation",
        imageUrl: "images/invitation.webp",
        description: ""
      },
      {
        title: "Photography",
        imageUrl: "images/photography.webp",
        description: ""
      },
      {
        title: "Catering",
        imageUrl: "images/catering.webp",
        description: ""
      },
    ]
  }

  onSubmit() {
    alert('Searching for:' + this.selectedService?.value + ' in ' + this.selectedCity?.name);
  }
}
