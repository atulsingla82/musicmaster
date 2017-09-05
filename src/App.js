import React,{Component} from 'react';
import { FormGroup,InputGroup, Glyphicon, FormControl} from 'react-bootstrap'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    
    query:""
    	
    }

  }
   
   search() {
    
    console.log('this.state',this.state)
    const apiKey = 'a4f84009c7dcb51b908706853f47c23c';
    const BASE_URL = 'http://api.musicgraph.com/api/v2/artist/';
    const FETCH_URL = BASE_URL + 'search?api_key='+ apiKey
                      +'&name='+ this.state.query+ '&limit=1';
     console.log('FetchURL', FETCH_URL);              

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
      
        <div className="Profile"> 
         <div> Artist Profile </div>
         <div> Artist Picture </div>
        </div>
      <div className="Gallery"> Gallery </div>

      </div>
    
   
  	)

  }

}