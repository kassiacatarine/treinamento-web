import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { CoreComponent } from '../core/core.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './components/contact-delete/contact-delete.component';

const routes: Routes = [
  { path: '', component: ContactComponent, children: [
    { path: '', component: ContactListComponent, children: [
      { path: ':_id', children: [
        { path: '', component: ContactDetailComponent },
        { path: 'edit', component: ContactEditComponent },
        { path: 'delete', component: ContactDeleteComponent }
      ]}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
