import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {GetPopularTagsResponseInterface} from "../types/getPopularTagsResponse.interface";

@Injectable({providedIn: 'root'})
export class PopularTagsService {
  constructor(private http: HttpClient) {
  }

  getPopularTags(url: string): Observable<GetPopularTagsResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetPopularTagsResponseInterface>(fullUrl);
  }
}
