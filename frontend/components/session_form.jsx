import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(e) {
    let username = e.target.value;
    this.setState({ username });
  }

  updatePassword(e) {
    let password = e.target.value;
    this.setState({ password });
  }

  handleSubmit(e) {
    e.preventDefault();

    
  }

  render() {
    return (
      <div>
        <input onChange={this.updateUsername} placeholder="Username" value={this.state.username}></input>
        <input onChange={this.updatePassword} placeholder="Password" type="password" value={this.state.password}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
