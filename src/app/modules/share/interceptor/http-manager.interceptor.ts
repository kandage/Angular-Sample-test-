import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoadingService} from "../service/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loadingService.loadingItem.next(true)

    return next.handle(request).pipe(
      finalize(() => {
        console.log('Just Came');
        this.loadingService.loadingItem.next(false)
      })
    );
  }
}
