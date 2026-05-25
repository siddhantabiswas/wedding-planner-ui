import { Component, input, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { PageHeader } from "../page-header/page-header";

interface MatrimonyService {
  title: string;
  subtitle: string;
  description: string;
  imageUrl:string;
  serviceUrl:string;
}

@Component({
  selector: 'app-services',
  imports: [Service, PageHeader],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  isHome = input<boolean>(false);
  
  services: MatrimonyService[] | undefined;

  ngOnInit(): void {
    this.services = [
      {
        title: "Photography",
        subtitle: "Lorem ipsum",
        imageUrl:"images/photography.webp",
        serviceUrl:"/pricing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

      },
      {
        title: "Catering",
        subtitle: "Lorem ipsum",
        imageUrl:"images/catering.webp",
        serviceUrl:"/pricing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Bridal Makeup",
        subtitle: "Lorem ipsum",
        imageUrl:"images/makeup.webp",
        serviceUrl:"/pricing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Invitation Cards",
        subtitle: "Lorem ipsum",
        imageUrl:"images/invitation.webp",
        serviceUrl:"/pricing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Mehendi",
        subtitle: "Lorem ipsum",
        imageUrl:"images/mehendi.webp",
        serviceUrl:"/pricing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  }
}
