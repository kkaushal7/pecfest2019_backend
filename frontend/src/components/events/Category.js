import React, {Component} from 'react';
import Cult from '../../../public/images/cult.jpg';
import Tech from '../../../public/images/tech.jpg';
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.id,
            img: null
        }
    }

    componentDidMount(){
        this.getImage();
    }

    getImage = () => {
        if(this.state.id === 0 || this.state.id===2){
            this.setState(() => ({img: Tech}));
        }
        else {
            this.setState(() => ({img: Cult}));
        }
    };

    render() {
        return (
            <div className={"col-md-3"} style={{backgroundImage: "url(" + this.state.img + ")"}}>
                This div is for {this.props.category} Category.
            </div>
        );
    }
}

export default Category;