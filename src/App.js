import React, { Component } from 'react';
import Header from './components/Header/Header';
import ListsWrapper from './components/ListsWrapper/ListsWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Rodrigo'
    }
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <ListsWrapper>
          <div>teste</div>
          <div>tetete</div>
        </ListsWrapper>
      </div>
    );
  }
}

export default App;
