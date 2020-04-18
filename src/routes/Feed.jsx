import React from 'react';
import './Feed.scss';
import Loading from '../components/Loading';
import Post from '../components/Post';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      usersFetched: 0,
    }
  }

  componentDidMount() {
    const usersList = fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');

    usersList
      .then((res) => res.json())
      .then(dados => this.setState({ users:  dados }));
  }

  componentDidUpdate() {
    const { users, posts, usersFetched } = this.state;

    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(dados => this.setState({
        posts: [...posts, ...dados],
        usersFetched: usersFetched + 1,
        loading: false,
      }))
  }

  getUserPostById(postUserId) {
    const { users } = this.state;

    return users.find(user => postUserId === user.id);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <section className="feed">
          { posts.length > 0
            ? posts.map((cadaPost) => (
              <Post
                key={cadaPost.id}
                infoPost={cadaPost}
                infoUsuario={this.getUserPostById(cadaPost.userId)}
              />
            ))
            : <Loading />
          }
        </section>
      </div>
    );
  }
}

export default Feed;
