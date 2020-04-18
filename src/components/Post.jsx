import React, { useState } from 'react';
import './Post.scss';

const Post = ({ infoPost, infoUsuario }) => {
  const [like, setLike] = useState(false);

  return (
    <article className="post">
      <header className="post__header">
        <div className="user">
          <a href="#" className="user__thumb">
            <img src={infoUsuario.avatar} alt={infoUsuario.name} />
          </a>

          <a href="#" className="user__name">
            {infoUsuario.name}
          </a>
        </div>

        <button className="post__context">
          <i className="fas fa-ellipsis-h" />
        </button>
      </header>

      <figure className="post__figure">
        <img src={infoPost.imageUrl} alt="" />
      </figure>

      <nav className="post__controls">
        <button
          className="post__control"
          onClick={() => setLike(!like )}
        >
          {like ? (
            <i className="fas fa-heart" />
          ) : (
            <i className="far fa-heart" />
          )}
        </button>

        <button className="post__control">
          <i className="far fa-comment" />
          <span className="comments__counter">{infoPost.comments.length}</span>
        </button>

        <button className="post__control">
          <i className="far fa-bookmark" />
        </button>
      </nav>

      {infoPost.comments.length > 0 && (
        <div className="post__status">
          <div className="user">
            <a href="#" className="user__thumb">
              <img src={infoPost.comments[0].avatar} alt="" />
            </a>

            <span>
              comentado por <a href="#">{infoPost.comments[0].name}</a> e outras{" "}
              <a href="#">{infoPost.comments.length - 1} pessoa(s).</a>
            </span>
          </div>
        </div>
      )}
    </article>
  );
};

export default Post;
