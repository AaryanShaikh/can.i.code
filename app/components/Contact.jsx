"use client"
import React, { useEffect, useState } from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsFillEnvelopeOpenFill, BsFillSendFill } from "react-icons/bs"
import Socials from './Socials'
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLoading } from '@/store/actions/theme';
import { message } from 'antd';

const Contact = ({ handleLoading, loading, route }) => {
  const [conData, setconData] = useState({ name: "", email: "", message: "", subject: "" })
  const [ismailsending, setismailsending] = useState(false)

  useEffect(() => {
    handleLoading(false)
  }, [])

  const onSendMessage = async () => {
    if (conData.name == "" || conData.email == "" || conData.message == "") {
      if (conData.name == "") { message.info("It would be great if I can get your name!") }
      else if (conData.email == "") { message.info("can you mention your email so I may contact you after!") }
      else if (conData.message == "") { message.info("you forgot to write your message!") }
    } else {
      setismailsending(true)
      let res = await fetch("/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(conData),
      })
      let result = await res.json()
      if (result.status == "ok") {
        message.success("I've recieved your message!")
      } else {
        message.error("An error occured!")
      }
      setismailsending(false)
      setconData({ name: "", email: "", message: "", subject: "" })
    }
  }

  return (
    <>
      <div className='pageTransitionMain'>
        <div className='pageTransitionText'><h1 style={{ opacity: loading ? 1 : 0 }}>{route}</h1></div>
        <div
          className='pageTransitionLeft'
          style={{
            clipPath: loading ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)" : "polygon(0 0, 0 0, 0 100%, 0 100%)",
            backdropFilter: loading ? "brightness(0)" : "brightness(1)"
          }}
        ></div>
        <div
          className='pageTransitionRight'
          style={{
            clipPath: loading ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)" : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            backdropFilter: loading ? "brightness(0)" : "brightness(1)"
          }}
        ></div>
      </div>

      <section className="contact section">
        <h2 className="section__title">
          Get in <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
            className="contact__data"
          >
            <h3 className="contact__title">Don't be Shy !</h3>
            <p className="contact__description">
              Let's connect and create something extraordinary together! Feel free to reach out to me through any of the portals below. I'm just a message away from turning ideas into reality. Looking forward to hearing from you!
            </p>

            <Socials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
            className="contact__form"
          >
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" value={conData.name} onChange={(e) => { setconData({ ...conData, "name": e.target.value }) }} placeholder='Your Name' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="text" value={conData.email} onChange={(e) => { setconData({ ...conData, "email": e.target.value }) }} placeholder='Your Email' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="text" value={conData.subject} onChange={(e) => { setconData({ ...conData, "subject": e.target.value }) }} placeholder='Your Subject' className="form__control" />
              </div>

            </div>
            <div className="form__input-div">
              <textarea value={conData.message} onChange={(e) => { setconData({ ...conData, "message": e.target.value }) }} placeholder='Your Messsage' className="form__control textarea" />
            </div>
            {/* <button className='button' onClick={onSendMessage}>
            Send Message
            <span className="button__icon contact__button-icon"><BsFillSendFill /></span>
          </button> */}
            <button onClick={onSendMessage} className={`sendBtn ${ismailsending ? "active" : ""}`}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Contact.propTypes = {
  handleLoading: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.theme.loading,
  route: state.theme.route
})

export default connect(mapStateToProps, { handleLoading })(Contact)