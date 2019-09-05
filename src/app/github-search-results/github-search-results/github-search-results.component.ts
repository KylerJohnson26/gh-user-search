import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap, map, concatMap } from 'rxjs/operators';
import { GithubSearchService } from './github-search.service';
import { Observable } from 'rxjs';
import { GithubUser } from './github-user';
import { GithubUserSearchResponse } from './github-user-search-response';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.scss']
})
export class GithubSearchResultsComponent implements OnInit {

  githubUsers$: Observable<GithubUser[]>;

  constructor(
    private route: ActivatedRoute,
    private searchService: GithubSearchService
  ) { }

  ngOnInit() {
    this.githubUsers$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const searchQuery = params.get('searchQuery');
        return this
          .searchService
          .getGithubUsers(searchQuery);
      }),
      tap(users => console.log(users))
    );
  }

  buildViewModel(user: GithubUser) {

  }

}
