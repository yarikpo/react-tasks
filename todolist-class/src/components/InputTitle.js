import React from 'react';
// import TodoList from './TodoList';
import {v4 as uuid} from 'uuid';
// import Button from '@material-ui/core/Button';

const NEED_LOGS = true;

class InputTitle extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { inputText: "" };
    }

    handleInputChange(e) {
        this.setState({inputText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.inputText.trim() !== '') {
            if (NEED_LOGS === true) {
                console.log('handleSubmit');
            }
            this.props.addTodo({text: this.state.inputText, id: uuid(), completed: false});
        }
        this.setState({inputText: ""});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display: "block", width: "100%"  }}>
                    <span>React Todo list + class</span>
                    <br />
                    <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
                    <input type="submit" value="Send" />
                </form>
                <p>{this.state.inputText}</p>                
            </div>
        );
    }
}

export default InputTitle;