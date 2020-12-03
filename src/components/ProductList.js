import React, { Component } from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';

export default class ProductList extends Component {
    
    render() {

        // console.log(this.state.products)

        return (
            <React.Fragment>
            <div className='py-5'>
                <div className='container'>
                    <Title 
                    name='our'
                    title='products' />
                    {/* Products row */}
                    <div className='row'>
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map( product => {
                                    return <Product Key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>

        )
    }
}
