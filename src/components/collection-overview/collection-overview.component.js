import React from 'react';
import {connect} from 'react-redux';
import Collection from '../collection/collection.component';

const CollectionOverview = (props) =>(
    <div>
        {props.shop_data.map( ({id, ...otherCollectionProps})=> 
            <Collection key={id} {...otherCollectionProps} />
        )}
    </div>
)


const mapStateToProps = state =>({
    shop_data: state.shop.shop_data
});

export default connect(mapStateToProps)(CollectionOverview);