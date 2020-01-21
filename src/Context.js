import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data"

const ProductContext = React.createContext();
class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:[],
        cart:[],
        modalOpen:false,
        modalProduct:[]
    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts=()=>{
        let tempProducts= [];
        storeProducts.forEach(item=>{
            const singleProduct = {...item}
            tempProducts=[...tempProducts,singleProduct]
        })
        this.setState(()=>{
            return {
                products: tempProducts
            }
        })
    }

    openModal=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {
                modalProduct: product,
                modalOpen:true
            }
        })
    }

    closeModal=()=>{
        this.setState(()=>{
            return {
                modalOpen: false
            }
        })
    }

    getItem=id=> {
        const product = this.state.products.find(item=> item.id===id)
        return product;
    }

    handleDetail= id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }

    addToCart =id=>{
        const tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count +=1
        product.total = product.price * product.count;
        this.setState(()=>{
            return {
                cart: [...this.state.cart],
            product: tempProducts
                }
        },
            ()=>{
            console.log(this.state)
            })

        console.log('hello added to cart ${id}')
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail: this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer =  ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
