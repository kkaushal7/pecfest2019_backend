import React, {Component, Fragment} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import './EventsPage.scss';
class Events extends Component  {
   
    imageClick = () => {
        console.log('Click!!!!');
      }  
  render() {
  return (
    <Fragment>  
    <div className="eventsPage">
    <div className="carousel">
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        <div className="caro">
         <div>
             <MDBView>
            <img
              className="items"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
              onClick={this.imageClick}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          </div>
          <div>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Cultural</h3>
            <p>events that relate to a specific culture; events that are representative of a culture (may be related to music, art or other similar things)</p>
          </MDBCarouselCaption>
          </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
        <div className="caro">
         <div>
          <MDBView>
            <img
              className="items"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          </div>
          <div>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Technical</h3>
            <p>As the name suggests, a technical event is an event organized by engineering college to host an event related to a technical aspect of what they learn. It is a means for students to showcase their practical talent in the field they?re learning, and not just limit themselves to bookish knowledge.</p>
          </MDBCarouselCaption>
          </div>
          </div>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </div>
    </div>
    </Fragment>
  );
  }
}

export default Events;