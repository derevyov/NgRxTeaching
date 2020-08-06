import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from "../../../../types/articleInput.interface";
import {BackendErrorsInterface} from "../../../../types/backendErrors.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  constructor(private fb: FormBuilder) {
  }

  form: FormGroup;


  ngOnInit(): void {
    this.initialForm();
  }

  private initialForm(): void {
    console.log('initialValuesProps', this.initialValuesProps);
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' ')
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
