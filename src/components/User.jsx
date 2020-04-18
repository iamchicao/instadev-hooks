import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

class User extends React.Component {
  render() {
    const { infoUser } = this.props;

    return (
      <article className="post">
        <header className="post__header">
          <div className="user">
            <Link to={`/users/${infoUser.username}`} className="user__thumb">
              <img src={infoUser.avatar} alt={infoUser.name} />
            </Link>

            <Link to={`/users/${infoUser.username}`} className="user__name">{infoUser.name}</Link>
          </div>

          <button className="post__context">
            <i className="fas fa-ellipsis-h" />
          </button>
        </header>
      </article>
    )
  }
}

export default User;
