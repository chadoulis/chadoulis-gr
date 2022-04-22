import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  items: Observable<any[]>;
  contactForm: FormGroup;

  /**
   *
   * @param fb
   * @param afs
   * @param recaptchaV3Service
   */
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }
    this.contactService.sendForm(this.contactForm)
    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
      });
      this.toastr.success('for reaching up! I will contact you as soon as possible...', 'Thank you');
  }

  /**
   * Clearing form. Used after the form is submitted.
   */
  clearForm() {
    this.contactForm.reset();
  }


}
