import React from 'react';
import SHOP_DATA from './shop_data'
import  Collection  from '../../collection/collection.component';
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state= SHOP_DATA;
    }

    render(){
        

        return(
            <div>
                {this.state.map( ({id, ...otherCollectionProps})=> 
                    <Collection key={id} {...otherCollectionProps} />
                )}
            </div>
        );
    }
}

export default ShopPage;