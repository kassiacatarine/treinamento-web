import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreComponent } from './core.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ConteinerComponent } from './components/conteiner/conteiner.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [NavbarComponent, CoreComponent, ConteinerComponent]
})
export class CoreModule { }
