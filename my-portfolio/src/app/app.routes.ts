import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
export const routes: Routes = [
 { path: 'home', component: Home }, 
 { path: 'header', component: Header }, 

 { path: '', redirectTo: 'home', pathMatch: 'full' } // Redirection
];
