import React, {Component} from 'react';

import './App.css'


export default class Profile extends Component {

render(){
	 console.log("props", this.props)
	
	let artist = { name: '', followers:{total:''}, images:[{url:''}], genres: []}
	 if (this.props.artist !== null ){

	 	artist = this.props.artist
	 }
	
return(
    <div className= "Profile">     
		
		<img
			alt="profile"
 			className="profile-img"
 			src={artist.images[0].url}
			/>
    <div>
     <div className= "profile-info">  
      <div className="profile-name"> {artist.name}</div>
		<div className="profile-followers"> {artist.followers.total}</div>
		<div className="profile-genre">
		{
 		 artist.genres.map((genre,k) => {
          
         genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : `& ${genre}`;
          return (

          <span key={k}> {genre} </span>
          	)

  		})

		}

	   </div>
     </div>
	</div>
  </div>	

		)

      }
}