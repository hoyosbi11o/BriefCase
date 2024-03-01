import React from 'react'
import { ProfileContent } from '../../ProfileContent/ProfileContent'
import { ProjectsContent } from '../../ProjectsContent/ProjectsContent'
import { ReferenceContent } from '../../ReferenceContent/ReferenceContent'
import { ExperenceContent } from '../../ExperenceContent/ExperenceContent'
import Whatsapp from "../../../assets/whatsapp.png"
import "./Main.css"
import { Img } from '../../Img/Img'
export const Main = () => {
  return (
    <>
    <div className="Main">
      <ProfileContent/>
      <ProjectsContent/>
      <ReferenceContent/>
      <ExperenceContent/>
    </div>
      <a href="#"><Img component={Whatsapp} className="BotonWhats" /></a>
    </>
  )
}
