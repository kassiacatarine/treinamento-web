import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
