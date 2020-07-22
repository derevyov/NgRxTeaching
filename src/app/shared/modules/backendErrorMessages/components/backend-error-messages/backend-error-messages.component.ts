import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  constructor() {
  }

  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(', ')

      return `${name} ${messages}`
    })
  }

}
