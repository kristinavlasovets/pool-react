import "./index.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatedLetters } from "../AnimatedLetters"
import { Logo } from "./Logo"
import Loader from 'react-loaders';

export const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["e", "q", "u", "i", "n", "o", "x"]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={7}
        />
      </div>
      <div className="button-zone">
        <Link to="/contact" className="flat-button">
          Claim offer
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman"/>
    </>
  )
}
