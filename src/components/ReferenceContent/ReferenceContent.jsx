import { Img } from '../Img/Img'
import "./ReferencesContent.css"
import { contentReference } from '../ContentJson/ContentReferences'
import { References } from '../References/References'

export const ReferenceContent = () => {
  return (
    <div className='ReferencesContent'>
      <div className="Contentrefe">
        <div>
          <Img className="LogoNoBack" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407378/LogoSenaSInFondo_ogkwig.png"} />
        </div>
        <p className="titleRefere">REFERENCIAS</p>
      </div>
      <div className="lineSenaref" />
      <div className="refer">
        {
          contentReference.map(reference => (
            <References
              key={reference._id}
              name={reference.name}
              position={reference.position}
              phone={reference.phone}
              email={reference.email}
            />
          ))
        }
      </div>
    </div>
  )
}
