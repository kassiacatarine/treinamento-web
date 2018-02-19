import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreComponent } from './core.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    CoreComponent,
    NavComponent,
  ],
  exports: [
    CoreComponent
  ],
})
export class CoreModule { }
