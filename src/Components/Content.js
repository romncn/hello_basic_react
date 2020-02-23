import React from 'react';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Rom',
      status: 'Pause',
      count: 0,
    };
  }
   render() {
    setTimeout(() => {
      this.setState({
        name: "Play"
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        count: this.state.count+1
      });
    }, 4000);

    return (
      <div>
        <h2>{this.props.contenttitle}</h2>
        <p>{this.state.name}</p>
        <p>{this.state.status}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Content;