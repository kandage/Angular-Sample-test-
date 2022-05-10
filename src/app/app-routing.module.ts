import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./modules/share/components/not-found-page/not-found-page.component";
import {LoginComponent} from "./components/share/login/login.component";
import {SignUpComponent} from "./components/share/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {
    path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
