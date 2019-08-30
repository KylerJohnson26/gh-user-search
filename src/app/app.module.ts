import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhSearchComponent } from './gh-search/gh-search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AccordionControlDirective } from './search-history/accordion-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    GhSearchComponent,
    SearchHistoryComponent,
    AccordionControlDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
