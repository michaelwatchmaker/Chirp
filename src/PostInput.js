import React from "react";
import Card from "./Card";
import Post from "./Post";

class PostInput extends React.Component {

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
                <div className="form-wrap">
                    <div className="profile-wrap">
                        <input className="input-name" value={this.state.name} onChange={this.nameChange} placeholder="Name"/>
                        <input className="input-handle" value={this.state.handle} onChange={this.handleChange} placeholder="Handle"/>
                    </div>
                    <input className="input-desc" value={this.state.content} onChange={this.contentChange} placeholder="What's on your mind?"/>
                    <button className="button-primary" type="submit" onClick={this.addData}>Submit</button>
                </div>
                <div>
                    {this.feedData}
                </div>
            </div>
        );
    }
}

export default PostInput;