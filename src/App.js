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
    const acesstoken = 'BQDYlcLosEMGEIlrWE8T5brbFaWDC5SicfnK7mNcKZApSQsTZNks9Z0FNMzgfRcY6agj-35rHbgvpFO76pS1B2fmt319g_EGUdHMT91OEPgNT4vD3eGITTkzZ-_JEu6w_bnIpquWif7QS7NodRfqRYRXh6E'          
    const BASE_URL = 'https://api.spotify.com/v1/search'
    const FETCH_URL = BASE_URL + 'q='+ this.state.query + '&type=artist&limit=1' + 'AuthorizationBearer' + acesstoken;
    
     console.log('FetchURL', FETCH_URL);   

     fetch(FETCH_URL, {
      method:'GET',
      
      
      })  

      .then(response => response.json())         
      .then(json => (console.log(json))
        
        // const artist = json.artists
        // console.log('artist',artist)
        // this.setState({artist});
      )
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