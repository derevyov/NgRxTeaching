import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  form: FormGroup

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email:'',
      password:''
    })
  }

  onSubmit() {
    console.log(this.form.valid)
  }
}
