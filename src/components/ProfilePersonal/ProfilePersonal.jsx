import React from 'react'
import { Img } from "../Img/Img"
import "./ProfilePersonal.css"

export const MyProfile = () => {
  return (
    <div className='myProfile'>
      <div className="contentImg">
        <Img className="Photo" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407528/Profile_ohkeja.jpg"} />
      </div>
          <p className="MyName">ANGEL HOYOS</p>
          <div className="line"/>
    </div>
  )
}
