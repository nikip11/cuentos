import React from 'react';
import './App.css';
import Iframe from './components/Iframe';
import Gallery from './components/Gallery';
import type { Video } from './types';

function App() {
  const [video, setVideo] = React.useState<Video | null>(null);
  return (
    <>
      <div className="App-header">
        <h1>cuentos</h1>
        {video && (<Iframe src={video.url} />)}
        <Gallery setter={setVideo} />
      </div>
    </>
  )
}

export default App;
