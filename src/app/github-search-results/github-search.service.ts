import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private searchUsersUrl = `${environment.githubApiUrl}/search/users`;

  githubUsers: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  getGithubUsers(query: string) {
    const params = new HttpParams();
    params.set('q', query);

    return this.http.get<any>(this.searchUsersUrl, { params });
  }

}
