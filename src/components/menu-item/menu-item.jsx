import React from 'react'
import "../menu-item/menu-item.scss"

export const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className="background-image"></div>
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>    
        </div>
    )
}
