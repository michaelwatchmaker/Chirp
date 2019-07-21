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
                <div className="feed-wrap">
                    <Card>
                        <Post
                            color = "mediumseagreen"
                            name = "Michael Watchmaker"
                            handle = "@michael"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisi sit amet dolor viverra sollicitudin. Mauris et ullamcorper leo. Fusce egestas turpis sit amet vulputate egestas. Sed lacinia dapibus mi sed consectetur. Donec pharetra vitae ex eu pretium. Quisque vitae tincidunt leo. In pharetra purus lectus, nec tempus sapien tempor nec."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "coral"
                            name = "Jay Lucien"
                            handle = "@jay"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "mediumpurple"
                            name = "Ethan Faye"
                            handle = "@ethan"
                            content = "HeyDoctor this is Ethan."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "lightskyblue"
                            name = "Mr. Krabs"
                            handle = "@krabby"
                            content = "That smell. A kind of smelly smell. A smelly smell that smells...smelly. ANCHOVIES!!!!"
                        />
                    </Card>
                    <p className="feed-end">End of the feed</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
