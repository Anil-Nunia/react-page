import React from 'react'

import imgmask from '../assets/images/png/imgMask.png'
import img1card from '../assets/images/png/img1card.png'
import imgcard2 from '../assets/images/png/imgcard2.png'
import imgcard3 from '../assets/images/png/imgcard3s.png'
import imgcard4 from '../assets/images/png/imgcard4s.png'
const Nav = () => {
    return (
        <>
            <section className='py-40'>
                <div className='container py-40'>
                    <div className='d-flex align-items-center jutify-content-center'><h1 className='ff1s fw-600 fs-36 fc1s pb-24'>Featured Product</h1></div>

                    <div className='row '>
                        <div className='col-xxl-5 col-12 '>
                            <div className='position-relative h-100 '>
                                <span className='d-flex justify_center'>
                                    <img src={imgmask} alt="#" className='imgmask h-100' />
                               </span>

                                <span className='d-flex text-center'>
                                    <p className='ff1s fs-58 fw-600 fc-white position-absolute pos-explore'>Explore More
                                        Product</p>
                                </span>
                            </div>
                        </div>
                        <div className='col-xxl-7 col-12 mtop40'>
                            <div className='row mtop-w1st'>
                                <div className='col-md-6 col-12'>
                                    <div className='card1'>
                                        <img src={img1card} alt="#" className='img1card' />
                                        <p className='ff2s fw-400 fs-16 fc1s ptop-conc'>Concetti Di-Lusso ALESANDRDO Luxury
                                            Turkish Spa Towels and ganic Bamboo
                                            Robes 12 PC set</p>
                                        <div className='d-flex align-item-center m-top m-bottom justify-content-between'>
                                            <span className='d-flex align-items-center'> <p className='ff1s fw-600 fs-24 fc2s'>$169.99</p>
                                                <p className='ff1s fw-400 fs-16 fc3s plr'>$199.99</p></span>
                                            <button className='btnadd fw-600 fs-16px ff1s fc-white'>ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 mtop40'>
                                    <div className='card1 h_100'>
                                        <img src={imgcard2} alt="#" className='img1card' />
                                        <p className='ff2s fw-400 fs-16 fc1s ptop-conc'>Concetti Di-Lusso CAPPY Organic
                                            Turkish Cotton - Set of 4 in Gift Box
                                        </p>
                                        <div className='d-flex align-item-center m-top m-bottom justify-content-between'>
                                            <span className='d-flex align-items-center'> <p className='ff1s fw-600 fs-24 fc2s'>$59.99</p>
                                                <p className='ff1s fw-400 fs-16 fc3s plr'>$199.99</p></span>
                                            <button className='btnadd fw-600 fs-16px ff1s fc-white'>ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mtop-w'>
                                <div className='col-md-6 col-12'>
                                    <div className='card1'>
                                        <img src={imgcard3} alt="#" className='img1card' />
                                        <p className='ff2s fw-400 fs-16 fc1s ptop-conc'>Concetti Di-Lusso Luxury 100% Turkish
                                            Bamboo Shawl Spa Robe in Premium
                                            Gift Box</p>
                                        <div className='d-flex align-item-center m-top m-bottom justify-content-between'>
                                            <span className='d-flex align-items-center'> <p className='ff1s fw-600 fs-24 fc2s'>$159.99</p>
                                                <p className='ff1s fw-400 fs-16 fc3s plr'>$199.99</p></span>
                                            <button className='btnadd fw-600 fs-16px ff1s fc-white'>ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 mtop40'>
                                    <div className='card1'>
                                        <img src={imgcard4} alt="#" className='img1card' />
                                        <p className='ff2s fw-400 fs-16 fc1s ptop-conc'>Concetti Di-Lusso ANNA Luxury 100%
                                            Turkish Organic Cotton VIP Spa
                                            Robe/Towels 10 PC Set </p>
                                        <div className='d-flex align-item-center m-top m-bottom justify-content-between'>
                                            <span className='d-flex align-items-center'> <p className='ff1s fw-600 fs-24 fc2s'>$59.99</p>
                                                <p className='ff1s fw-400 fs-16 fc3s plr'>$199.99</p></span>
                                            <button className='btnadd fw-600 fs-16px ff1s fc-white'>ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default Nav