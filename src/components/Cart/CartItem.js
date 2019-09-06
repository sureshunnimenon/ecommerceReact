import React from 'react'


export default function CartItem({item, value}) {
    const {id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div>
            {/* this is a cart item */}
            <div className = "container-fluid text-center d-none d-lg-block">
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx auto col-lg-2" >
                    <img className="img-fluid" src={img} alt="prod" style = {{width: '4rem', height:'3rem'}}/>
                </div>

                <div className="col-10 mx-auto col-lg-2" >
                    <span> {title} </span>
                </div>

                <div className="col-10 mx-auto col-lg-2" >
                    <p> {price} </p>
                </div>
                
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center"> 
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}> - </span>
                        <span className="btn btn-black mx-1"> {count} </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}> + </span>
                     </div>
                </div>

                <div className="col-10 mx-auto col-lg-2" >
                    <div className="cart-icon" onClick={() => removeItem(id)}> <i className="fas fa-trash"></i></div>
                </div>

                <div className="col-10 mx-auto col-lg-2" >
                    <strong> item total: $ </strong> {total}
                </div>

                              
                </div> 
        </div>
        </div>
    )
}
