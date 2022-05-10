import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {SaveCustomerComponent} from "./components/save-customer/save-customer.component";
const routes: Routes = [
  { path: '', component: CustomerComponent, children:[
      {path: '', redirectTo: 'save-customer', pathMatch: 'full'},
      {path: 'save-customer', component: SaveCustomerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
