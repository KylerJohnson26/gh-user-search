import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';


const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./github-search-results/github-search-results.module').then(m => m.GithubSearchResultsModule)
  },
  {
    path: '', component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
