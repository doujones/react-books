import React from 'react'
import "./Recipe.scss"
import { withRouter } from "react-router-dom"


const Recipe = ({ name, imageUrl, size, history, linkUrl, match}) => (
  
    <div 
    className={`${size} recipe`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`
    }}
    />
     
      <div className="content">
      <h1 className='title'>{name.toUpperCase()}</h1>
      <span className="subtitle">Purchase</span>
      </div>
      </div>
  );

  

  



export default withRouter(Recipe);