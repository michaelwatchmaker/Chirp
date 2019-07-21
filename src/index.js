import React from 'react';
import ReactDOM from 'react-dom';
import PostInput from "./PostInput";
import Post from "./Post";
import Card from "./Card";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        } 
    }

    render(){
        return(
            <div>
                <h1>Chirp.</h1>
                <PostInput/>
                <Card>
                    <Post
                        name = "Michael Watchmaker"
                        handle = "@michael"
                        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisi sit amet dolor viverra sollicitudin. Mauris et ullamcorper leo. Fusce egestas turpis sit amet vulputate egestas. Sed lacinia dapibus mi sed consectetur. Donec pharetra vitae ex eu pretium. Quisque vitae tincidunt leo. In pharetra purus lectus, nec tempus sapien tempor nec."
                    />
                </Card>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
