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

  activeTab: 'education' | 'experience' = 'education';
  educationList = [
    {
      title: "Master’s Degree in Computer Science",
      institute: "IT University Madagascar",
      period: "Present"
    },
    {
      title: "Bachelor's Degree in Computer Science",
      institute: "IT University Madagascar",
      period: "2022 - 2025"
    },
    {
      title: "High School Diploma Series C",
      institute: "ESCA Madagascar",
      period: "2021 - 2022"
    }
  ];

  experienceList = [
    {
      title: "Odoo Developer Intern",
      institute: "Etech Consulting Madagascar",
      period: "06/2025 - 08/2025",
      tasks: [
        "Immersed in a professional environment within an IT services company (ESN)",
        "Development, customization, and maintenance of Odoo modules",
        "Contributed to various client projects across different sectors and collaborated in an agile methodology within a multidisciplinary team",
        "Performed testing, debugging, and optimization of existing features"
      ]
    },
  ];

  tools = [
    {
      name: "GIT"
    },
    {
      name: "Docker"
    },
    {
      name: "Postman"
    },
    {
      name: "Adobe XD"
    },
    {
      name: "Canva"
    },
  ];

  certifications=[
    {
      name: "ODOO",
      description: " Odoo module development, customization, and maintenance.",
      place:"ArkeUp Academy",
      date:"2025"

    },
     {
      name: "DELF B2",
      description: "French language B2 proficiency certification.",
      place:"Alliance Française Madagascar",
      date:"2025"

    }
  ]


  ngOnInit() {
    if (typeof window !== 'undefined') {
      const savedTab = localStorage.getItem('activeTab');
      this.activeTab = savedTab === 'experience' ? 'experience' : 'education';
    }
  }

  setTab(tab: 'education' | 'experience') {
    this.activeTab = tab;
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeTab', tab);
    }
  }



  
}

