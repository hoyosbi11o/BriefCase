import React from 'react'
import { ProfileContent } from '../../ProfileContent/ProfileContent'
import { ProjectsContent } from '../../ProjectsContent/ProjectsContent'
import { ReferenceContent } from '../../ReferenceContent/ReferenceContent'
import { ExperenceContent } from '../../ExperenceContent/ExperenceContent'
import "./Main.css"
export const Main = () => {
  return (
    <div className="Main">
      <ProfileContent/>
      <ProjectsContent/>
      <ReferenceContent/>
      <ExperenceContent/>
    </div>
  )
}
