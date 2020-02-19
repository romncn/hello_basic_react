import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

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






export default App;
