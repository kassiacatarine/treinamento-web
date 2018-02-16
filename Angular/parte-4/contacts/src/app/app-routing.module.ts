import { CoreComponent } from './core/core.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: '', component: CoreComponent, children: [
    { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
