import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Observable } from 'rxjs';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent  {

  itemEmail = '';
  items: Observable<any[]>;
  subscribeForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
    this.subscribeForm = this.fb.group({
      contactFormEmail: [''],
    });
  }

  subscribe() {
    console.log(this.subscribeForm.valid)
    if (!this.subscribeForm.valid) {
      return;
    }
    this.blogService.subscribe(this.subscribeForm.value.contactFormEmail)
    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
      });
    alert('Thank you for contacting us, your message has gone through!');
  }

  /**
   * Clearing form. Used after the form is submitted.
   */
  clearForm() {
    this.subscribeForm.reset();
  }


}
