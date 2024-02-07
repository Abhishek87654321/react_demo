 // API URL comes from .env.development
 import React , {useState , useEffect}from "react";
 import { API_URL } from "../../constants";

 function PostsList(){
     const [, setLoading] =useState(true);
     const [posts, setPosts] = useState([]);
     const [, setError] = useState(null);
    // Fetch the posts from the API
     useEffect(() => {
         async function loadPosts() {
             try{
                const response = await fetch(API_URL);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                }else{
                    throw new Error(response.statusText);
                }
             }catch(e){
              setError("Error: "+ e.message);
              console.log(` error: ${e.message}`);
             }finally{
                setLoading(false);
             }
         }
         loadPosts();
     },[])

     return(
     <div>
     {posts.map((post) => {
        return <div>
            <div key= {post.id} className="post-container">
               <h2>{post.title}</h2>
               <p>{post.body}</p>
            </div>
        </div>
     })
    }
     </div>
     );
}

 export default PostsList;