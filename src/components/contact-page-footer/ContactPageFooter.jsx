import "../contact-page-footer/ContactPageFooter.scss"

import React from 'react'

const ContactPageFooter = () => {    
    return (
        <div className="contact-page-footer">
            <span className="option">
                <a href="https://www.facebook.com/hoangviet1112"><i style={{fontSize:"45px", cursor:"pointer", padding: "0px 10px"}} class="fa-brands fa-facebook"></i></a>      
                <a href="https://www.abc.com"><i style={{fontSize:"45px", cursor:"pointer", padding: "0px 10px"}} class="fa-solid fa-house"></i></a>
                <a href="https://www.xyz.com"><i style={{fontSize:"45px", cursor:"pointer", padding: "0px 10px"}} class="fa-brands fa-linkedin"></i></a>
            </span>
            <span className="phone-number-and-mail">
                0935882288  |  <a href="mailto:nguyenduchoangviet93@gmail.com">nguyenduchoangviet93@gmail.com</a>
            </span>
            <span>
                <p>&copy; 2021 Viet Nguyen Design</p>
            </span>
        </div>
    )
}

export default ContactPageFooter
