import React from 'react';
import {connect} from 'react-redux';
import './category.styles.scss';
import CollectionItem from '../collection-item/collection-item.components';

const Category = ({match, category}) => (

    <div className="category-container">
        {/* <h1>{match.params.categoryId} Category page</h1> */}
        
        <h1>{category[0].title}</h1>
        
        <div className="item-container">
            {category[0].items.map( item =>(
                <CollectionItem key={item.id} item={item} />
            ))
            }
        </div>
    </div>
)

const mapStateToProps = (state,ownProps) =>{
    const id = ownProps.match.params.categoryId;
    return {
        category: state.shop.shop_data.filter( category => category.id == id)
    }
}

export default connect(mapStateToProps)(Category);