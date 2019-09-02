import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GithubUserSearchResponse } from './github-user-search-response';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private searchUsersUrl = `${environment.githubApiUrl}/search/users`;

  constructor(
    private http: HttpClient
  ) { }

  getGithubUsers(query: string) {
    const url = `${this.searchUsersUrl}?q=${query}`;
    return this.http.get<GithubUserSearchResponse>(url);
  }

}
