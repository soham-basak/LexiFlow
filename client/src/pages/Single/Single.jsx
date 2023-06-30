import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Single.css'
import SinglePost from '../../components/SinglePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
