import React from 'react'
import "../form-input/form-input.scss"

const InputForm = ({onChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" type="text" onChange={onChange} {...otherProps} />
            {
                label ? 
                (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>   
                    {label}
                </label>)
                : null
            }    
        </div>
    )
}

export default InputForm
