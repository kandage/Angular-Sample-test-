import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildrenComponent } from './components/children/children.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
