import React from "react";
import { Row } from "react-bootstrap";
import '../../style.css';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

class ToggleableAnswer extends React.Component{
    constructor(props){
        super(props);
        this.toggleCondition = this.props.toggleYes;
        this.state = { isToggledOn: this.toggleCondition};
        this.isClicked = this.isClicked.bind(this);
    }

    isClicked(){
        this.setState(previousState => ({
            isToggledOn: !previousState.isToggledOn
        }));
    }

    render(){
        return(
            <Row className="collapsible-group">

                <div onClick={this.isClicked} className="expand-button">{this.state.isToggledOn ? <AiOutlineMinus/> : <AiOutlinePlus/> }</div>
                
                <p className={this.state.isToggledOn ? "group-content active":"group-content"} style={{fontSize: 22}}>
                    {this.props.children}
                </p>
                
                
            </Row>
        );
    }
}

export default ToggleableAnswer;