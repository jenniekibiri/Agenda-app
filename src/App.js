 import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route}from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import uuid from 'uuid'
import About from './components/pages/About';
export class App extends Component {
  //we create state above the render the functions too
  state ={ 
     todos:[
       {
      id:uuid.v4(),
    title:"hello am coding tonight",
    completed:false
  },
    {
      id: uuid.v4(),
      title: "will attend a group discusion tomorrow",
      completed:true
    },
    {
      id: uuid.v4(),
      title: "will sleep less hours today",
      completed: true
    }

]
  }
  markComplete =(id)=>{
   // seting the state of the completed stuff
   this.setState({todos:this.state.todos.map(todo =>{
     if(todo.id === id){
       todo.completed =!todo.completed
     }
     
       return todo; 
     
   })})
  }
  //delete btn  
  delBtn =(id)=>{
//filter method   
 this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})
  }
  addTodo =(title) =>{
   const newTodo ={
     id: uuid.v4(),
     title,
     completed:false
   }
   this.setState({todos:[...this.state.todos,newTodo]})
  }
  render() {
    return (
     <Router>
        <div className='App'>
          <div className="container">
          <Header />
          <Route exact path ="/" render ={props =>(
           <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delBtn={this.delBtn} />
           </React.Fragment>
          )}/>
        <Route path ="/about" component={About}/>
          </div>
      
        </div>
     </Router>
    )
  }
}
export default App