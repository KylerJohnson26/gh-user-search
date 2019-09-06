import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GithubUserSearchResponse } from './github-user-search-response';
import { GithubUser } from './github-user';
import { map } from 'rxjs/operators';
import { GithubUserDetail } from './github-user-detail';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private searchUsersUrl = `${environment.githubApiUrl}/search/users`;

  constructor(
    private http: HttpClient
  ) { }

  getGithubUsers(query: string): Observable<GithubUser[]> {
    const url = `${this.searchUsersUrl}?q=${query}`;
    return this.http.get<GithubUserSearchResponse>(url).pipe(
      map(searchReponse => searchReponse.items)
    );
  }

  getGithubUserDetail(user: GithubUser) {
    return this.http.get<GithubUserDetail>(user.url);
  }

}
