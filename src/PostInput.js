import React from "react";

class PostInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            desc: ''
        };
        this.titleChange = this.titleChange.bind(this)
        this.descChange = this.descChange.bind(this)
    }

   titleChange(event){
        this.setState({
            title: event.target.value
        });
    }

    descChange(event){
        this.setState({
            desc: event.target.value
        });
    }

    render(){
        return(
            <div>
                <input value={this.state.title} onChange={this.titleChange} placeholder="Title"/>
                <textarea value={this.state.desc} onChange={this.descChange} placeholder="Tell us what you built"/>
                <p>Title: {this.state.title}</p>
                <p>Description: {this.state.desc}</p>
            </div>
        );
    }
}

export default PostInput;