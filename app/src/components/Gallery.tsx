import videos from '../assets/data.json';
import { Video } from '../types'
type Props = {
  setter: (video: Video | null) => void
}
export default function Gallery(props: Props) {
  const { setter } = props

  function handleClick(video: Video) {
    console.log({ video })
    setter(video)
  }

  return (
    <div className="gallery" style={{
      width: '85%',
      height: '120px',
      overflowX: 'auto',
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(120px,1fr)',
      backgroundColor: '#fff',
      padding: '10px',
    }}>
      {videos.map((video, index) => (
        <button
          key={index}
          onClick={() => handleClick(video)}
          style={{ backgroundColor: 'white', border: 'none' }}>
          <img
            src={video.cover}
            alt={video.title}
            style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
          />
        </button>
      ))}
    </div >
  )
}