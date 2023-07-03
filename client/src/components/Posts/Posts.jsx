import React from 'react'
import Post from "../../components/Post/Post"
import "./Posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  )
}
