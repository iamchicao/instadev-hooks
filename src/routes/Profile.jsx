import React from "react";
import { useParams } from 'react-router-dom';
import "./Feed.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      avatar: "",
      username: "",
      email: "",
    }
  }

  componentDidMount() {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`)
      .then(response => response.json())
      .then(profileData => this.setState({
        name: profileData[0].name,
        avatar: profileData[0].avatar,
        username: profileData[0].username,
        email: profileData[0].email,
      }));
  }

  render() {
    const { name, username, email, avatar } = this.state;

    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <div className="user">
              <div className="user__thumb">
              { avatar.length > 0
                ? <img src={avatar} alt="" />
                : <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" alt="" />
              }         
              </div>
              <p className="user__name">{name}</p>
              <p className="user__name">{username}</p>
              <p className="user__name">{email}</p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Profile;
