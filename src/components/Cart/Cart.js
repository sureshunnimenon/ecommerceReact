import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import Emptycart from './Emptycart'

import { ProductConsumer } from '../../context'

import Cartlist from './Cartlist'
import CartTotals from './CartTotals'


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if (cart.length > 0){
                            return (
                                <>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <Cartlist  value = {value}/> 
                                <CartTotals value = {value} history = {this.props.history} /> 
                                </>

                            )
                        }
                        else {
                            return (
                                <Emptycart /> 
                            )
                        }
                    }
                    }

                    </ProductConsumer>
                
               
            </section>
        )
    }
}
