import React from "react";
import './Practice.css'
import Blog from "./component/Blog";
const Practice=()=>{
return(
<div  className="App">
<div className="navbar">
<ul>
<li>Home</li>
<li>Blog</li>
<li>Contact</li>
</ul>

</div>
<div>
    <Blog/>
</div>
</div> 
)
}
export default Practice;