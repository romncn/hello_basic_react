import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse navbar-fixed navbar-dark navbar-color">
          <a class="navbar-brand " href="#">RomReact</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/" class="nav-link">Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Profile" class="nav-link">Profile
                </Link>
                {/* <a class="nav-link" href="/Profile">Profile</a> */}
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

export default Header;
