import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as shajs from 'sha.js';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private cookies: CookieService) { }
  ngOnInit(): void {
    this.initForm();
  }

  redirect(path: any):void{
    this.router.navigate([`${path}`]);
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
          this.cookies.set('token',Response.token)
          this.redirect('main');
        } else {
          alert("Ivalid token");
        }
      }, err => {
        alert("Wrong Login or password");
      })
    }
  }
}
