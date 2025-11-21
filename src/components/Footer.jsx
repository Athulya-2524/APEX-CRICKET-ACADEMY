import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
       <section id='contact'>
        <div style={{height:'300px',backgroundColor:'blue',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h5 className="fw-bolder"><MdAttachEmail />apexcricketacademy98@gmail.com</h5>
        <h5 className="fw-bolder"><FaPhoneAlt />9746474890</h5>
        <h4>Connect With Us</h4>
        <div className="d-flex justify-content-center fs-4 my-3">
        <Link style={{color:'white'}}><FaWhatsapp className='me-3'/></Link>
        <Link style={{color:'white'}}><FaInstagram className='me-3'/> </Link>
        <Link style={{color:'white'}}><FaFacebookF className='me-3'/> </Link>
        <Link style={{color:'white'}}><FaTwitter className='me-3'/> </Link>

        </div>
        <p>Copyright © Apex Cricket Academy. All rights reserved.</p>
        </div>
        </section>
    )
}

export default Footer