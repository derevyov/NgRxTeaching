import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {PopularTagType} from "../../../types/PopularTag.type";
import {GetPopularTagsResponseInterface} from "../types/getPopularTagsResponse.interface";
import {map} from "rxjs/operators";

@Injectable() // {providedIn: 'root'}
export class PopularTagsService {
  constructor(private http: HttpClient) {
  }

  getPopularTags(url: string): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get(fullUrl).pipe(map((res: GetPopularTagsResponseInterface) => {
      return res.tags;
    }));
  }
}
