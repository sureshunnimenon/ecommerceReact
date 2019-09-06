import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

// create a new instance/object of Context for the 'products'

const ProductContext = React.createContext()

//this object  has two objects, provider and consumer   

class ProductProvider extends Component {

    state={
        products: [],
        detailProduct: detailProduct,
        // cart:[],
        cart: [],  // for testing only.. will be removed 
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    // populate the products with data in store-products during the DOM render
    // this is required since the data is array of objects
    
    componentDidMount(){
        this.setProducts();
    }

    setProducts =() => {
        let products = []
        storeProducts.forEach(prod => {
            const singleItem = {...prod}
            products = [...products, singleItem]
        }) 

        this.setState(()=> {
            return {products: products}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find((prod) => prod.id === id);
        return product;
    }

    handleDetail = (id) => {
        // console.log("hello from detail")
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        console.log(`Hello from add to cart & id of item you clicked is: ${id}`)
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.inCart = true;
        product.count =1;
        product.total = product.price;

        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]}
        }, ()=> {console.log(this.state);
                 this.addTotals();
            })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(()=> {
            return {modalOpen: false}
        })
    }

    increment= (id) => {
        // console.log('this is incfement methd');  
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        
        // change quantity of the selected item
        product.count = product.count + 1;
        product.total = product.price * product.count;

        // change the state
        this.setState(() => {
            return {cart: [...tempCart]}
        }, () => {this.addTotals()})
    }

    decrement= (id) => {
        // console.log('this is decrement methd');    
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count-1;
        
        // change quantity of the selected item

        if (product.count === 0){
            this.removeItem(id)
        }

        else{
            
            product.total = product.price * product.count;  
            // change the state
            this.setState(() => {
                return {cart: [...tempCart]}
                }, () => {this.addTotals()})  
            }             
    }

    removeItem = (id) => {
        // console.log('item removed')
        let tempProduct = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart=tempCart.filter(item => item.id !== id)

        // managing product 
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index]

        // restore properties of the removed product
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0;

        console.log(removedProduct);

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProduct]
            }
        },this.addTotals() )


    }

    clearCart = () => {
        console.log('cart was cleared completely!');
        this.setState(()=> {
            return {cart: [] }
        }, () => {
            this.setProducts();
            this.addTotals()
         } )        
    }

    addTotals = () => {
        let subTotal =0;
        this.state.cart.map((item)=> {
           return subTotal += item.total
        });

        const tempTax = subTotal*0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal+tax;

        this.setState(()=> {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state, 
                                            handleDetail: this.handleDetail, 
                                            addToCart: this.addToCart,
                                            openModal: this.openModal,
                                            closeModal: this.closeModal,
                                            increment: this.increment,
                                            decrement: this.decrement,
                                            clearCart: this.clearCart,
                                            removeItem: this.removeItem}}>
                {this.props.children}
                
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
