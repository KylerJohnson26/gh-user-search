import { createAction, props } from '@ngrx/store';

export const setCurrentQuery = createAction(
  '[Github Search] search',
  props<{ currentQuery: string }>()
);

export const setSearchHistory = createAction(
  '[Github Search] set search history',
  props<{ githubSearchHistory: string[] }>()
);
