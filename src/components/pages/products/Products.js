import React from 'react'
import BOOKS_DATA from '../../Data'
import WitnessPreview from "../../witness/Witness"

class ProductsPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: BOOKS_DATA

    };
  }

  render(){
    const { collections }  = this.state;
    return(
      <div className="products-page">
      {
        collections.map(({id, ...otherWitnessProps} )=> (
          <WitnessPreview key= {id} {...otherWitnessProps}/>
        ))
      }
      </div>
    )
  }
}

export default ProductsPage;