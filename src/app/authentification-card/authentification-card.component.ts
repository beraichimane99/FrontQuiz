import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup} from '@angular/forms';
import {User} from './../models/User' ;
import { AuthServiceService } from '../services/auth-service.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-authentification-card',
  templateUrl: './authentification-card.component.html',
  styleUrls: ['./authentification-card.component.css']
})

export class AuthentificationCardComponent implements OnInit {
  auth : boolean = false;
  output : String = 'Si vous n\'avez pas de compte S\'inscrire';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('') ;
  name = new FormControl();
 // email = new FormControl('') ;
  matcher = new MyErrorStateMatcher();
  profileForm = new FormGroup({
    emailFormControl: new FormControl(''),
  });
  newUser : User ={
    name :'' ,
    email :'' , 
    password: ''
  }
  constructor(private adduserService : AuthServiceService) { }

  ngOnInit(): void {
  }
  addUser(): void {
    this.adduserService.addUserf(this.newUser);
    console.log(this.newUser);
  }
  loginUser(): void {
    this.adduserService.authentification(this.newUser);
    console.log("Loooooggeeeed");
  }
  changeAuth(){
    this.auth = ! this.auth;
    if(this.auth === true){
      this.output="Si vous avez déja un compte S\'authentifier";
    }
  }

}
