import React from 'react'
import "./References.css"

export const References = ({ name, position, phone , email}) => {
  return (
      <section className="ReferenceGeneral">
        <div className="contentRef">
              <p>{name}</p>
              <p>{position}</p>
              <p>{phone}</p>
              <p>{email}</p>
        </div>
      </section>
  )
}
