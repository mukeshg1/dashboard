import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { SalesComponent } from './modules/sales/sales.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'contacts',
      component: ContactsComponent
    },
   {
      path: 'sales',
      component: SalesComponent
   }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
