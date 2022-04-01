import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MatInputModule } from '@angular/material/input';
import { ContactRoutingModule } from './contact-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ContactFormComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ContactRoutingModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class ContactModule { }
