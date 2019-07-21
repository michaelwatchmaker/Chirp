import React from 'react';
import ReactDOM from 'react-dom';
import Post from "./Post";
import Card from "./Card";

class App extends React.Component {

    constructor(props){
        super(props);

        this.feedData = [];

        this.state = {
            showData: this.feedData,
            name: '',
            handle: '',
            content: ''
        };

        this.nameChange = this.nameChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.contentChange = this.contentChange.bind(this);

        this.addData = this.addData.bind(this);
    }

    addData() {
        this.feedData.unshift(
            <Card>
                <Post 
                    name = {this.state.name}
                    handle = {this.state.handle}
                    content = {this.state.content}
                />
            </Card>
        );

        this.setState({
            showdata : this.feedData,
            name: '',
            handle: '',
            content: ''
        });
    }

   nameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    handleChange(event){
        this.setState({
            handle: event.target.value
        });
    }

    contentChange(event){
        this.setState({
            content: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Chirp.</h1>
                <div className="form-wrap">
                    <div className="profile-wrap">
                        <input className="input-name" value={this.state.name} onChange={this.nameChange} placeholder="Name"/>
                        <input className="input-handle" value={this.state.handle} onChange={this.handleChange} placeholder="Handle"/>
                    </div>
                    <input className="input-desc" value={this.state.content} onChange={this.contentChange} placeholder="What's on your mind?"/>
                    <button className="button-primary" type="submit" onClick={this.addData}>Submit</button>
                </div>
                <div className="feed-wrap">
                    <div>
                        {this.feedData}
                    </div>
                    <Card>
                        <Post
                            color = "mediumseagreen"
                            name = "Michael Watchmaker"
                            handle = "michael"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisi sit amet dolor viverra sollicitudin. Mauris et ullamcorper leo. Fusce egestas turpis sit amet vulputate egestas. Sed lacinia dapibus mi sed consectetur. Donec pharetra vitae ex eu pretium. Quisque vitae tincidunt leo. In pharetra purus lectus, nec tempus sapien tempor nec."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "coral"
                            name = "Jay Lucien"
                            handle = "jay"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "mediumpurple"
                            name = "Ethan Faye"
                            handle = "ethan"
                            content = "HeyDoctor this is Ethan."
                        />
                    </Card>
                    <Card>
                        <Post
                            color = "lightskyblue"
                            name = "Mr. Krabs"
                            handle = "krabby"
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
