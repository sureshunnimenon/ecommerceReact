import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context'

export default class Productlist extends Component {
    state = {
        products: []
    } 

    render() {
        return (
            <>
                {/* <h3> Hello from Productlist </h3> */}
                <div className="py-5">
                    <div className="container">                            
                        <Title name="our" title="products"/>
                             {/* product row */}
                            <div className="row">
                                <ProductConsumer>
                                    {value => {
                                        return value.products.map((product) => 
                                            (
                                                <Product key={product.id} product={product} />
                                            )
                                        )
                                    }}
                                </ProductConsumer> 
                                </div> 
                                
                    </div>
                </div>
            </>
        )
    }
}
