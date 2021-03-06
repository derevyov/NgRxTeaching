import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from '@ngrx/store';
import {Observable} from "rxjs";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {AuthService} from "../../services/auth.service";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private store: Store,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  private initializeForm() {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  onSubmit() {
    const request: LoginRequestInterface = {user: this.form.value}
    this.store.dispatch(loginAction({request}))
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
