import React from "react";

class PostInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            handle: '',
            desc: ''
        };
        this.nameChange = this.nameChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.descChange = this.descChange.bind(this)
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

    descChange(event){
        this.setState({
            desc: event.target.value
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
                    <input className="input-desc" value={this.state.desc} onChange={this.descChange} placeholder="What's on your mind?"/>
                    <button className="button-primary">Submit</button>
                </div>
                <p>Name: {this.state.name}</p>
                <p>Handle: @{this.state.handle}</p>
                <p>Description: {this.state.desc}</p>
            </div>
        );
    }
}

export default PostInput;