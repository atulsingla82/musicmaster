import React, {Component} from 'react';
import './App.css'

export default class Gallery extends Component {

render() {

	console.log("props", this.props)
	const tracks = this.props.tracks;

return (
   
     <div> 

      {tracks.map((track,k) =>  {
      const trackImg = track.album.images[0].url;
      return(
      <div 
        key={k}
        className = "track"
       >
       <img 
        src={trackImg}
        className="track-img"
        alt="track"
        />

        <p className="tracktext"> {track.name} </p>

       </div>
     )
     })}

      </div>

	)



}

}