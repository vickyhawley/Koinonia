import React, { useState, useEffect} from 'react';
import Product from '../components/Product';
import { Row, Col} from 'react-bootstrap';
import axios from 'axios';


const LatestScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
        
        setProducts(data)
        }

        fetchProducts()
    }, [])
return (
    <>
    <h1>Latest Paintings</h1>
           <Row className='LatestStyle'>
             {products.map(product => 
                <Col sm={12} md={6} lg={4}>
                <Product product={product}/>
                </Col>)}
            </Row>
            </>
)

}

export default LatestScreen;