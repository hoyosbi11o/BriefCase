import React from 'react'
import { Img } from "../Img/Img"
import REACT from "../../assets/REACT.jpg"
import MongoDb from "../../assets/MongoDB.png"
import Js from "../../assets/js.png"
import Java from "../../assets/java.png"
import ProgressBar from "@ramonak/react-progress-bar"
export const ExperenceContent = () => {
  return (
    <div className="ExperenceCon">
      <div className="React">
      <Img className="CardReact" component={REACT}/>
        <ProgressBar completed={60}/>
      </div>
      <div className="Mongo">
        <Img className="CardMongo" component={MongoDb} />
        <ProgressBar completed={60} />
      </div>
      <div className="React">
        <Img className="CardReact" component={Js} />
        <ProgressBar completed={60} />
      </div>
      <div className="React">
        <Img className="CardReact" component={Java} />
        <ProgressBar completed={60} />
      </div>
    </div>
  )
}
