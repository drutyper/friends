import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({animals: users}));
  }

  render() {
    const { animals } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredAnimals = animals.filter(animal =>{
      return animal.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>AsianFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList animals={filteredAnimals} />
          </ErrorBoundry>  
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);