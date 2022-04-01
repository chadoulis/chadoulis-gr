import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {


  // Adding variables
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  items: Observable<any[]>;
  contactForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private recaptchaV3Service: ReCaptchaV3Service
    ) {
    //this.items = db.list('messages').ValueChanges()
// Passing in MD_Bootstrap form validation
    this.contactForm = this.fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.required, Validators.email]],
    contactFormSubject: ['', Validators.required],
    contactFormMessage: ['', Validators.required]
  });
   }

   onSubmit()  {
    if (!this.contactForm.valid){
      return
    }
    this.afs.collection("messages").doc().set(Object.keys(this.contactForm.value).reduce((data, key)=>{
      data[key] = this.contactForm.value[key]
      return data
    },{
      to: 'chadoulis@iti.gr',
      message: {
        subject: this.contactForm.value.contactFormSubject,
        html: '<b>Name:</b> ' + this.contactForm.value.contactFormName + '<br>' +
        '<b>Email:</b> '+ this.contactForm.value.contactFormEmail + '<br>' +
        '<b>Message:</b> ' + this.contactForm.value.contactFormMessage,
      },
    }))

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });

   alert('Thank you for contacting us, your message has gone through!')
  }

  // Clearing the form after submit
  clearForm() {
      this.contactForm.reset();
      }

  hasError(field: string) {
    return (!this.contactForm.get(field).valid && !this.contactForm.get(field).pristine);
  }
}
