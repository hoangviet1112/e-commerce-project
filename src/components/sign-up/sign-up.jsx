import React, { useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase-config'
import CustomButton from '../custom-button/custom-button'
import InputForm from '../form-input/form-input'
import "../sign-up/sign-up.scss"

const SignUp = () => {
    const [newProfile, setNewProfile] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    

    function handleChange(event) {
        const {name, value} = event.target;
        setNewProfile(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })  
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (newProfile.password !== newProfile.confirmPassword) {
            alert("Password do not match!!!")
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(newProfile.email, newProfile.password)
            await createUserProfileDocument(user, newProfile.displayName)
            setNewProfile({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <InputForm 
                type="text"
                label="Display Name"
                onChange={handleChange}
                name="displayName"
                value={newProfile.displayName}
                required
                />
                <InputForm 
                label="Email"
                onChange={handleChange}
                type="email"
                name="email"
                value={newProfile.email}
                required
                />
                <InputForm 
                label="Password"
                onChange={handleChange}
                type="password"
                name="password"
                value={newProfile.password}
                required
                />
                <InputForm 
                label="Confirm Password"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={newProfile.confirmPassword}
                required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>    
        </div>
    )
}

export default SignUp
