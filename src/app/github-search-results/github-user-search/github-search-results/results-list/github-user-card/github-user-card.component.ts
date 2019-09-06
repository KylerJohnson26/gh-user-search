import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../../github-user';
import { Observable } from 'rxjs';
import { GithubUserDetail } from '../../github-user-detail';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss']
})
export class GithubUserCardComponent implements OnInit{

  @Input()
  githubUser: GithubUser;

  githubUserDetail$: Observable<GithubUserDetail>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.githubUserDetail$ = this
      .getGithubUserDetail(this.githubUser).pipe(
        tap(detail => console.log(detail))
      );
  }

  getGithubUserDetail(user: GithubUser) {
    return this.http.get<GithubUserDetail>(user.url);
  }

}
