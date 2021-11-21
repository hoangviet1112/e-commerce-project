import "../contactpage/ContactPage.scss"

import React from 'react'
import InputForm from "../../components/form-input/form-input"
import { useState } from "react"
import CustomButton from "../../components/custom-button/custom-button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactPageFooter from "../../components/contact-page-footer/ContactPageFooter"

const ContactPage = () => {
    const [contactProfile, setContactProfile] = useState({
        username: "",
        email: "",
        message: ""
    })
    
    function handleChange(event) {
        const {name, value} = event.target
        setContactProfile(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(contactProfile);
    }
    
    return (
        <div>
            <div className="contact-page">
                <div className="contact-page-header">
                    <h1>CONTACT US</h1>    
                </div>
                <h3>Call For A Consultation at (+84) 935882288</h3>
                <h3>Or Fill Out The Form Below</h3>
                <div className="contact-page-information">
                    <form className="contact-page-information-form" onSubmit={handleSubmit}> 
                        <InputForm label="Username" name="username" type="text" onChange={handleChange} value={contactProfile.username} required/>
                        <InputForm label="Email" name="email" type="email" onChange={handleChange} value={contactProfile.email} required />
                        <textarea className="contact-page-information-message" rows="5"/>
                        <CustomButton isInContactPage onClick={handleSubmit}>SEND</CustomButton>
                    </form>        
                </div>
            </div>
            <ContactPageFooter />
        </div>
    )
}

export default ContactPage
