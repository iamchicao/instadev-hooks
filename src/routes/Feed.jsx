import React, { useState, useEffect } from "react";

import Post from "../components/Post";
import Loading from "../components/Loading";

import "./Feed.scss";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) => {
    return users.find((user) => postUserId === user.id);
  };

  useEffect(() => {
    const usersList = fetch(
      "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
    );

    usersList.then((res) => res.json()).then((dados) => setUsers(dados));
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    fetch(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`
    )
      .then((res) => res.json())
      .then((dados) => {
        setPosts([...posts, ...dados]);
        setUsersFetched(usersFetched + 1);
      });
  }, [users, usersFetched]);

  return (
    <div className="container">
      <section className="feed">
        {posts.length > 0 ? (
          posts.map((cadaPost) => (
            <Post
              key={cadaPost.id}
              infoPost={cadaPost}
              infoUsuario={getUserPostById(cadaPost.userId)}
            />
          ))
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default Feed;
