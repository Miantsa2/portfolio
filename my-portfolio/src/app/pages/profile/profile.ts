import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  frontendSkills = [
    {
      name: 'CSS / HTML',
      level: 90,
      color: 'bg-[rgb(75,21,53)]'
    },
    {
      name: 'Typescript',
      level: 85,
      color: 'bg-pink-500'
    },
    {
      name: 'Javascript',
      level: 80,
      color: 'bg-blue-500'
    }
  ];

  DBSkills = [
    {
      name: 'PostgreSQL',
      level: 90,
      color: 'bg-[rgb(113,85,122)]'
    },
    {
      name: 'MySQL',
      level: 85,
      color: 'bg-orange-500'
    },
    {
      name: 'MongoDB',
      level: 80,
      color: 'bg-purple-500'
    }
   
  ];

   backendSkills = [
    {
      name: 'C++',
      level: 90,
      color: 'bg-[rgb(58,52,91)]'
    },
    {
      name: 'Python',
      level: 90,
      color: 'bg-red-500'
    },
    {
      name: 'PHP',
      level: 95,
      color: 'bg-yellow-500'
    },
    {
      name: 'NodeJS',
      level: 85,
      color: 'bg-blue-500'
    },
    {
      name: 'JAVA',
      level: 95,
      color: 'bg-purple-500'
    },
    {
      name: 'Odoo',
      level: 80,
      color: 'bg-[rgb(75,21,53)]'
    },
   
  ];
  
}

