import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Pricing } from './components/pricing/pricing';
import { Locations } from './components/locations/locations';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: 'portfolio',
        component: Portfolio
    },
    {
        path: 'pricing',
        component: Pricing
    },
    {
        path: 'locations',
        component: Locations
    }
];
