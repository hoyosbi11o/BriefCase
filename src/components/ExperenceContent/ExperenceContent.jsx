import React from 'react'
import { Img } from '../Img/Img'
import "./ExperenceContent.css"
import { ContentTec } from "../ContentTechno/ContentTec"
export const ExperenceContent = () => {
  return (
    <div className='ExpereContent'>
      <div className='ContentExpe'>
        <div>
          <Img className="LogoSinFondo" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407378/LogoSenaSInFondo_ogkwig.png"} />
        </div>
        <p className="titleExpere">EXPERIENCIA</p>

      </div>
      <ContentTec/>
    </div>
  )
}
