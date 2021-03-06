import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
export class Todos extends Component {

    render() {
       
        return this.props.todos.map((todo)=>(
         <TodoItem  key={todo.id} todo ={todo} delBtn ={ this.props.delBtn} markComplete={this.props.markComplete}/>
        ));
    }
}   
Todos.propTypes ={
todos  :PropTypes.array.isRequired
}
 

export default Todos
