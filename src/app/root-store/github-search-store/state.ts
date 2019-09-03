
export interface State {
  currentQuery: string;
  searchHistory: string[];
}

export const initialState: State = {
  currentQuery: '',
  searchHistory: []
};
