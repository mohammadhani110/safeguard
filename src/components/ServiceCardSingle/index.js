import React from 'react'
import doubleCheck from '../../assets/home/doubleCheck.png'
import serviceIcon1 from '../../assets/home/serviceIcon1.png'
// import { makeStyles } from '@mui/styles';

const ServiceCardSingle = ({ img, title, features }) => {
    return (
        <div className="testimonials-item">
            <picture>
                <img
                    className="avatar loading"
                    alt="Person"
                    src={img}
                    width={80}
                    height={"auto"}
                />
            </picture>
            <div className="testimonials-item-info">
                <h3 className="name">{title}</h3>
                {/* <img className="quotes-svg" src={QuotesSvg} width={32} height={"auto"} /> */}
                <ul className='features'>
                    {features.map(feature =>
                        <li className="comment">
                            <img src={doubleCheck} /><span>{feature}</span>
                        </li>
                    )}
                    {/* <li className="comment">
                        <img src={doubleCheck} /><span>Rennters Insurance</span>
                    </li>
                    <li className="comment">
                        <img src={doubleCheck} /><span>SR22</span>
                    </li> */}

                </ul>
            </div>
        </div>
    )
}

export default ServiceCardSingle