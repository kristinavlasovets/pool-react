import "./index.scss"
import { AnimatedLetters } from "../AnimatedLetters/index.js"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAreaChart,faArrowTrendUp, faHotTub, faYinYang, faWater, faWaveSquare} from "@fortawesome/free-solid-svg-icons";
import Loader from 'react-loaders';

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 2000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["a", "b", "o", "u", "t", " ", "u", "s"]}
            idx={15}
          />
        </h1>
        <p>
          Take time to regenerate and elevate your performance with our
          always-evolving roster of health Spa services.
        </p>
        <p>
          Renew. Restore. Revive. This personalized massage service combines
          techniques to help balance your mind, body, and spirit. It’s focused
          to help recovery and sustain your fitness training while restoring
          vitality.
        </p>
        <p>
          Full spa facial services emphasize deep-cleansing, exfoliation (with a
          gentle, lactic acid peel), extraction, purifying plant extracts, and a
          soothing mask to calm and clarify the skin.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon
              icon={faAreaChart}
              color="#82b7e5"
            />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faArrowTrendUp} color="#a1b0c5" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faHotTub} color="#dfdfe0" />
          </div>
          <div className="face4">
            <FontAwesomeIcon
              icon={faYinYang}
              color="#bdb8b0"
            />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faWater} color="#a2d7f4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faWaveSquare} color="#5cace6" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' className='loader-active'/>
    </>
  )
}
