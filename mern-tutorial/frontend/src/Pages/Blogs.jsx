import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blogs () {
    const [allBlogs,setAllBlogs] = useState([]);

    useEffect(()=>{
      let isMounted =true;
      const getAllBlogs = async ()=>{
        try{
          const response = await axios.get('http://localhost:5000/get-all-blogs');
          // console.log(response);
          setAllBlogs(response.data);
        }catch(err){
          console.log(err)
        }
      }

      if(isMounted){
        getAllBlogs();
      }

      return ()=>{
        isMounted = false;
      }

    },[])
   
  return(<>
    <h1>All Blogs</h1>
    <Link to="/">Home</Link>
    <div className="cardGroup">
      {allBlogs.map(item=>{
        return(
          <div className="card" key={item._id}>
            <h2>{item.title}</h2>
            <small>{item.category}</small>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>

  </>);
}

export default Blogs;
