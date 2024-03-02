import React from 'react'
import { Img } from '../Img/Img'
import "./ProjectsContent.css"
import { Card } from '../Card/Card'
import { ContentCard } from '../ContentJson/ContentCard'


export const ProjectsContent = () => {
  return (
    <div className='ProjectContent'>
        <div className="Contentproj">
          <div>
          <Img className="LogoSinFondo" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407378/LogoSenaSInFondo_ogkwig.png"} />
          </div>
          <p className="titleProject">PROYECTOS</p>
        </div>
        <div className="lineSenapj" />
        <div className="cardPro">
            {
              ContentCard.map(card=>(                
                <Card
                  key={card._id}
                  photo={card.image}
                  title={card.title}
                  description={card.description}
                enlace={card.enlace}
                />
              ))
            }
        </div>
    </div>
  )
}
