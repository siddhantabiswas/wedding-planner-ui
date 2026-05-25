import { Component, signal } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { PageHeader } from "../page-header/page-header";
import { PanelModule } from 'primeng/panel';

interface MapHub {
  id: string;
  name: string;
  status: string;
  xPercentage: number;  // Measured precisely relative to your custom SVG frame dimensions
  yPercentage: number;
}

@Component({
  selector: 'app-locations',
  imports: [RippleModule, ChipModule, PageHeader, PanelModule],
  templateUrl: './locations.html',
  styleUrl: './locations.css',
})
export class Locations {
  // Use percentages inside your viewport vector bounds to prevent map breakdown shifts
  hubs = signal<MapHub[]>([
    { 
      id: 'gurgaon', 
      name: 'Gurgaon', 
      status: 'Optimal Dispatch', 
      xPercentage: 33.80, // Slightly southwest of Delhi
      yPercentage: 32.50  
    },
    { 
      id: 'kolkata', 
      name: 'Kolkata', 
      status: 'High Volume', 
      xPercentage: 63.50, // Southern West Bengal near the delta region
      yPercentage: 51.50  
    },
    { 
      id: 'pune', 
      name: 'Pune', 
      status: 'Operational', 
      xPercentage: 28.50, // Southwest quadrant of Maharashtra
      yPercentage: 62.20  
    },
    { 
      id: 'bangalore', 
      name: 'Bengaluru', 
      status: 'Optimal Dispatch', 
      xPercentage: 31.80, // Southeastern Karnataka area
      yPercentage: 77.20  
    }
  ]);
}
