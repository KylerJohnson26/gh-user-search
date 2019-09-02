import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchResultsComponent } from './github-search-results/github-search-results.component';


const routes: Routes = [
  { path: ':searchQuery', component: GithubSearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubSearchResultsRoutingModule { }
