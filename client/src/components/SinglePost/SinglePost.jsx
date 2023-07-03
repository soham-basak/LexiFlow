import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePostImage from './singlepostimg.jpg'
import './SinglePost.css';
import { useLocation } from 'react-router-dom';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  
  useEffect(() => {
    const getPost = async () => {
     const res = await axios.get("/posts/" + path);
     setPost(res.data);
    };
    getPost()
  }, [path]);
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img className='singlePostImg'
        src={post.photo} alt="" />
        )}
        
        <h1 className="singlePostTitle">
           {post.title}

            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuth'>Author: <b>{post.username}</b></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
            {post.desc}
        </p>
      </div>
    </div>
  )
}
