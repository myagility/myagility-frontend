import React from 'react';
import axios from 'axios';
import './Users.css';

class Users extends React.Component {

  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then((response) => {
        console.log(response.data);
        this.setState({users: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const renderedUsers = this.state.users.map((user, index) => <li key={ index }><img src={ user.avatar_url } />{ user.login }</li>);
    return (
      <div>
        <p></p>
        <ul>
          { renderedUsers }
        </ul>
      </div>
    )
  }
}

export default Users;
