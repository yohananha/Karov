import React,{Component} from 'react';
import './App.css';
import Nav from './Components/NavScroll/Nav';
import Map from './Components/Map/Map';


class App extends Component{
  render(){
    return(
      <div className="App">
        karov
        <Map/>
        <Nav/>
      </div>
    );
  }
}

export default App;

