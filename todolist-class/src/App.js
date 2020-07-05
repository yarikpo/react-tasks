import React from 'react';
import './App.css';
import InputTitle from './components/InputTitle';
import TodoList from './components/TodoList';
// import Button from '@material-ui/core/Button';

const LOCAL_STORAGE_KEY = "shnvfhufjvdJHYefiuccj7rundyt6u";
const NEED_LOGS = true;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.tuggleComplete = this.tuggleComplete.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) == null) {
            localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify([]));
        }
        this.state = {todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))};
    }

    addTodo(todo) {
        let todos = this.state.todos;
        todos = todos.reverse();
        todos.push(todo);
        todos.reverse();
        console.log(todos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        this.setState({todos: todos});
    }

    tuggleComplete(id) {
        if (NEED_LOGS === true) {
            console.log('tuggleComplete');
        }
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        this.setState({todos: todos});
    }

    removeTodo(id) {
        if (NEED_LOGS === true) {
            console.log('removeTodo');
        }
        let todos = this.state.todos.filter(todo => {
            if (todo.id === id) {
                return false;
            } else {
                return true;
            }
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        this.setState({todos: todos});
    }

    // componentDidUpdate() {
    //     if (this.state.props !== JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))) {
    //         this.setState({todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))});
    //     }
    // }

    render() {

        return (
            <div className="App">
                <InputTitle addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} tuggleComplete={this.tuggleComplete} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

export default App;
