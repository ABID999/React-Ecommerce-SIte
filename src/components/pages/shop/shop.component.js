import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../collection-overview/collection-overview.component';
import './shop.styles.scss';
import Category from '../../category/category.component';


class ShopPage extends React.Component{
    render(){
        const match = this.props.match;
        return(
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:categoryId`} component={Category}/>
            </div>
        );
    }
}



export default ShopPage;