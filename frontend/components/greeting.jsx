import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <span>
            Hi! {this.props.currentUser.username}
          </span>
          <button onClick={(e) => this.logout(e)}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup"> Sign up </Link>
          <Link to="/login"> Log in </Link>
        </div>
      );
    }
  }
}

export default Greeting;
