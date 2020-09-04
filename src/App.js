import React from 'react';
import './App.css';
import MusicPlayer from './Components/MusicPlayer';
import IU_MUSIC from './Music/iu-블루밍.mp3';
import IU_COVER from './Music/Cover/iu-블루밍.jpg'

function App() {
  return (
    <div className="App">
      <MusicPlayer music={IU_MUSIC} icon={IU_COVER} />
    </div>
  );
}

export default App;
