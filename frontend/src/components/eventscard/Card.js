import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import "../../styles/components/Events.scss";
import "../../styles/animations/Animation.scss";


export default class Card extends Component {
  static defaultProps = {
    src: null,
    title: null,
  };
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
  };
    render() {
      const {
        src, title
      } = this.props;
        return (
            <Fragment>
                <div
                  data-wow-duration="1s"
                  className="event fadeInDown"
                >
                  <div className="card">
                    <div className="card-item card-front">
                      <img src={src} alt="cultural" />
                      <div className="headText">
                        <p>{title}</p>
                      </div>
                    </div>
                    <div className="card-item card-back">
                      <img src={src} alt="cultural" />
                      <div className="eventName">
                        <p>{title}</p>
                      </div>
                      <div className="headText">
                        <p>Know More</p>
                      </div>
                    </div>
                  </div>
                  </div>
            </Fragment>
        );
    }
}