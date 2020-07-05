import React from 'react';
import Todo from './Todo';
// import uuid from 'uuid/v4';
// import Button from '@material-ui/core/Button';

class TodoList extends React.Component {
    


    render() {

        return (
            <div>
                <ul>
                    {
                        // this.state.todos.map(<Todo />)
                        this.props.todos.map(item => (
                                <Todo key={item.id} todo={item} tuggleComplete={this.props.tuggleComplete} removeTodo={this.props.removeTodo} />
                            )
                        )
                        
                        
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;