import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './kanappka/header/header.component';
import { OrderComponent } from './kanappka/order/order.component';
import { KanappkaComponent } from './kanappka/kanappka.component';
import { RegisterComponent } from './kanappka/register/register.component';

const routes: Routes = [
  {
    path: '', component: KanappkaComponent, children: [
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: 'order', component: OrderComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    OrderComponent,
    KanappkaComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ]
})

export class KanappkaModule {
}
