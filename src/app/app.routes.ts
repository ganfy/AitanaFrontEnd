import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AitanaComponent } from './pages/aitana/aitana.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //Que tanto debe estar match, en este caso 100%
  { path: 'home', component: HomeComponent }, // Ruta principal
  { path: 'Aitana', component: AitanaComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

export default routes;
