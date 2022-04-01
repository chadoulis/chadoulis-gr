import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';



const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    data: {
      seo: {
        title: 'WQeMS | Contact',
        metaTags: [
          { name: 'description', content: 'Contact us!' },
          { property: 'og:title', content: 'WQeMS | Homepage' },
          { proprety: 'og:description', content: 'Contact us!' },
          { property: 'og:image', content: 'https://ibb.co/sv7MmBf' }
        ]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}



