import {Component, Input} from "@angular/core";


@Component({
  selector: 'mc-error-message',
  template: '<div><strong>{{messageProps}}</strong></div>'

})
export class ErrorMessageComponent  {
  @Input('message') messageProps = 'Something went wrong';


}
