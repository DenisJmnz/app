import './Container.css';
import Table from '../Table/Table';
import Form from '../Form/Form';
import Paginator from '../Paginator/Paginator';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = ({ title }) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    
    const [finalPage, setFinalPage] = useState(1);

    const [ currentProducts, setProducts ] = useState([]);

    const [ currentFilters, setFilters ] = useState(null);

    useEffect(() => {
        console.log('ENTRAMOS EN EL USEEFFECT')
        axios.get(getURL()).then(res => {
            const { page, totalPages, products } = res.data;
            setProducts(products);
            setCurrentPage(page);
            setFinalPage(totalPages);
        });
    }, [currentFilters, currentPage])


    const getURL = () => {
        let url = 'http://localhost:5000/products/search?';
        if(currentFilters) {
            const { brand, color, price } = currentFilters;
            url += `brand=${brand || ''}&color=${color || ''}&price=${price || ''}`;
        }

        url += `&pageN=${currentPage}`;
        console.log('URL', url);
        return url;
    }


    return (
        <div>
            <h1>{title}</h1>
            <Form setFilters={setFilters}/>
            {currentProducts.length !== 0 && <Table data={currentProducts}/>}
            <Paginator
                currentPage={currentPage}
                finalPage={finalPage}
                next={() => { setCurrentPage(prev => prev === finalPage ? prev : ++prev) }}
                prev={() => { setCurrentPage(prev => prev === 1 ? prev : --prev) }}
            />
        </div>
    )
}

export default Container;