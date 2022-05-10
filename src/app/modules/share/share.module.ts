import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ShareComponent,
    NotFoundPageComponent,
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class ShareModule { }
