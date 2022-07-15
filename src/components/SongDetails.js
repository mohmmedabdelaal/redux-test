import React from 'react';
import { connect } from 'react-redux';

function SongDetails({ song }) {
  if (!song) {
    return (
      <div>
        <h4>Please select a Song</h4>
      </div>
    );
  }

  return (
    <div className="section-center">
      <div className="title">
        <h4>Song Lyrics</h4>
        <div className="underline"></div>
      </div>
      <article>
        <p>{song.lyrics}</p>
      </article>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetails);
