import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   user = {
    name: '',
    email: '',
    message: ''
  };
  success = false; 


  sendEmail(form: NgForm) {
    if (form.invalid) return;
    emailjs.send(
      'service_9614xpe',
      'template_m78i507',
      {
        name: this.user.name,
        email: this.user.email,
        message: this.user.message
      },
      'AGUMh9JRugsCkGWaD'
    ).then(() => {
      this.success = true;  
      this.user = {
        name: '',
        email: '',
        message: ''
      };
    })
    .catch((error) => {

      console.error(error);
      alert('Erreur lors de l’envoi.'); // Ou créer un autre modal d’erreur
    });
  }
}
