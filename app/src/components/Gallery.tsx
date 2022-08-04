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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      overflow: 'scroll',
    }}>
      {videos.map((video, index) => (
        <img
          key={index}
          src={video.cover}
          alt={video.title}
          style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: ' 0 5px' }}
          onClick={() => handleClick(video)} />
      ))}
    </div >
  )
}