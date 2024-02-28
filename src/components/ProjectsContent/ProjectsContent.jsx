import React from 'react'
import { Img } from '../Img/Img'
import LogoSinFondo from "../../assets/LogoSenaSInFondo.png"
import "./ProjectsContent.css"
import { Card } from '../Card/Card'

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
      <Card/>
    </div>
  )
}
