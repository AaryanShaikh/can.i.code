import React from 'react'

const PortfolioItem = ({ img, title, details }) => {
    return (
        <div className="portfolio__item">
            <img src={img} alt="" className="portfolio_img" />

            <div className="portfolio__hover">
                <h3 className="portfolio__title">{title}</h3>
            </div>

            <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                    <img src="../../assets/close.png" alt="" className="modal__close" />

                    <h3 className="modal__title">{title}</h3>

                    <ul className="modal__list grid">
                        {details.map((ele, ind) => {
                            return <li className="modal__item" key={ind}>
                                <span className="item__icon">{ele.icon}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem