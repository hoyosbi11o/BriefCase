import React from 'react'

export const Card = ({img,title,description,enlace}) => {
  return (
      <>
        <img src={img} alt="" />
        <div className="contentCa">
            <p className="title">{title}</p>
            <p className="Descrip">{description}</p>
            <a href="#" className="enla">{enlace}</a>
        </div>
        </>
  )
}
