import React, { useRef, useState } from 'react';
import AddGif from './addGif';
import '../css/addpost.css';

function AddPost({handlePost}) {
  const [toggle,setToggle] = useState(false);
  const [data,setData] = useState({msg:'',imgUrl:''});
  const inputRef = useRef(null);
  var handleToggle = ()=>{
    setToggle(!toggle);
  }
  var handleData = (e)=>{
      const msg = e.target.value;
      setData((prevState)=>({
        ...prevState,msg : msg
      }));
  }
  var handleSubmit = ()=>{
    let input = inputRef.current;
    if(data.imgUrl === '' && data.msg === ''){
      alert("No Field Should be empty")
    }else{
      input.value = "";
      handlePost(data);
      setData({msg:'',imgUrl:''});
    }
    
  }
  var handleClick = (item,setGif)=>{
    console.log(item)
    setData(prevState => ({
      ...prevState,imgUrl : item.original.url
    }))
    setGif([]);
    handleToggle();
  }
  return (
    <div className='add-post'>
      <div className="add-post-head">
        <p>Add Post</p>
      </div>
      <div className="add-post-body">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="message" ref={inputRef} placeholder='write a post...' onChange={handleData}/>
        </form>
        <div className="gif-preview">
          {data.imgUrl && <img src={data.imgUrl} alt=""/>}
        </div>
      </div>
      <div className="add-post-foot">
        <div className="add-gif-container">
          <p onClick={handleToggle}>GIF</p>
        </div>
        <div className="post-btn-container">
          <button className='btn btn-post' onClick={handleSubmit}>Post</button>
        </div>
        <AddGif toggle={toggle} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default AddPost