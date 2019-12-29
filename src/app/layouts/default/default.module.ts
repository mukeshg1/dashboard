import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatListModule, MatCardModule, MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { SalesComponent } from 'src/app/modules/sales/sales.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ContactsComponent, 
    SalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class DefaultModule { }
