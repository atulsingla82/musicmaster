import React,{Component} from 'react';
import { FormGroup,InputGroup, Glyphicon, FormControl} from 'react-bootstrap'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    
    query:" "
    	
    }

  }
   
   search() {
    
    console.log('this.state',this.state)

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