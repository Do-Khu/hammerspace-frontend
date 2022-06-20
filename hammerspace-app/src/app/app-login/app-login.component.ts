import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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
  LoginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe((result) => {
        if(result.success){
          console.log(result.message);
          alert(result.message);
        } else {
          console.log(result.message);
          alert(result.message);
        }
      })
    }
  }
}
