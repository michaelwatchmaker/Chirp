import React from 'react';
import ReactDOM from 'react-dom';
import PostInput from "./PostInput";
import Post from "./Post";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        } 
    }

    render(){
        return(
            <div>
                <h1>Fwitter</h1>
                <PostInput/>
                <Post
                    title = "Michael"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
