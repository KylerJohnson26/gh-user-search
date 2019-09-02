import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { GithubSearchService } from './github-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.scss']
})
export class GithubSearchResultsComponent implements OnInit {

  githubUsers: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private searchService: GithubSearchService
  ) { }

  ngOnInit() {
    console.log('search results')
    this.githubUsers = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params)
        const searchQuery = params.get('searchQuery');
        return this
          .searchService
          .getGithubUsers(searchQuery);
      }),
      tap(users => console.log(users))
    );

  }

}
