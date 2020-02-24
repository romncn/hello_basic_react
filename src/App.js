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

        <div className="Top-page mb-5">
          <Header />
          <div className="container">
            <Content contenttitle="Show Basic React" />
            <div className="row">
              <div className="col">
                <div class="alert box-pink show-box">
                  <h2 className="text-center bg-dark p-2">State Change Message</h2>
                  <p/><h3>{this.state.message}</h3>
                  <button onClick={this.checkMessage}>Click</button>
                </div>
              </div>

              <div className="col">
                <div class="alert box-danger show-box">
                <h2 className="text-center bg-dark p-2">State Insert Data</h2>
                  <p/><h3>{this.state.data}</h3>
                  <button onClick={this.insertData}>Insert</button>
                </div>
              </div>

              <div className="col">
                <div class="alert box-info show-box">
                <h2 className="text-center bg-dark p-2">Click to show Alert</h2>
                  <p /><button onClick={this.Alert}>Alert</button>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div class="alert box-warning show-box">
                <h2 className="text-center bg-dark p-2">Insert text to show</h2>
                  <p /><input type="text" onChange={this.onChange.bind(this)} maxLength="12" placeholder="can input 12 text"></input>
                  <p /><h1>Show : {this.state.type}</h1>
                </div>
              </div>

              <div className="col">
                <div class="alert box-success show-box">
                <h2 className="text-center bg-dark p-2">Show Change state status</h2>
                  <p>{this.state.status}</p>
                </div>
              </div>

              <div className="col">
                <div class="alert box-purple show-box">
                <h2 className="text-center bg-dark p-2">State interval count +1 </h2>
                  <p>{this.state.count}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="Buttom-page">
          <Footer />
        </div>

      </div>
    );
  }
}






export default App;
