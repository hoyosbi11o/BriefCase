import React from 'react'
import Photo from "../../assets/Profile.jpg"
import { Img } from "../Img/Img"
import "./ProfilePersonal.css"

export const MyProfile = () => {
  return (
    <div className='myProfile'>
      <div className="contentImg">
        <Img className="Photo" component={Photo} />
      </div>
          <p className="MyName">ANGEL HOYOS</p>
          <div className="line"/>
    </div>
  )
}
