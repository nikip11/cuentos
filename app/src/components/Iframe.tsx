type Props = {
  src: string
  title?: string
  height?: string
  width?: string
}
export default function Iframe(props: Props) {
  const { title = 'iframe', src, height = 'auto', width = '100%' } = props;
  return (
    <>
      {src && (
        <div className="iframe" style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingTop: '56.25%',
          marginBottom: '20px',
        }}>
          <iframe
            title={title}
            src={src}
            frameBorder="0"
            height={height}
            width={width}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      )}
    </>
  )
}