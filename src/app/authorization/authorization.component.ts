import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public static APP_USERNAME = 'neha';
  public static APP_PASSWORD = '123456';
  constructor() { 
    
  }

  ngOnInit() {
  }

}
