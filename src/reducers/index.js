import { combineReducers } from 'redux';
import { SONG_SELECTED } from '../types';

const songsReducer = () => {
  return [
    {
      id: 1,
      title: '3 dakat',
      duration: '4:05',
      lyrics:
        'وقت غروب الشمس واقف عالبحر بعيد عمال بحكيله وأشكيله وأشرح وأعيد فجأة لاقيتها وكنت فاكرها عروسة البحر خارجة من المايه وطلتها أقوى من السح',
    },
    {
      id: 2,
      title: 'Macarena',
      duration: '2:30',
      lyrics:
        'When I dance, they call me Macarena And the boys, they say que soy buena They all want me They can"t have me',
    },
    {
      id: 3,
      title: 'All Star',
      duration: '3:15',
      lyrics:
        'When I dance, they call me Macarena And the boys, they say que soy buena They all want me They can"t have me',
    },
    {
      id: 4,
      title: 'dispacito',
      duration: '1:45',
      lyrics:
        'When I dance, they call me Macarena And the boys, they say que soy buena They all want me They can"t have me',
    },
    {
      id: 5,
      title: 'bill gin',
      duration: '1:45',
      lyrics:
        'When I dance, they call me Macarena And the boys, they say que soy buena They all want me They can"t have me',
    },
    {
      id: 6,
      title: 'I Want it That Way',
      duration: '1:45',
      lyrics:
        'When I dance, they call me Macarena And the boys, they say que soy buena They all want me They can"t have me',
    },
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
  selectedSong: selectedSongsReducers,
});

export default rootReducer;
