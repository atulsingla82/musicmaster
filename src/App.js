//Import React Component

import React,{Component} from 'react';
// Import React-Bootstrap Components

import { FormGroup,InputGroup, Glyphicon, FormControl} from 'react-bootstrap'
import './App.css'

import Profile from './Profile'
export default class App extends Component {

  // Setting  Initial state to an empty string
  constructor(props){
    super(props);

    this.state = {
    query:"",
    artist: null	
    	 }

  }
   
   search() {
    
    // console.log('this.state',this.state)
    //================================================
    //  Spotify API
    
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    const FETCH_URL = BASE_URL + 'q='+ this.state.query + '&type=artist&limit=1';
    var access_token = 'BQDx9DUjXG3Ipx2OsfgCfr1MqMzA5gi_gsuA3Ne0UelY7BZsrUVZfA3XzmbB190dgImpgeN1oxyloSpbV97QwE0iozNDnZi24asDdkz383uY8Vp9-2fd1wcnhhyIwsN85G9vGJar-pO5vApVuO6ZmArpU5M'
     console.log('FetchURL', FETCH_URL);   
               
     var myOptions={
      method:'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
      mode:'cors',
      cache:'default'
      
      
      };  
       fetch(FETCH_URL,myOptions)
      .then(response => response.json())         
      .then(json => {
        const artist = json.artists.items[0]

        console.log('artist',artist)
        
        this.setState({artist:artist});


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
      
        <Profile artist = {this.state.artist}/>
      <div className="Gallery"> Gallery </div>

      </div>
    
   
  	)

  }

}