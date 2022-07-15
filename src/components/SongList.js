import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

function SongList({ songs, selectSong }) {
  return (
    <section className="section">
      <div className="ui divided list">
        {songs.map((song) => {
          return (
            <div className="item" key={song.id}>
              <div className="right floated content">
                <button onClick={() => selectSong(song)} className="btn">
                  Select
                </button>
              </div>
              <div className="content">
                <h3>{song.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  
  return {
    songs: state.songs,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectSong: () => dispatch(selectSong()),
//   };
// };

export default connect(mapStateToProps, { selectSong })(SongList);
