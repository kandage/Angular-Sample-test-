import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ParentComponent} from "./components/parent/parent.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: 'parent', pathMatch: 'full'},
      {path: 'parent', component: ParentComponent},
      {path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)},
      {path: 'item', loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule)},
      {path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
