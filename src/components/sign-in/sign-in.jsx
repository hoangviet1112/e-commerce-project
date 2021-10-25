import React from 'react'
import "../sign-in/sign-in.scss"
import { useState } from 'react'
import InputForm from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

const SignIn = () => {

    const [profile, setProfile] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setProfile(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log("Email is: " + profile.email);
        console.log("Password is: " + profile.password);    
    }

    function handleSubmit(event) {
        event.preventDefault()
        setProfile({
            email: "",
            password: ""
        })
    }
    
    return (
        <div className="sign-in">
            <h2>I already have account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <InputForm label="email" onChange={handleChange} type="email" name="email" value={profile.email} required />
                <InputForm label="password" onChange={handleChange} type="password" name="password" value={profile.password} required />

                <CustomButton type="submit">
                    Sign in
                </CustomButton>
            </form>
        </div>
    )
}

export default SignIn
