import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function MessariAxios() {

    const [coin, getCoin] = useState([]);

    useEffect(() => {
        Axios.get('https://data.messari.io/api/v1/assets/ada/metrics/market-data').then(result => getCoin(result.data))
    }, []);

    return (
        <div className="container">
            <h1>
                Current {coin.data.name} price: {coin.data.market_data.price_usd}
            </h1>
            <p>
                Data courtesy of <a href="https://messari.io/api/docs">Messari's Crypto Data API (1.0.0)</a> 
            </p>
        </div>
    )
}

export default MessariAxios;
