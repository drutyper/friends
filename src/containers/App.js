import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
    const {animals, searchfield} = this.state;
    const filteredAnimals = animals.filter(animal =>{
      return animal.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>AsianFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList animals={filteredAnimals} />
          </ErrorBoundry>  
        </Scroll>
      </div>
    );
  }
}

export default App;