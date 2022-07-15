import { combineReducers } from 'redux';
import { SONG_SELECTED } from '../types';

const INITIAL_STATE = {
  song: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  if (action.type === SONG_SELECTED) {
    return state;
  }
  return state;
};

const rootReducer = combineReducers({ reducers });

export default rootReducer;
