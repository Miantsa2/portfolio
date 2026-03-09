import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, RouterModule, Footer],
  templateUrl: './main-layout.html',
 
})
export class MainLayout {}
