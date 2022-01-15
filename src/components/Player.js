import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types'
import 'react-h5-audio-player/lib/styles.css';


const Player = (props) => {

  const src = "https://ipfs.io/ipfs/" + props.src
  const ipfs_searc = "https://ipfs-search.com/#/search/detail/audio/" + props.src

  return ([

    <a href={ipfs_searc}><h2>IPFS link</h2></a>,

    <AudioPlayer
      autoPlay={props.autoPlay}
      preload={props.preload}
      layout={props.layout}
      src={src}
      onPlay={e => console.log("onPlay")}
    />
  ]
)
}

Player.defaultProps = {
  //src : "QmP5PPM5KkTEkraQwzmCwbWKEtzmFPNQjVeeEH4vZFVxYu",
  src: "",
  autoPlay : true,
  preload: 'metadata',
  layout: 'stacked',
}

Player.propTypes = {
  src : PropTypes.string,
}

export default Player
