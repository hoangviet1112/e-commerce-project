import "../collections-overview/CollectionsOverview.scss"

import React from 'react'
import { useSelector } from "react-redux"
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors"
import CollectionPreview from "../preview-collection/preview-collection"

const CollectionsOverview = () => {
    const state = useSelector(state => state)
    const collections = selectCollectionForPreview(state)

    return (
        <div className="collection-overview">
            {
                collections.map(collection => {
                    return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />    
                })
            }
        </div>
    )
}

export default CollectionsOverview
