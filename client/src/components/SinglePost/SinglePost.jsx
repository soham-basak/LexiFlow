import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SinglePostImage from './singlepostimg.jpg'
import './SinglePost.css';
import { useLocation, Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);

  
  useEffect(() => {
    const getPost = async () => {
     const res = await axios.get("/posts/" + path);
     setPost(res.data);
    };
    getPost()
  }, [path]);


  const handleDelete = async () => {
    try{
      await axios.delete("/posts/" + path, 
      {data: {username:user.username},
    });
      window.location.replace("/");
    } catch(err){
      console.log(err);
    }
  };

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img className='singlePostImg'
        src={PF + post.photo} alt="" />
        )}
        
        <h1 className="singlePostTitle">
           {post.title}
           {post.username === user?.username &&(
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
           )}
            
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
