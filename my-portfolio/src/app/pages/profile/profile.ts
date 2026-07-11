import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  constructor(private translate: TranslateService) {}
    t(key: string): string {
      return this.translate.instant('EDUCATION.' + key);
    }


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
      level: 88,
      color: 'bg-blue-500'
    },
    {
      name: 'JAVA',
      level: 95,
      color: 'bg-purple-500'
    },
    {
      name: 'Odoo',
      level: 85,
      color: 'bg-[rgb(75,21,53)]'
    },
   
  ];

  activeTab: 'education' | 'experience' = 'education';
  educationList = [
    {
      key: "master",
      institute: "IT University Madagascar",
      period: "Present"
    },
    {
      key: "bachelor",
      institute: "IT University Madagascar",
      period: "2022 - 2025"
    },
    {
      key: "school",
      institute: "ESCA Madagascar",
      period: "2021 - 2022"
    }
  ];

  experienceList = [

    {
      titleKey: "odoo_intern_title",
      institute: "Dzama Madagascar",
      period: "05/2026 - 06/2026",
      tasksKeys: [
        "exp2_task_1",
        "exp2_task_2",
        "exp2_task_3",
        "exp2_task_4"
      ]
    },
    {
      titleKey: "odoo_intern_title",
      institute: "Etech Consulting Madagascar",
      period: "06/2025 - 08/2025",
      tasksKeys: [
        "odoo_env",
        "odoo_dev",
        "agile_team",
        "testing_optimization"
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
      key: "certification1",
      place:"ArkeUp Academy",
      date:"2025"

    },
     {
      name: "DELF B2",
      key: "certification2",
      place:"Alliance Française Madagascar",
      date:"2024"

    },

    {
      name: "DELF A2",
      key: "certification3",
      place:"Alliance Française Madagascar",
      date:"2015"

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

