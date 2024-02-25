import React from 'react'
import {Img} from "../../Img/Img"
import  LogoSena  from "../../../assets/LogoSena.jpeg"
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
        <Img className="LogoSena" component={LogoSena} />
        <SectionIcons/>

    </div>

    )
}
