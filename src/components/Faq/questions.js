import React from "react";
import { Row } from "react-bootstrap";
import './faq.css';

class ToggleableAnswer extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggledOn: false};

        this.isClicked = this.isClicked.bind(this);
    }

    isClicked(){
        this.setState(previousState => ({
            isToggledOn: !previousState.isToggledOn
        }));
    }

    expandText(){
        console.log(this.props.children);
        return (this.props.children)
    }

    render(){
        return(
            <Row className="collapsible-group">
                <div onClick={this.isClicked} className="expand-button">+</div>
                <p className="group-content">{this.state.isToggledOn ? this.expandText(): ""}</p>
            </Row>
        );
    }
}

export default ToggleableAnswer;