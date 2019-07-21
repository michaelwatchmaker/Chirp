import React from "react";

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="card">
                <div>{this.props.children}</div>
            </div>
        );
    }

}

export default Card;