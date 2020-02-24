import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import swal from 'sweetalert2';
import { Link } from 'react-router';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Rom',
      status: 'Pause',
      count: 0,
      data: [],
      message: "Like",
      type: " "
    };
    this.checkMessage = this.checkMessage.bind(this);
    this.insertData = this.insertData.bind(this);
  }
  checkMessage() {
    if (this.state.message == "Like") {
      this.setState({
        message: "Unlike"
      });
    } else {
      this.setState({
        message: "Like"
      })
    }
  }
  insertData() {
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({
      data: myArray
    });
  }
  onChange(event) {
    this.setState({
      type: event.target.value
    })
  }
  Alert() {
    swal.fire('Any fool can use a computer')
  }

  render() {
    if (this.state.status == 'Pause') {
      setTimeout(() => {
        this.setState({
          status: "Play"
        });
      }, 4000);
    } else {
      setTimeout(() => {
        this.setState({
          status: "Pause"
        });
      }, 4000);
    }
    //setInterval Loop count
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 4000);

    return (
      <div className="flex-wrapper">

        <div className="Top-page">
          <Header headertitle={"Welcome to Basic React By Romncn"} />
          <Content contenttitle="Show Basic React"/>
          <h3>{this.state.message}</h3>
          <button onClick={this.checkMessage}>Click</button>
          <h3>{this.state.data}</h3>
          <button onClick={this.insertData}>Insert</button>
          <p /><button onClick={this.Alert}>Alert</button>
          <p /><input type="text" onChange={this.onChange.bind(this)}></input>
          <p /><h1>Show : {this.state.type}</h1>
          <h2>{this.props.contenttitle}</h2>
          <p>{this.state.name}</p>
          <p>{this.state.status}</p>
          <p>{this.state.count}</p>

          <Link to="/Profile" >
            <h1>Profile</h1>
          </Link>
        </div>

        <div className="Buttom-page">
          <Footer />
        </div>

      </div>
    );
  }
}






export default App;
