import React from 'react'
import "./Recipe.scss"

export default function recipe({title, imageUrl, size}) {
  return (
    <div className={`${size} recipe`} >
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`
    }}>
    </div>
      <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Purchase</span>
      </div>
      </div>
  )
}
