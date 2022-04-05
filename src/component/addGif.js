import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../css/gifresult.css'

function AddGif({toggle,handleClick}) {
  const [key,setKey] = useState('');
  const [gif,setGif] = useState([]);
  let api = `https://api.giphy.com/v1/gifs/search?api_key=C8r5eNVRxGoO48QhXBplchdApprxgjJm&q=${key}&limit=5&offset=0&rating=g&lang=en`
  useEffect(()=>{
    let cancelToken;
    if(key !== ''){
      cancelToken && cancelToken.cancel("New Request Created");
      cancelToken = axios.CancelToken.source();
      gif.length > 0 && setGif([]);
      axios(api,{
        cancelToken : cancelToken.token
      }).then((res)=>{
      res.data.data.map(item=>{
        setGif([...gif,item.images]);
      });
      }).catch(err=>console.log(err));
    }
  },[key]);
  var handleChange = (e)=>{
    var keyword = e.target.value;
    setKey(keyword);
  }
  var gifResult = gif.length > 0 && gif.map((item,index)=>{
    return <li key={index}><img onClick={()=>handleClick(item,setGif)} src={item.preview_gif.url} alt='gif'/></li>
  })
  return (
    <div className={toggle ? 'gif-result-container' : 'gif-result-container display-hide'}>
        <div className="search-gif">
            <form onSubmit={(e)=>e.preventDefault()} action="">
                <input type="text" name="search-gif" placeholder='search...' onChange={handleChange}/>
            </form>
        </div>
        <div className="gif-result-list">
          <ul>{gifResult}</ul>
        </div>
    </div>
  )
}

export default AddGif