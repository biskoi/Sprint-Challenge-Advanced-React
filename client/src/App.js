import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import axios from 'axios';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  
  componentDidMount = () => {

    axios.get('http://localhost:5000/api/players')
    .then(res => {
      // console.log(res.data);
      this.setState({
        players: res.data
      })
    })
    .catch(err => console.log(err))
  }

render() {
  return (
    <div className="App">
      <PlayerList players = {this.state.players}/>
    </div>
  );
}


}
