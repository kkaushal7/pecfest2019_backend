import React, {Component} from 'react';

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

class Home extends Component {

    render() {
        return (
            <div>

                <svg id={"pecfestTitle"} viewBox="0 0 600 150">
                    <symbol id="s-text">
                        <text text-anchor="middle" x="50%" y="40%" dy=".35em">PECFEST'19</text>
                    </symbol>
                    <use className="text" xlinkHref="#s-text"></use>
                    <use className="text" xlinkHref="#s-text"></use>
                    <use className="text" xlinkHref="#s-text"></use>
                    <use className="text" xlinkHref="#s-text"></use>
                    <use className="text" xlinkHref="#s-text"></use>
                </svg>

            </div>
        );
    }
}

export default Home;