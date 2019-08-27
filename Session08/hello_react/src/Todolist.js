import React from "react";
import InputForm from "./InputForm";
import TodoItem from "./TodoItem";

class Todolist extends React.Component {

    state = {
        todoItems: []
    }

    onAdd = (value) => {
        this.setState({
            todoItems: [...this.state.todoItems, value]
        })
    }
    
    render() {
        return (
            <div>
                <InputForm onSubmit={this.onAdd} />
                {
                    this.state.todoItems.map(item => <TodoItem key={item} content={item}/>)
                }
            </div>
        )
        
    }
}

export default Todolist;