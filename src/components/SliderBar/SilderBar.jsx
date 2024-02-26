import React from 'react'
import "./SliderBar.css"
export const SilderBar = ({children}) => {
  return (
    <nav>
        <ul>
            {children}
        </ul>
    </nav>
  )
}
