import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GithubUserSearchResponse } from './github-user-search-response';
import { GithubUser } from './github-user';
import { map, switchMap } from 'rxjs/operators';
import { GithubUserDetail } from './github-user-detail';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private searchUsersUrl = `${environment.githubApiUrl}/search/users`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
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
