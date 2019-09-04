import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
// import { GithubSearchEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('GithubSearch', reducer),
    // EffectsModule.forFeature([GithubSearchEffects])
  ],
  // providers: [GithubSearchEffects]
})
export class GithubSearchStoreModule { }
