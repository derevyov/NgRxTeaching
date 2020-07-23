import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from "../../../../services/utils/utils.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  constructor(private utils: UtilsService) {
  }

  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;

  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount  = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utils.range(1, this.pagesCount);
  }

}
