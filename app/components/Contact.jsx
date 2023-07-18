import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsFillEnvelopeOpenFill, BsFillSendFill } from "react-icons/bs"
import Socials from './Socials'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Let's connect and create something extraordinary together! Feel free to reach out to me through any of the portals below. I'm just a message away from turning ideas into reality. Looking forward to hearing from you!
          </p>

          {/* <div className="contact__info">
            <div className="info__item">
              <BsFillEnvelopeOpenFill className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">aaryanshaikh27638@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="" className="contact__social-link">
              <BsInstagram />
            </a>
            <a href="" className="contact__social-link">
              <BsLinkedin />
            </a>
            <a href="" className="contact__social-link">
              <BsGithub />
            </a>
          </div> */}

          <Socials />
        </div>

        <div className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Your Email' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' className="form__control" />
            </div>

          </div>
          <div className="form__input-div">
            <textarea placeholder='Your Messsage' className="form__control textarea" />
          </div>
          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon"><BsFillSendFill /></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact