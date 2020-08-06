import {Component} from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {

  constructor() {
  }

  initialValues: ArticleInputInterface = {
    title: 'Foo',
    description: 'Bar',
    body: 'baz',
    tagList: ['123', '444']
  };


  onSubmit($event: ArticleInputInterface) {
    console.log('on submit:', $event);
  }
}
