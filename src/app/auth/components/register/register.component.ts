import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from '@ngrx/store';
import {registerAction} from "../../store/actions/register.action";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../../store/selectors";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  form: FormGroup
  isSubmitting$: Observable<boolean>

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email:'',
      password:''
    })
  }

  onSubmit() {
    console.log(this.form.valid)
    this.store.dispatch(registerAction(this.form.value))
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log('isSub',this.isSubmitting$)
  }
}
