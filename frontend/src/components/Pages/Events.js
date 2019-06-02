import React, {Component} from 'react';
import Category from '../events/Category';
const events = ['Technical','Cultural', 'Lectures', 'Workshops'];
class Events extends Component {

    render() {
        return (
            <div className={"row overlay-2"} style={{color:"black", height:"100%", width:"100%", position:"fixed", left: "0", top:"0", textAlign: "center"}}>
                {
                    events.map((event, index) => (
                        <Category key={index} category={event} id={index}/>
                    ))
                }
            </div>
        );
    }
}

export default Events;