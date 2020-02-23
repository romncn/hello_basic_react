import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      message: "Like",
      type: "",
    };
    this.checkMessage = this.checkMessage.bind(this);
    this.insertData = this.insertData.bind(this);
  }
  checkMessage() {
    this.setState({
      message: "Unlike"
    });
  }
  insertData(){
      var item="React";
      var myArray = this.state.data;
      myArray.push(item);
      this.setState({
        data: myArray
      });
  }
  render() {
    return (
      <div className="flex-wrapper">
        <div className="Top-page">
          <Header headertitle={"Welcome to Basic React By Romncn"} />
          <Content contenttitle="Name Persons" nameps1="Rom" nameps2="Natchanon" />
          <h3>{this.state.message}</h3>
          <button onClick={this.checkMessage}>Click</button>
          <h3>{this.state.data}</h3>
          <button onClick={this.insertData}>Insert</button>
        </div>

        <div className="Buttom-page">
          <Footer />
        </div>

      </div>
    );
  }
}






export default App;
