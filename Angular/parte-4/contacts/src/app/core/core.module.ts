import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreComponent } from './core.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ConteinerComponent } from './components/conteiner/conteiner.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [NavbarComponent, CoreComponent, ConteinerComponent]
})
export class CoreModule { }
