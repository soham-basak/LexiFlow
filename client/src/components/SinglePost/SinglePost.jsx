import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePostImage from './singlepostimg.jpg'
import './SinglePost.css';
import { useLocation, Link } from 'react-router-dom';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  
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
        src={PF + post.photo} alt="" />
        )}
        
        <h1 className="singlePostTitle">
           {post.title}

            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuth'>
              Author: 
              <Link className='link' 
              to = {`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
              </span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
            {post.desc}
        </p>
      </div>
    </div>
  )
}
