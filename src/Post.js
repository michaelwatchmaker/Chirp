import React from "react";

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className=" card post">
                <h3>Post:</h3>
                <p>Title: {this.props.title}</p>
                <p>Description: {this.props.desc}</p>
            </div>
        );
    }
}

export default Post;