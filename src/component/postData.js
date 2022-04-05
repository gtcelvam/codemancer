import React from 'react'

function PostData({item,key}) {
  return (
    <>
        <li key={key} className='user-post'>
          <div className="profile-container">
            <img className='profile' src='https://www.business2community.com/wp-content/uploads/2014/08/My_profile-orange-300x300.png' alt='image'/>
            <h1>...</h1>
          </div>
          <div className="user-data">
            <h1>{item.msg}</h1>
            {item.imgUrl && <img src={item.imgUrl} alt="img"/>}
          </div>
        </li>
    </>
  )
}

export default PostData