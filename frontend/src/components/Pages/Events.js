import React, {Component, Fragment} from 'react';
import Card from '../eventscard/Card';
import Cultural from '../../../static/imgs/Cultural_event.jpg';
import Technical from '../../../static/imgs/Techno.jpg';
import "../../styles/components/Events.scss";
import "../../styles/animations/Animation.scss";
class Events extends Component {
    
    render() {
      
        return (
            <Fragment>
        
        <div className="eventsPage" id="events-section">
          <div className="container">
            <div>
              <h2 className="headline-section wow jackInTheBox">EVENTS</h2>
              <h4
                className="subline-section wow jackInTheBox"
                data-wow-duration="0.6s"
                data-wow-delay="0.3s"
              >
                Some exciting events that are taking place
              </h4>
              <div className="events">
                
                  <Card title="Cultural" src={Cultural} />
                  <Card title="Technical" src={Technical}/>
                
              </div>
            </div>
          </div>
        </div>
        
      </Fragment>
        );
    }
}

export default Events;