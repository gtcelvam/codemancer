import React, { useEffect, useState } from 'react';
import AddPost from './addPost';
import PostList from './postList';
import '../css/main.css'

function Main() {
  const [post,setPost] = useState([]);
  const handlePost = (item)=>{
    setPost([item,...post]);
  }
  return (
    <div className='main-container'>
      <AddPost handlePost={handlePost}/>
      <PostList post={post}/>
    </div>
  )
}

export default Main
