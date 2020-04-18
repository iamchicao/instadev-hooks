import React from 'react';
import './Feed.scss';
import Loading from '../components/Loading';
import User from '../components/User';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    const usersList = fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');

    usersList
      .then((res) => res.json())
      .then(dados => this.setState({ users:  dados }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        <section className="feed">
          { users.length > 0
            ? users.map((cadaUser) => (
              <User
                key={cadaUser.id}
                infoUser={cadaUser}
              />
            ))
            : <Loading />
          }
        </section>
      </div>
    );
  }
}

export default Users;
