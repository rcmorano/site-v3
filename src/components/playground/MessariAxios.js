import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function MessariAxios() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get('https://data.messari.io/api/v1/assets/ada/metrics/market-data');
            setName(request.data.data.name);
            setPrice(request.data.data.market_data.price_usd)
            return request;
        }
        fetchData()
    }, []);

    // still need to add a loading function above!

    return (
        <div className="container">
            <h1>
                {name} and {price}
            </h1>
            <p>
                Data courtesy of <a href="https://messari.io/api/docs">Messari's Crypto Data API (1.0.0)</a> 
            </p>
        </div>
    )
}

export default MessariAxios;
