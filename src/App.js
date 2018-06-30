import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({animals: users}));
  }


  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }

  render() {
    const filteredAnimals = this.state.animals.filter(animals =>{
      return animals.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>AsianFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList animals={filteredAnimals} />
        </Scroll>
      </div>
    );
  }
}

export default App;