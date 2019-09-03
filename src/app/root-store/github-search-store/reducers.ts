import { initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import * as githubSearchActions from './actions';


const githubSearchReducer = createReducer(
  initialState,
  on(
    githubSearchActions.setCurrentQuery,
    (state, { currentQuery }) => ({
      ...state,
      currentQuery
    })
  ),
  on(
    githubSearchActions.setSearchHistory,
    (state, { githubSearchHistory }) => ({
      ...state,
      githubSearchHistory
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
return githubSearchReducer(state, action);
}
