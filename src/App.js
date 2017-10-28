//Import React Component

import React,{Component} from 'react';
// Import React-Bootstrap Components

import { FormGroup,InputGroup, Glyphicon, FormControl} from 'react-bootstrap'
import './App.css'

import Profile from './Profile'

import Gallery from './Gallery'

export default class App extends Component {

  // Setting  Initial state to an empty string
  constructor(props){
    super(props);

    this.state = {
    query:"",
    artist: null,
    tracks:[]
    
    }

  }
   
   search() {
    
    // console.log('this.state',this.state)
    //================================================
    //  Spotify API
    
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = BASE_URL + 'q='+ this.state.query + '&type=artist&limit=1';
    var access_token = 'BQDZgw8Fxe9QSgk_SONF7lj5ty0qp0m9a3UvqpcaUhUaEI8wxwqgFHtODVC08kjxegQ-cJix9aqXKxnhYqeQ3cbUHUJAol-P5QengEcvfriq1pgtvZoA4NykLDxgdkBm5sM8bqEA1EywLOMPF5DiiQibfPg'
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/' 
     console.log('FetchURL', FETCH_URL);   
               
     var searchArtist={
      method:'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
      mode:'cors',
      cache:'default'
      
      
      };  
       fetch(FETCH_URL,searchArtist)
      .then(response => response.json())         
      .then(json => {
      const artist = json.artists.items[0]

        console.log('artist',artist)
        
        this.setState({artist:artist});
       
       FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
       var searchAlbum = {
       method:'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
      mode:'cors',
      cache:'default'

       };

       fetch(FETCH_URL,searchAlbum)
      .then(response => response.json())  
      .then(json => {
        console.log('top tracks' , json)
        const tracks = json.tracks;
        this.setState({tracks});
      })

      })
        
        
        
      
   }
     
  render (){
  return(
     
      <div className="App"> 
       <div className="App-title"> Music Master </div>
      
      <FormGroup>
        <InputGroup>

          <FormControl
          
          value={this.state.query}
          onChange = {event =>{this.setState({query:event.target.value})}}
          onKeyPress = {event => {
            
            if(event.key === 'Enter'){
            
            this.search()

            }

          }}
         type="text"
         placeholder ="search for an artist.."/>
         <InputGroup.Addon onClick = {()=>this.search()}>
         <Glyphicon glyph="search"></Glyphicon>
         </InputGroup.Addon>
       </InputGroup>
     </FormGroup>
     {

      this.state.artist !== null 
     ? 
     <div>
     <Profile artist = {this.state.artist}/>
      <Gallery tracks = {this.state.tracks}/>
     </div>
     : <div> </div>
     }
      
        
      </div>
    
   
  	)

  }

}