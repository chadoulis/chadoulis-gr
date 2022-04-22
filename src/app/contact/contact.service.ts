import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

/**
 * A service for posting messages to firebase, so that they will be forwarded to the specified e-mail.
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /**
   *
   * @param {AngularFirestore} afs
   */
  constructor(
    public afs: AngularFirestore
    ) { }

    /**
     * Used to post the form to the firebase
     * @param {FormGroup} contactForm
     */
    sendForm(contactForm: FormGroup) {
      this.afs.collection('messages').doc().set(
        Object.keys(contactForm.value).reduce(
          (data, key) => {
            data[key as keyof typeof data] = contactForm.value[key];
            return data;
          },
          {
            to: 'chadoulis@iti.gr',
            message: {
              subject: contactForm.value.contactFormSubject,
              html:
                '<b>Name:</b> ' +
                contactForm.value.contactFormName +
                '<br>' +
                '<b>Email:</b> ' +
                contactForm.value.contactFormEmail +
                '<br>' +
                '<b>Message:</b> ' +
                contactForm.value.contactFormMessage,
            },
          }
        )
      );
    }






}
