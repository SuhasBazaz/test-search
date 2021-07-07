
import './App.css';

import React, { Component } from 'react'
import CardList from './component/card-list/card-list.component'
import SearchBox from './component/seacrh-box/search-box.component';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()).then(
        users => this.setState({
          monsters: users
        })
      );
  }
  render() {
    const { monsters, searchfield } = this.state
    const filterResult = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div>
        {/* <input type='search' onChange={(e) => this.setState({ searchfield: e.target.value })}></input> */}
        <SearchBox placeholder="Search Monster" handleChange={e => this.setState({ searchfield: e.target.value })} />
        <CardList monsters={filterResult} />
      </div>
    )
  }
}
