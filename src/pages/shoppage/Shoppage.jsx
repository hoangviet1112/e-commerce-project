import React from 'react'
import CollectionPreview from '../../components/preview-collection/preview-collection'
import SHOP_DATA from './ShopData'
import "../shoppage/Shoppage.scss"


export const Shoppage = () => {
    
    const collections = SHOP_DATA
    
    return (
        <div className="shop-page">
            {collections.map(collection => {
                return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
            })}   
        </div>
    )
}
