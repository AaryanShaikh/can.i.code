import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Project = ({ img, title, details, link }) => {
    const [value, setValue] = useState(0);
    const [modal, setmodal] = useState(false)

    const ontoggleModal = () => {
        setmodal(!modal)
    }

    useEffect(() => {
        let requestId;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const totalScroll = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / totalScroll) * 100;
            setValue(scrollPercentage);
            requestId = requestAnimationFrame(handleScroll);
        };
        handleScroll();

        return () => {
            cancelAnimationFrame(requestId);
        };
    }, []);

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
        >
            <div
                className='project'
                onClick={ontoggleModal}
            >
                <img src={img} style={{ objectPosition: `50% ${value.toFixed(2)}%` }} />
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