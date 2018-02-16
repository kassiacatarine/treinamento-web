import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

import { ContactService } from './services/contact.service';

import { ContactRoutingModule } from './contact-routing.module';
import { CardItemComponent } from './components/contact-list/card-item/card-item.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './components/contact-delete/contact-delete.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ContactRoutingModule
  ],
  providers: [
    ContactService,
  ],
  declarations: [
    ContactComponent,
    ContactListComponent,
    CardItemComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactDeleteComponent
  ]
})
export class ContactModule { }
