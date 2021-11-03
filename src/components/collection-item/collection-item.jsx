import React from 'react'
import "../collection-item/collection-item.scss"
import CustomButton from '../custom-button/custom-button'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = (props) => {
    const dispatch = useDispatch()
    
    return (
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}>
            </div>
            <div className="collection-footer">
                <span className="name">{props.name}</span>
                <span className="price">${props.price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(props.item))} inverted>ADD TO CART</CustomButton>    
        </div>
    )
}

export default CollectionItem
