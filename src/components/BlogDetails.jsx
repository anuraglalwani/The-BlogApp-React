import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const{id}=useParams();
    const{error,isPending, data :blog}=useFetch("http://localhost:8000/blogs/"+id);
    const history= useHistory();
    function handleDelete(){
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:'DELETE',
            } 
           )
           .then(()=>{
               console.log("blog deleted");
              // history.go(-1);
              history.push("/");
           });
           
    }
    return ( <div className="blog-details">
        {isPending&&<h1>Loading...</h1>}
        {blog&&(<div>
         <article>
           <h2>{blog.title}</h2>
           <p>Written by { blog.author }</p>
           <div>{blog.body}</div>
         </article>
         <button onClick={handleDelete}>delete</button>
         </div>)}
    </div> );
}
 
export default BlogDetails;