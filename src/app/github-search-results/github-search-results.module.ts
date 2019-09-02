import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchResultsRoutingModule } from './github-search-results-routing.module';
import { GithubSearchResultsComponent } from './github-search-results/github-search-results.component';
import { ResultsListComponent } from './github-search-results/results-list/results-list.component';
import { ResultComponent } from './github-search-results/results-list/result/result.component';


@NgModule({
  declarations: [
    GithubSearchResultsComponent,
    ResultsListComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    GithubSearchResultsRoutingModule
  ]
})
export class GithubSearchResultsModule { }
