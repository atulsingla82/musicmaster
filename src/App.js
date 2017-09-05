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
    //  Music Graph API
    const apiKey = 'a4f84009c7dcb51b908706853f47c23c';
    const BASE_URL = 'http://api.musicgraph.com/api/v2/artist/';
    const FETCH_URL = BASE_URL + 'search?api_key='+ apiKey
                      +'&name='+ this.state.query+'&limit=5';
    // const FETCH_URL = `${BASE_URL}search?api_key=${apiKey}
    //                   &name=${this.state.query}&limit=5`;                  
     console.log('FetchURL', FETCH_URL);   

     fetch(FETCH_URL, {
      method:'GET'
    
      })  

      .then(response => response.json())         
      .then(json=> {
        
        const artist = json.data[0]
        console.log(artist)
        this.setState({artist});
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