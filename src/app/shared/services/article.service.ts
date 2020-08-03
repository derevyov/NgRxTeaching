import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GetArticleResponseInterface} from "../types/getArticleResponse.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ArticleInterface} from "../types/article.interface";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(map((r: GetArticleResponseInterface) => {
        return r.articles;
      }
    ));
  }
}
