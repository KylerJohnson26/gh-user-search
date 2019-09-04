import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchStoreModule } from './github-search-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GithubSearchStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
