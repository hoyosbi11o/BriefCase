import React from 'react'
import "./SilderBar"
export const SilderBar = ({children}) => {
  return (
    <nav>
        <ul>
            {children}
        </ul>
    </nav>
  )
}
