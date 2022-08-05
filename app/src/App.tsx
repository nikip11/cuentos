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
        {video && (
          <div style={{
            display: 'flex',
            width: '90%',
          }}>
            <Iframe src={video.url} />
          </div>
        )}
        <Gallery setter={setVideo} />
      </div>
    </>
  )
}

export default App;
