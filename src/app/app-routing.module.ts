import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KanappkaModule } from './appka/kanappka.module';
import { RouterModule, Routes } from '@angular/router';
import { KanappkaComponent } from './appka/kanappka/kanappka.component';

const routes: Routes = [
  { path: 'kanappka', loadChildren: './appka/kanappka.module#KanappkaModule'},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {
}

