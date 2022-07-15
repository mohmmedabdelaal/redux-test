import { combineReducers } from 'redux';
import { SONG_SELECTED } from '../types';

const INITIAL_STATE = {
  song: [],
};

const songsReducer = () => {
  return [
    { title: '3 dakat', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

const selectedSongsReducers = (state = null, action) => {
  if (action.type === SONG_SELECTED) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSongs: selectedSongsReducers,
});

export default rootReducer;
