import Loader from "react-loaders"
import "./index.scss"
import { AnimatedLetters } from "../AnimatedLetters/index.js"
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 2000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_w2gdusd', 'template_v5f55bi', refForm.current, 'jHgI3SZSabMDIOOA9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["c", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            EMAIL US <br /> Concierge@Equinox.com
          </p>
          <p>
            CALL US <br /> 866-332-6549 Monday through Friday, 8am to 8pm EST.
            Holiday Hours are subject to change.
          </p>
          <p>
            CHAT WITH US <br />
            Chat with our Concierge team directly from the Equinox+ app or at
            Equinox.com Monday through Friday, 8am to 8pm EST. Holiday Hours are
            subject to change.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <input type="submit" className="flat-button" value="send" />
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
