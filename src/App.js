import React from 'react';
import {CardList} from './components/card-list/card-list.components'
import { SearchBox } from './components/search-box/search-box.components';
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monster:[],
      searchField: ''
  }
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}))
  }
  
  render (){
    const {monster, searchField} = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
   return (<div>
   <h1>Mosters Rolodex</h1>
   <SearchBox placeholder='Search Monters' handleChange={this.handleChange}/>
   <CardList monster={filteredMonster}/>
     
    </div>)
  }
}

export default App;
