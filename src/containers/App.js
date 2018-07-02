import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestAnimals } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchAnimals.searchField,
    animals: state.requestAnimals.animals,
    isPending: state.requestAnimals.isPending,
    error: state.requestAnimals.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestAnimals: () => dispatch(requestAnimals())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestAnimals();
  }

  render() {
    const { searchField, onSearchChange, animals, isPending } = this.props;
    const filteredAnimals = animals.filter(animal =>{
      return animal.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
      <h1>Loading</h1> :
      (
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