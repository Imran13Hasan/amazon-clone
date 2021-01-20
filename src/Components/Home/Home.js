import React, { useEffect, useState } from 'react';
import './Home.css';
import Image from '../../img/slide-4.jpg'
import Product from '../Product/Product';
import fakeData from '../../fakeData.json'

const Home = () => {
    const [products, setProducts] = useState(fakeData);
    // console.log(products)

    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src={Image} alt="" />
                    {
                        products.map(pd => <Product pd={pd}  key={pd.id}></Product>)
                    }
            </div>
        </div>
    );
};

export default Home;