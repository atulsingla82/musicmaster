import React, {Component} from 'react';
import './App.css'
import {Image} from 'react-bootstrap';
export default class Gallery extends Component {
constructor(props){
		super(props);
		this.state ={
         playingUrl:'',
         audio:null,
         playing:false

		}
	}
playAudio(previewUrl){
	

let audio = new Audio(previewUrl)
if (!this.state.playing){
 audio.play()
 this.setState({
 	playing:true,
 	playingUrl:previewUrl,
 	audio:audio
 })
} else {
	if( this.state.playingUrl === previewUrl){
		this.state.audio.pause();
		this.setState({
			playing:false
		})
	} else {
    this.state.audio.pause();
    audio.play();
    this.setState({
 	playing:true,
 	playingUrl:previewUrl,
 	audio:audio
 })

	}
}

}


render() {

	// console.log("props", this.props)

	const tracks = this.props.tracks;

return (
   
     <div> 

      {tracks.map((track,k) =>  {

      	console.log('track',track)

      const trackImg = track.album.images[0].url;
      return(
      <div 
        key={k}
        className = "track"
        onClick = {() => this.playAudio(track.preview_url)}
       >
       <Image 
        thumbnail
        src={trackImg}
        className="track-img"
        alt="track"
        
        />
        <div className="track-play">
       <div className="track-play-inner"
       >
       {
        this.state.playingUrl === track.preview_url
        ? <span className ="pause"> | | </span>
        : <span> &#9654; </span>

       }
        
       </div>
       </div>

        <p className="track-text"> {track.name} </p>

       </div>
     )
     })}

      </div>

	)



}

}