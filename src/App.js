import React,{Component} from 'react';

export default class App extends Component {

  render (){
  return(
     
      <div> 
       <div className="App-title"> Music Master </div>
      <div>
      <input placeholder =" search for an artist.." />
      <button > Submit </button>

       </div>
        <div className="Profile"> 
         <div> Artist Profile </div>
         <div> Artist Picture </div>
        </div>
      <div className="Gallery"> Gallery </div>

      </div>
    
   
  	)

  }


}