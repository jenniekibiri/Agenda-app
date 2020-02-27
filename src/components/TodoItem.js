import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        //using a ternary opereator
        return {
            padding:'10px',
            backgroundColor:'#f4f4f4',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through':'none'
        }
    }
    //mark checked
   
    render() {
//destructing
const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{'  '}
                {title}
                <button onClick={this.props.delBtn.bind(this,id)} style ={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
TodoItem.protoType ={
    todo:PropTypes.object.isRequired
}
// const itemStyle ={
//     backgroundColor:"#f4f4fa"
// }
const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    padding :'5px 9px',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
export default TodoItem
