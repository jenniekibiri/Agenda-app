import React from 'react';
import {Link} from 'react-router-dom';
function Header (){
    return(
    <header style={headerStyle}>

<h2>TodoList</h2>
<Link style ={linkStyle} to ="/">Home</Link> |
            <Link style={linkStyle} to="/about">About</Link>
    </header>
    )
}
const headerStyle ={
    background :'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
const linkStyle ={
    color:'#fff',
    textDecoration:'none'
}
export default Header;
 