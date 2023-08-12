import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Project = ({ img, title, details, link }) => {
    const [modal, setmodal] = useState(false)
    const [isImgLoad, setisImgLoad] = useState(true)

    const ontoggleModal = () => {
        setmodal(!modal)
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
        >
            <div
                className='project'
                onClick={ontoggleModal}
            >
                {/* Img load */}
                <AnimatePresence>
                    {
                        isImgLoad ?
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, }}
                                className="imgLoading"
                            >
                                <div className="dot-spinner">
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                </div>
                            </motion.div> : ""
                    }

                </AnimatePresence>

                <img src={img} onLoad={() => { setisImgLoad(false) }} />
                <div className='project_hover_item'>
                    <h3 className="portfolio__title">{title}</h3>
                </div>
            </div>
            <AnimatePresence>
                {
                    modal ? <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, }}
                        className="portfolio__modal"
                    >
                        <div className="portfolio__modal-content">
                            <img src="../../assets/close.png" alt="" className="modal__close" onClick={ontoggleModal} />

                            <h3 className="modal__title">{title}</h3>
                            <ul className="modal__list grid">
                                {details.map((ele, ind) => {
                                    return <li className={`modal__item ${ele.title == "" ? "span_item" : ""}`} key={ind}>
                                        <span className="item__icon">{ele.icon}</span>

                                        <div>
                                            <span className="item__title">{ele.title}</span>
                                            <span onClick={() => { window.open(link, '_blank') }} style={{ fontWeight: ele.title == "" ? "400" : "" }} className={`item__details ${ele.title == "Preview : " ? "preview" : ""}`}>{ele.desc}</span>
                                        </div>
                                    </li>
                                })}
                            </ul>

                            <img src={img} alt="" className="modal__img" />
                        </div>
                    </motion.div> : ""
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Project