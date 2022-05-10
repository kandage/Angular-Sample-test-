import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private _snackBar: MatSnackBar) { }

  public trigger(message: string, action: string, otherData: Array<any>) {
    this._snackBar.open(message,action,{
      duration:otherData[0],
      panelClass:otherData[1],
      horizontalPosition:otherData[2],
      verticalPosition:otherData[3]
    })
  }

}
