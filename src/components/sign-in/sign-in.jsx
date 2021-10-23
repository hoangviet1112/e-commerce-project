import React from 'react'
import "../sign-in/sign-in.scss"
import { useState } from 'react'

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
        console.log(profile.email);
        console.log(profile.password);    
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
                <input onChange={handleChange} type="email" name="email" value={profile.email} required />
                <label>Email</label>
                <input onChange={handleChange} type="password" name="password" value={profile.password} required />
                <label>Password</label>

                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default SignIn
