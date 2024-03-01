import React from 'react'
import { CiLinkedin, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import "./SectionIcons.css"
export const SectionIcons = () => {
  return (
    <div className='SectionIco'>
        <CiLinkedin className='Icon' />
        <CiFacebook className='Icon' />
        <CiInstagram className='Icon' />
        <CiTwitter className='Icon' />
        <FaWhatsapp className='Icon' />

    </div>
   
  )
}
