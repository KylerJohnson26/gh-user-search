import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const getGithubSearchState = createFeatureSelector<State>('GithubSearch');

export const getCurrentQuery = createSelector(
  getGithubSearchState,
  (state: State) => state.currentQuery
);

export const getGithubSearchHistory = createSelector(
  getGithubSearchState,
  (state: State) => state.searchHistory
);
