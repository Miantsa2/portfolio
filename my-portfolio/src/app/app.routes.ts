import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { MainLayout } from './layout/main-layout/main-layout';
export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'header', component: Header }, 
 { path: 'main-layout', component: MainLayout ,
     children: [
      {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        path: 'home',
        component: Home
      },
     ]
 }, 
];
