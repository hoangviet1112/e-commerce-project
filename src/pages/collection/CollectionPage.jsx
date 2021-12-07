import "./CollectionPage.scss"
import React from 'react'

const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId);
    return (
        <div>
            <h2>Category Page</h2>
        </div>
    )
}

export default CollectionPage
