import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component { // the component is grabbed from the React Library at the top
  constructor(){
    super();

    this.state = { //sets the default state
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // this accesses the data from the page
    .then(response =>   // this grabs the body of the data
      response.json())    // this returns the body of the data in a format of json file

    .then(users => this.setState({monsters: users})); // this overrides the state above with
    // json body data. Particularly the data under 'users'
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  };

  
  render(){
    const  { monsters, searchField } = this.state;
    // this const is also know as or equivalent to:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />

        <CardList monsters={filteredMonsters}/>  {/* this will pass the data from the state*/} 
      </div>
    );
  }

}

export default App;
