import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagListComponent} from "./components/tagList.component";


@NgModule({
  declarations: [TagListComponent],
  exports: [TagListComponent],
  imports: [CommonModule]
})
export class TagListModule {
}
