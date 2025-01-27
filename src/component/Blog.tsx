
import blogData from "../blog.json";
import "../Practice.css";
import "./Sample.tsx"
type Blog={
    id:number,
    title:string,
    cover:string,
    author:string
}

const Blog=()=>{
return(
    <>
    <div className="container">
        <div className="blog">
            {blogData.map((blog:Blog)=>
       
            
            <div className="card">
             <img src={blog.cover}alt=""/>
            <div className="details">
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>
            </div>
            </div>
            )}

        </div>
    </div>
  
    </>
)
}
export default Blog;