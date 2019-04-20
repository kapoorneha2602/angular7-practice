import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });


  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateName() {
    this.profileForm.patchValue({ firstName: 'Nancy' });
  }
}
