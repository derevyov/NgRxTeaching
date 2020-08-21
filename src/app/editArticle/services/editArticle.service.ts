import {ArticleInputInterface} from "../../shared/types/articleInput.interface";
import {Injectable} from "@angular/core";
import {SaveArticleResponseInterface} from "../../shared/types/saveArticleResponse.interface";
import {HttpClient} from "@angular/common/http";
import {ArticleInterface} from "../../shared/types/article.interface";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {
  }

  updateArticle(slug: string, articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
