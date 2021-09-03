import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
     const{error,isPending, data :blogs}=useFetch("http://localhost:8000/blogs")
    
    return ( <div>
     <div className="home">
     {error&&<div>{error}</div>}
     {isPending&&<div>Is loading..!</div>}
     {blogs&&<BlogList blogs={blogs} title="All blogs!" />} 

     {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="author 3")} title="Author 3's blog"
      handleDelete={handleDelete}/> */}
     </div>
        
    </div> );
}
 
export default Home;