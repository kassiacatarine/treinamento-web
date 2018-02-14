import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'task', loadChildren: 'app/task/task.module#TaskModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      // {
      //   enableTracing: true, // <-- debugging purposes only
      // }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
