import React from 'react'
import "../custom-button/custom-button.scss"

const CustomButton = ({children, isInContactPage, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} ${isInContactPage ? "contact-page-button" : ""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
