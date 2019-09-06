import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchResultsRoutingModule } from './github-search-results-routing.module';
import { GithubSearchResultsComponent } from './github-user-search/github-search-results/github-search-results.component';
import { ResultsListComponent } from './github-user-search/github-search-results/results-list/results-list.component';

import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';
import { GithubSearchComponent } from './github-user-search/github-search/github-search.component';
import { GithubUserCardComponent } from './github-user-search/github-search-results/results-list/github-user-card/github-user-card.component';
import { SearchHomeComponent } from './github-user-search/search-home/search-home.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GithubSearchResultsComponent,
    ResultsListComponent,
    GithubUserCardComponent,
    GithubUserSearchComponent,
    GithubSearchComponent,
    SearchHomeComponent,
  ],
  imports: [
    CommonModule,
    GithubSearchResultsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class GithubSearchResultsModule { }
