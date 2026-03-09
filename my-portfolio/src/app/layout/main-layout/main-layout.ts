import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, RouterModule],
  templateUrl: './main-layout.html',
 
})
export class MainLayout {}
