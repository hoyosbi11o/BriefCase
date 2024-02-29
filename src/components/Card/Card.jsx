import React from 'react'
import "./Card.css"
export const Card = ({photo,title,description,enlace}) => {
  return (
      <section className="CardGeneral">
        <div className="contentImgCard">
        <img src={photo} alt={title} className='imgCard' />
        </div>
        <div className="ContentofCard">
           <p className="titleCard">{title}</p>
            <p className="DescripCard">{description}</p>
             <a href="#" className="enlaCard">{enlace}</a>
        </div>
      </section>
  )
}

