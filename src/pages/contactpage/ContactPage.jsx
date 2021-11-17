import "../contactpage/ContactPage.scss"

import React from 'react'

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-information">
                <h2>CONTACT US</h2>
                <div className="location">
                    <span class="material-icons-outlined">
                        location_on
                    </span>
                    <span>50 Le Thi Hong Gam</span>
                </div>
                <div className="email">
                    <span class="material-icons-outlined">
                        mail
                    </span>
                    <span>nguyenduchoangviet@gmail.com</span>
                </div>
                <div className="yahoo">
                    <span class="material-icons-outlined">
                        contacts
                    </span>
                    <span>ABCXYZ</span>
                </div>
                <div className="phone">
                    <span class="material-icons-outlined">
                        phone
                    </span>
                    <span>0935882288</span>
                </div>
                <div className="contact-icon">
                    <span class="material-icons-outlined">
                        contact_page
                    </span>
                    <span class="material-icons-outlined">
                        dialpad
                    </span>
                    <span class="material-icons-outlined">
                        call_end
                    </span>
                </div>
            </div>
            <div className="contact-letter">
                <div className="letter-information">
                    <h2>Get in Touch</h2>
                    <p>Feel free to drop me a file below</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
