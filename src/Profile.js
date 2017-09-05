import React, {Component} from 'react';

import './App.css'


export default class Profile extends Component {

render(){
	 console.log("props", this.props)
	
	let artist = { name: '', musicbrainz_image_url: ""}
	 if (this.props.artist !== null ){

	 	artist = this.props.artist
	 }
	
return(
<div className= "Profile">     
<div> {artist.name}</div>
<img
 alt=""
 src={artist.musicbrainz_image_url}
/>
 
</div>
)


}


}