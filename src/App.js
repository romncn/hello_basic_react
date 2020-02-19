import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
          <h1>Welcome to Basic React By Romncn</h1>
      </div>
    );
  }
}


class Content extends React.Component {
  render() {
    return (
      <div>
            <h2>React Content</h2>
      </div>
    );
  }
}


class Footer extends React.Component {
  render() {
    return (
      <div>
          <h3>Thank you for coding ♥</h3>
      </div>
    );
  }
}


export default App;
