import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { MainLayout } from './layout/main-layout/main-layout';
import { Profile } from './pages/profile/profile';
import { Project } from './pages/project/project';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
 { path: '', redirectTo: 'main-layout', pathMatch: 'full' },
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

      {
        path: 'profile',
        component: Profile
      },

       {
        path: 'projects',
        component: Project
      },

        {
        path: 'contact',
        component: Contact
      },
     ]
 }, 
];
