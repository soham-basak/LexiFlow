import React from 'react'
import SinglePostImage from './singlepostimg.jpg'
import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className='singlePostImg'
        src={SinglePostImage} alt="" />
        <h1 className="singlePostTitle">
           <i>Lorem ipsum dolor sit amet.</i> 

            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuth'>Author: <b>Dexter</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, molestias nemo maiores at natus perspiciatis officiis voluptatum repellat, dolore impedit sunt iusto excepturi voluptates dolores. Nisi laudantium a dicta corporis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, molestias nemo maiores at natus perspiciatis officiis voluptatum repellat, dolore impedit sunt iusto excepturi voluptates dolores. Nisi laudantium a dicta corporis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, molestias nemo maiores at natus perspiciatis officiis voluptatum repellat, dolore impedit sunt iusto excepturi voluptates dolores. Nisi laudantium a dicta corporis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, molestias nemo maiores at natus perspiciatis officiis voluptatum repellat, dolore impedit sunt iusto excepturi voluptates dolores. Nisi laudantium a dicta corporis?
        </p>
      </div>
    </div>
  )
}
