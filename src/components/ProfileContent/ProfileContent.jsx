import React from 'react'
import { Img } from '../Img/Img'
import LogoSinFondo from "../../assets/LogoSenaSInFondo.png"
import "./ProfileContent.css"
export const ProfileContent = () => {
  return (
   <div className="profileContent">
    <div className="Contentpro">
      <div>
          <Img className="LogoSinFondo" component={LogoSinFondo} />
      </div>
    <p className="titleProfile">PERFIL</p>
    </div>
    <div className="lineSena" />
    <p className='textProfile'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse quasi sunt ut repudiandae consectetur hic cupiditate ex, qui reprehenderit tempora explicabo alias quis! Perferendis inventore obcaecati eius minima nostrum.
      Itaque sed at maiores sint. Dolor, quaerat soluta? Veniam harum voluptatum culpa, libero rem temporibus sed perspiciatis consequatur obcaecati maiores quasi nam. Maxime voluptates quaerat laboriosam architecto similique excepturi quam.
      </p>
   </div>
  )
}
