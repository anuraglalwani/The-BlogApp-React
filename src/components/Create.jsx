import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[author,setAuthor]=useState("");
    const[pending,setPending]=useState(false);
    const history = useHistory();
    function handleSubmit(e){
     e.preventDefault();
     const blog={title,body,author};
     setPending(true);
     fetch("http://localhost:8000/blogs/",{
         method:'POST',
         headers:{"Content-Type":"application/json"}, 
         body:JSON.stringify(blog)
        }
         
        )
        .then(()=>{
            console.log("blog posted");
            setPending(false);
           // history.go(-1);
           history.push("/");
        });
        
    }


    return ( <div>
       <div className="create">
       <form onSubmit={handleSubmit}>
       <label>Blog Title</label>
       <input
        type="text"
        required
        name="title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
       ></input>
       <label>Blog Body</label>
       <textarea 
        type="text"
        required
        name="body"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
       ></textarea>
        <label>Blog author</label>
        <select
         name="author"
         value={author}
         onChange={(e)=>setAuthor(e.target.value)}
        >
        <option value="mario">Mario</option>
        <option value="king">King</option>
        </select>
        {pending&& <button type="submit">Adding...</button>}
        {!pending&& <button type="submit">Add blog</button>}
        </form>
       </div>
    </div> );
}
 
export default Create;