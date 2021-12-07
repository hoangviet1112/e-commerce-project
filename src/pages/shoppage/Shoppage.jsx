import React from 'react'
import "../shoppage/Shoppage.scss"
import { Route } from "react-router-dom"
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'


export const Shoppage = ({ match }) => {    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>  
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}
