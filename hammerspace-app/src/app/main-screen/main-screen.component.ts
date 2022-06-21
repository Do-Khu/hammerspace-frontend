import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    if( !this.cookie.get('token') ){
      this.router.navigate(['']);
    }
  }

}
