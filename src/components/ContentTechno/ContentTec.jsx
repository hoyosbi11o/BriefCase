import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import { Img } from "../Img/Img"
import "./ContentTechno.css"
export const ContentTec = () => {
  return (
    <div className='ContentT'>
          <div className="ContentX">
            <div className='con'>
          <Img className="CardX" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407602/REACT_lurwny.jpg"} />
            </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900' className='wrapper' completed={40} />
        <p className='P'>Basico</p>
          </div>
      <div className="ContentX">
        <div className='con'>
          <Img className="CardX" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407454/MongoDB_fkubyu.png"} />
            </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900' className='wrapper' completed={40} />
        <p className='P'>Basico</p>
          </div>
      <div className="ContentX">
        <div className='con'>
          <Img className="CardX" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407376/js_p8kzxj.png"} />
        </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900' className='wrapper' completed={50} />
        <p className='P'>Intermedio</p>
          </div>
      <div className="ContentX">
        <div className='con'>
          <Img className="CardX" component={"https://res.cloudinary.com/dsfcsitj5/image/upload/v1709407376/java_xtzhmw.png"} />
              </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900' className='wrapper' completed={50} />
        <p className='P'>Intermedio</p>
          </div>
    </div>
  )
}
