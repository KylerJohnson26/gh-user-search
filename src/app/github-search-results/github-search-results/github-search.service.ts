import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GithubUserSearchResponse } from './github-user-search-response';
import { Store } from '@ngrx/store';
import { RootStore, githubSearchActions } from './../../root-store';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private searchUsersUrl = `${environment.githubApiUrl}/search/users`;

  constructor(
    private http: HttpClient,
    private store$: Store<RootStore.State>
  ) {
    
  }

  getGithubUsers(query: string) {
    const url = `${this.searchUsersUrl}?q=${query}`;

    return this.http.get<GithubUserSearchResponse>(url);
  }

}
