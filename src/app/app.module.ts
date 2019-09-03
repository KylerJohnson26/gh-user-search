import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AccordionControlDirective } from './search-history/accordion-control.directive';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    SearchHistoryComponent,
    AccordionControlDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
