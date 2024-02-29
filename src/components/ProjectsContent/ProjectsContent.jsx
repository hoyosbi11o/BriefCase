import React from 'react'
import { Img } from '../Img/Img'
import LogoSinFondo from "../../assets/LogoSenaSInFondo.png"
import "./ProjectsContent.css"
import { Card } from '../Card/Card'
import { contentCard } from '../ContentCard/ContentCard'

export const ProjectsContent = () => {
  return (
    <div className='ProjectContent'>
        <div className="Contentproj">
          <div>
            <Img className="LogoSinFondo" component={LogoSinFondo} />
          </div>
          <p className="titleProject">PROYECTOS</p>
        </div>
        <div className="lineSenapj" />
        <div className="cardPro">
            {
              contentCard.map(card=>(
                <Card
                  key={card._id}
                  img={card.img}
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
