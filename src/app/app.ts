import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer, ScrollTopModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
