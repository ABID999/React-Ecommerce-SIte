import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
/*
class Directory extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
            ]
        }
    }

    render(){

*/
const Directory = ({directory})=>{
  return(
      <div className="directory-menu">
          {directory.sections.map( ({id, ...otherSectionProps})=>{
              return <MenuItem key={id} {...otherSectionProps} />
          })}
          {/*this.state.sections.map( ({title, imageUrl,size,id, linkUrk})=>{
              return <MenuItem key={id} imageUrl={imageUrl} title={title.toUpperCase()} size={size} />
          })*/}
      </div>
  )
}

const mapStateToProps = state =>({
  directory: state.directory
})

export default connect(mapStateToProps)(Directory);