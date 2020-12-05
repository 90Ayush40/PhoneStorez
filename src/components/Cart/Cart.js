import React from 'react';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartTotals from './CartTotals';
import CartList from './CartList';
import {ProductConsumer} from '../../context';


function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length>0){
                        return(
                            <React.Fragment>
                                <Title name='your' title='cart' />
                                <CartColumns />
                                <CartList
                                value={value} />
                                <CartTotals
                                value={value} />
                            </React.Fragment>  
                        );
                    }
                    else{
                        return <EmptyCart />;
                    }
                }}
            </ProductConsumer>
        </section>
    )
}

export default Cart
