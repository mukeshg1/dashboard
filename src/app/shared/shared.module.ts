import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule, MatDividerModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatListModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LinechartComponent } from './widget/linechart/linechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widget/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LinechartComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LinechartComponent,
    CardComponent,
  ]
})
export class SharedModule { }
