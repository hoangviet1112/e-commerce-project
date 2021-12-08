import "./CollectionPage.scss"
import React from 'react'
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = ({ match }) => {
    const state = useSelector(state => state)
    const collection = selectCollection(match.params.collectionId)(state)
    
    const { title, items } = collection

    return (
        <div className="collection-page">
            <h2 className="collection-title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} name={item.name} imageUrl={item.imageUrl} price={item.price}/>)
                }
            </div>
        </div>
    )
}

export default CollectionPage
