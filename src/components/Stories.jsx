import React from "react";
import './Stories.scss';

class Stories extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="stories">
          <div className="stories__container">
            <a href="#" className="user__thumb">
              <span className="user__thumb__wrapper">
                <img src="assets/img/profiles/yoda/yoda-profile.jpg" alt="" />
              </span>
            </a>

            <a href="#" className="user__thumb user__thumb--hasNew">
              <span className="user__thumb__wrapper">
                <img src="assets/img/profiles/gamora/gamora-profile.jpg" alt="" />
              </span>
            </a>

            <a href="#" className="user__thumb">
              <span className="user__thumb__wrapper">
                <img src="assets/img/profiles/black-panther/black-panther-profile.jpg" alt="" />
              </span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Stories;
