import { Component } from '@angular/core';

export interface ProjectData {
  id: number;
  number: string;
  title: string;
  duration: string;
  team: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  links: {
    website?: string;
    github?: string;
    other?: string;
  };
}

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.css'], // correction ici
})

export class Project { // renommée pour éviter conflit avec interface

  projects: ProjectData[] = [
    {
      id: 1,
      number: '01',
      title: 'Shopping Mall Management Web Application',
      duration: '1 month',
      team: 'Team of 2',
      description: 'Design and development of a shopping mall management web application with multi-role management (Admin, Store, Customer).',
      features: [
        'Secure authentication (JWT, role-based access control)',
        'Management of halls and stores',
        'Product management (stockable / non-stockable, promotions, sponsorship)',
        'Online payment system using credit cards',
        'Event management with validation workflow',
        'Dashboard with KPIs and data visualization',
        'Real-time notification system',
        'Management of sales, deliveries, and PDF invoicing'
      ],
      technologies: ['MongoDB', 'Express', 'Angular', 'NodeJs', 'Tailwind'],
      image: 'shopping-mall.png',
      links: {
        website: 'https://m1p13mean-miantsa-isaia.netlify.app/',
        github: 'https://github.com/Miantsa2/m1p13mean-Isaia-Miantsa-frontend/tree/dev'
      }
    },

     {
      id: 2,
      number: '02',
      title: ' Framework Sprint',
      duration: '3 months',
      team: 'Solo',
      description: 'Development of a modular and scalable web application framework designed for rapid development',
      features: [
        'Custom annotation-based routing for clear endpoint mapping',
        'Controllers are scanned and registered automatically with singleton pattern',
        'Clear separation of view logic using the Model-View pattern',
        'Supports easy deployment on Tomcat servers',
        'Automatically converts and binds request parameters',
        'Automated deployment scripts',
      ],
      technologies: ['JAVA', 'API Servlet ', 'Spring Boot', 'HTML, CSS, Bootstrap', 'PostgreSQL'],
      image: 'fly.png',
      links: {
        other: 'https://github.com/Miantsa2/avion',
        github: 'https://github.com/Miantsa2/sprint00'
      }
    }

    
  ];
}