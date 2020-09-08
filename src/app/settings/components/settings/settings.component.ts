import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {Observable, Subscription} from "rxjs";
import {currentUserSelector} from "../../../auth/store/selectors";
import {filter} from "rxjs/operators";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {CurrentUserInputInterface} from "../../../shared/types/CurrentUserInput.interface";
import {updateCurrentUserAction} from "../../../auth/store/actions/update.action";
import {logoutAction} from "../../../auth/store/actions/sync.action";

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder,
              private store: Store) {
  }

  currentUser: CurrentUserInterface;
  s1: Subscription;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeListeners() {
    this.s1 = this.store.pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  private initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ''
    });
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    };
    this.store.dispatch(updateCurrentUserAction({currentUserInput}));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }
}
