import React from 'react'
import {Img} from "../../Img/Img"
import { SilderBar } from '../../SliderBar/SilderBar'
import { ItemSliderBar } from '../../ItemSliderBar/ItemSlderBar'
import { SectionIcons } from '../../SectionIcons/SectionIcons'
import { MyProfile } from '../../ProfilePersonal/ProfilePersonal'
import "./Header.css"
export const Header = () => {
  return (
    <div className='Header'>
        <MyProfile/>
        <SilderBar>
            <ItemSliderBar component="Inicio"/>
            <ItemSliderBar component="Perfil" />
            <ItemSliderBar component="Proyectos" />
            <ItemSliderBar component="Referencias" />
            <ItemSliderBar component="Experiencia" />
        </SilderBar>          
          <Img className="LogoSena" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407377/LogoSena_apvl4u.jpg"} />
        <SectionIcons/>

    </div>

    )
}
