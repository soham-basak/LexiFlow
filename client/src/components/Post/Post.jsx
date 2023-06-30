import React from 'react'
import PostImgage from './post.jpg'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg'
      src={PostImgage} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className='postDes'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vel vero veritatis ducimus quaerat impedit ad repellat distinctio consequuntur aperiam deleniti optio quos ipsum laudantium, alias numquam perspiciatis rerum tenetur.
      </p>
    </div>
  )
}
