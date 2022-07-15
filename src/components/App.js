import React from 'react';
import SongList from './SongList';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapDispatchToProps, mapStateToProps)(App);
