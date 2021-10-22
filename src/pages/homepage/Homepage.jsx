import React from 'react'
import { Directory } from '../../components/directory/directory'
import { MenuItem } from '../../components/menu-item/menu-item'
import "../homepage/Homepage.scss"

export const Homepage = () => {
    return (
        <div className="homepage">
            <Directory />    
        </div>
    )
}
