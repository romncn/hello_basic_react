import React from 'react';


class Content extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'Rom',
  //     status: 'Pause',
  //     count: 0,
  //     data: [],
  //     message: "Like",
  //     type: " "
  //   };
  //   this.checkMessage = this.checkMessage.bind(this);
  //   this.insertData = this.insertData.bind(this);
  // }
  // checkMessage() {
  //   if (this.state.message == "Like") {
  //     this.setState({
  //       message: "Unlike"
  //     });
  //   } else {
  //     this.setState({
  //       message: "Like"
  //     })
  //   }
  // }
  // insertData() {
  //   var item = "React";
  //   var myArray = this.state.data;
  //   myArray.push(item);
  //   this.setState({
  //     data: myArray
  //   });
  // }
  // onChange(event) {
  //   this.setState({
  //     type: event.target.value
  //   })
  // }
  // Alert() {
  //   swal.fire('Any fool can use a computer')
  // }
  render() {

    return (
      <div>
        {/* <h3>{this.state.message}</h3>
          <button onClick={this.checkMessage}>Click</button>
          <h3>{this.state.data}</h3>
          <button onClick={this.insertData}>Insert</button>
          <p /><button onClick={this.Alert}>Alert</button>
          <p /><input type="text" onChange={this.onChange.bind(this)}></input>
          <p /><h1>Show : {this.state.type}</h1>
        <p>{this.state.name}</p>
        <p>{this.state.status}</p>
        <p>{this.state.count}</p> */}
          <h2>{this.props.contenttitle}</h2>

      </div>
    );
  }
}

export default Content;