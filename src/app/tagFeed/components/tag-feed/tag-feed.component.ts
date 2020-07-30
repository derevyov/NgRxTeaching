import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  tagName: string;
  apiUrl: string;

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.tagName = p.slug
      this.apiUrl = `/articles?tag=${this.tagName}`;
    })
  }

}
