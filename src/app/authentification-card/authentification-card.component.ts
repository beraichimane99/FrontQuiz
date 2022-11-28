import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onFormSubmit(authForm : NgForm) {
    console.log(authForm);

}}
