import React from 'react';


class Content extends React.Component {
 
  render() {

    return (
      <div className="content-page mt-5 mb-5 text-center">
          <h2 style={{color: "Dark"}}>{this.props.contenttitle}</h2>

      </div>
    );
  }
}

export default Content;