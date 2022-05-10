import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../modules/share/service/user.service";
import {LoadingService} from "../../../modules/share/service/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {validateHorizontalPosition} from "@angular/cdk/overlay";
import {PopUpService} from "../../../modules/share/service/pop-up.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl(null,
      [Validators.required]),
    email: new FormControl(null,
      [Validators.required]),
    password: new FormControl(null,
      [Validators.required])
  })

  constructor(private userService: UserService,
              public loadingService: LoadingService,
    private popUpService: PopUpService
  ) {
  }

  signUp() {
    const name = this.signUpForm.get('name')?.value;
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.userService.createUser(name, email, password).subscribe(response => {

      this.openSnackBar('Saved', 'close')

    })
  }

  openSnackBar(message: string, action: string) {
    this.popUpService.trigger(message,action,[
      3000,
      'simple-snack-bar',
      'end',
      'top'
    ]);

  }



  ngOnInit(): void {
  }

}
