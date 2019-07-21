import React from "react";

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="post">
                <div className="post-header">
                    <div className="post-avatar"></div>
                    <p className="post-name">{this.props.name}</p>
                    <p className="post-handle">{this.props.handle}</p>
                </div>
                <p className="post-content">{this.props.content}</p>
            </div>
        );
    }
}

export default Post;