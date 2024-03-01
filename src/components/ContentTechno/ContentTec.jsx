import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import { Img } from "../Img/Img"
import REACT from "../../assets/REACT.jpg"
import MongoDb from "../../assets/MongoDB.png"
import Js from "../../assets/js.png"
import Java from "../../assets/java.png"
import "./ContentTechno.css"
export const ContentTec = () => {
  return (
    <div className='ContentT'>
          <div className="ContentX">
            <div className='con'>
          <Img className="CardX" component={REACT} />
            </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900'  completed={40} />
        <p className='P'>Basico</p>
          </div>
      <div className="ContentX">
        <div className='con'>
          <Img className="CardX" component={MongoDb} />
            </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900'  completed={40} />
        <p className='P'>Basico</p>
          </div>
      <div className="ContentX">
        <div className='con'>
        <Img className="CardX" component={Js} />
        </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900'  completed={50} />
        <p className='P'>Intermedio</p>
          </div>
      <div className="ContentX">
        <div className='con'>
          <Img className="CardX" component={Java} />
              </div>
        <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900' labelColor='#39a900'  completed={50} />
        <p className='P'>Intermedio</p>
          </div>
    </div>
  )
}
