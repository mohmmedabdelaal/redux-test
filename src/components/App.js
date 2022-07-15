import React from 'react';
import SongList from './SongList';

const App = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>Songs App</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <SongList />
      </div>
    </section>
  );
};

export default App;
