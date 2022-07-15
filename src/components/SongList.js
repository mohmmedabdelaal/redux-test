import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

function SongList() {
  return <div>SongList</div>;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapDispatchToProps, mapStateToProps)(SongList);
