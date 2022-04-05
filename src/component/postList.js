import React from 'react';
import PostData from './postData';
import '../css/postlist.css'

function PostList({post}) {
  var userPost = post.map((item,index)=>{
    return <PostData key={index} item={item}/>
  })
  return (
    <div className='post-list'>
      <ul>
        {userPost}
      </ul>
    </div>
  )
}

export default PostList