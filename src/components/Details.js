import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import {ButtonContainer} from '../components/Navbar'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>                                
                            </div>
                                {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3" >
                                    <img src={img} alt="product" className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                                    <h2> model: {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase"> {company}</span>
                                    </h4>
                                    <h4 className="text-blue"> <strong>price: <span>$</span>{price}</strong></h4>

                                    <p className="text-capitalize.mt-3.mb-0.font-weight-bold" >Some info on product:</p> 
                                    <p className="text-muted lead"> {info}</p>

                                    <div>
                                        <Link to="/"> <ButtonContainer>
                                           Back to products </ButtonContainer></Link>
                                        <ButtonContainer cart disabled={inCart   } 
                                            onClick = {() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }} > {inCart ? "In cart":"Add to cart"}</ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )                    
                }}

            </ProductConsumer>
        )
    }
}
