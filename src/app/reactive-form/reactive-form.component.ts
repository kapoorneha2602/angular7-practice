import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });


  onSubmit() {
    console.warn(this.profileForm.value);

    var username='';
    username  = this.profileForm.value.userName.toLowerCase();

    if (username === AuthorizationComponent.APP_USERNAME) {
      console.log('username match');
    }
    else {
      console.log('username not match');
    }

    if (this.profileForm.value.password === AuthorizationComponent.APP_PASSWORD) {
      console.log('password match');
    }
    else {
      console.log('password not match');

    }

    if (username === AuthorizationComponent.APP_USERNAME && this.profileForm.value.password === AuthorizationComponent.APP_PASSWORD) {
      console.log('both match');


      this.router.navigate(['/app-dashboard']);

    }
    else {
      console.log('both not match');
      alert('Login credentials are incorrect!!!')
    }



  }

  updateName() {
    this.profileForm.patchValue({ firstName: 'Nancy' });
  }
}
