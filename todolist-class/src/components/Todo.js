import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {checked: false, appear: true};
        
    }

    handleCheckboxChanged() {
        this.props.tuggleComplete(this.props.todo.id);
    }

    handleClick(e) {
        this.props.removeTodo(this.props.todo.id);
    }

    render() {

        return (
            <div style={{
                display: "flex",
                                
            }}>
                <input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.handleCheckboxChanged} />
                <li id={this.props.id} style={{
                    listStyleType: "none",
                    fontSize: "1.4em",
                    textDecoration: this.props.todo.completed === false ? "none" : "line-through"
                }}>{this.props.todo.text}</li>
                <button onClick={this.handleClick} >X</button>
            </div>            
        );
    }
}

export default Todo;