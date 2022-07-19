import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import './questions.css';

class ToggleableAnswer extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggledOn: false};

        this.isClicked = this.isClicked.bind(this);
    }

    componentDidMount(){
        this.expandText()
    }

    isClicked(){
        this.setState(previousState => ({
            isToggledOn: !previousState.isToggledOn
        }));
    }

    expandText = () => {
        console.log("color change");

        /*$(this.props.children).css("color", "red")*/

        // return (this.props.children)
    }

    render(){
        return(
            <Row className="collapsible-group">
                {/* <div className={this.state.isToggledOn ? "randomItem active" : "randomItem"}></div> */}

                <div onClick={this.isClicked} className="expand-button">+</div>
                
                <p className={this.state.isToggledOn ? "group-content active":"group-content"}>
                    {this.props.children}
                </p>
                
                
            </Row>
        );
    }
}

export default ToggleableAnswer;