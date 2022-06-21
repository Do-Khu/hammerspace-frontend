import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  hashPassword(pass: string) {
    this.formGroup.value.password = shajs('sha256').update(pass).digest('hex');
  }

  LoginProcess(){
    if(this.formGroup.valid){
      this.hashPassword(this.formGroup.value.password);
      this.authService.login(this.formGroup.value).subscribe(Response => {
        if(Response.token != undefined){
          alert("logado com sucesso\n"+Response.token);
        } else {
          alert("Wrong Login or password");
        }
      }, err => {
        alert("Login fail");
      })
    }
  }
}
