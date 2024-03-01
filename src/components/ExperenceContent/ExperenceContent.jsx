import React from 'react'
import { Img } from '../Img/Img'
import LogoSinFondo from "../../assets/LogoSenaSInFondo.png"
import "./ExperenceContent.css"
import { ContentTec } from "../ContentTechno/ContentTec"
export const ExperenceContent = () => {
  return (
    <div className='ExpereContent'>
      <div className='ContentExpe'>
        <div>
          <Img className="LogoSinFondo" component={LogoSinFondo} />
        </div>
        <p className="titleExpere">EXPERIENCIA</p>

      </div>
      <ContentTec/>
    </div>
  )
}
