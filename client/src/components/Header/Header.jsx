import React from 'react'
import background from './header-bg.jpg'
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"><i>Blog</i></span>
        <span className="headerTitleLg"><i>LexiFlow</i></span>
      </div>
      <img className="headerImg"
      src={background} alt="" />
    </div>
  )
}
