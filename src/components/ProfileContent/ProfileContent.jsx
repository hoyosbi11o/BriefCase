import React from 'react'
import { Img } from '../Img/Img'
import "./ProfileContent.css"
export const ProfileContent = () => {
  return (
   <div className="profileContent">
    <div className="Contentpro">
      <div>
          <Img className="LogoNoBackPro" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407378/LogoSenaSInFondo_ogkwig.png"} />
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
