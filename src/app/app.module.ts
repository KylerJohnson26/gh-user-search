import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AccordionControlDirective } from './search-history/accordion-control.directive';
import { GithubSearchResultsComponent } from './github-search-results/github-search-results.component';
import { ResultsListComponent } from './github-search-results/results-list/results-list.component';
import { ResultComponent } from './github-search-results/results-list/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    SearchHistoryComponent,
    AccordionControlDirective,
    GithubSearchResultsComponent,
    ResultsListComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
