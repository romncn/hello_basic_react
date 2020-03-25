import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import swal from 'sweetalert2';
import { Link } from 'react-router';

const TitleBox = (props) => {
  return (
    <div >
      <h2 className="text-center bg-dark p-2">{props.texttitlebox}</h2>
      <p className="pt-5" />
    </div>
  )
}


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
    swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })
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
                <div class="alert box-pink show-box text-center">
                  <TitleBox texttitlebox="State Change Message" />
                  <button type="button" class="btn btn-light" onClick={this.checkMessage}>Click</button>
                  <p /><h4>{this.state.message}</h4>
                </div>
              </div>

              <div className="col">
                <div class="alert box-danger show-box text-center">
                  <TitleBox texttitlebox="Click to Insert Data" />
                  <button type="button" class="btn btn-light" onClick={this.insertData}>Insert</button>
                  <p /><h4>{this.state.data}</h4>
                </div>
              </div>

              <div className="col">
                <div class="alert box-info show-box text-center">
                  <TitleBox texttitlebox="Click to show Alert" />
                  <button type="button" class="btn btn-light" onClick={this.Alert}>Alert</button>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div class="alert box-warning show-box text-center">
                  <TitleBox texttitlebox="Insert text to show" />
                  <input type="email" class="form-control" onChange={this.onChange.bind(this)} maxLength="12" placeholder="maximum 12 text"></input>
                  <p /><h4>Show : {this.state.type}</h4>
                </div>
              </div>

              <div className="col">
                <div class="alert box-success show-box text-center">
                  <TitleBox texttitlebox="Show Change state status" />
                  <h4>{this.state.status}</h4>
                </div>
              </div>

              <div className="col">
                <div class="alert box-purple show-box text-center">
                  <TitleBox texttitlebox="State interval count +1" />
                  <h4>{this.state.count}</h4>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div class="alert box-red show-box text-center">
                  <h2 className="text-center bg-dark p-2">Input Form</h2>
                  {/* <TitleBox texttitlebox="Input Form" /> */}
                  <form className="form-inline">
                    <div class="form-row ">
                      <div class="col-auto my-1">
                        <div className="row">
                          <div className="col">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div class=" col">
                            <label for="inputMDEx">Choose your date</label>
                            <input type="date" id="inputMDEx" class="form-control" />
                          </div>
                        </div>
                        <p/> <label for="inputPassword6">Password</label>
                        <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                        <small id="passwordHelpInline" class="text-warning">
                          Must be 8-20 characters long.
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col">
                <div class="alert box-blue show-box text-center">
                  {/* <TitleBox texttitlebox="Location Map"/> */}
                  <h2 className="text-center bg-dark p-2">Location Map</h2>
                  <div id="map-container-google-2" class="z-depth-1-half map-container p-4" style={{ height: "200px" }}>
                    <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sbangkok!6i13" frameborder="0"
                      style={{ border: "0" }} allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
  <div>Hello</div>
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
