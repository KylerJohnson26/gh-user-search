import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchResultsComponent } from './github-user-search/github-search-results/github-search-results.component';
import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';
import { SearchHomeComponent } from './github-user-search/search-home/search-home.component';


const routes: Routes = [
  {
    path: '',
    component: GithubUserSearchComponent,
    children: [
      { path: 'users/:searchQuery', component: GithubSearchResultsComponent },
      { path: 'home', component: SearchHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubSearchResultsRoutingModule { }
