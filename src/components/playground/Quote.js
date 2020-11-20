import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function Quote() {

    const [symbol, setSymbol] = useState("");
    const [lookup, setLookup] = useState("");
    const [name, setName] = useState ("");
    const [price, setPrice] = useState(0);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setLookup(symbol);
    }
  
    useEffect(() => {
      async function fetchData() {
          const request = await Axios.get('https://data.messari.io/api/v1/assets/' + lookup + '/metrics/market-data');
          setName(request.data.data.name);
          setPrice(request.data.data.market_data.price_usd);
          return request;
      }
  
      fetchData();
    }, [lookup]);
  
    function coinInfo() {
      if(lookup !== ""){
        return(
          <Fragment>
            <p>Name: {name}</p>
            <p>Price: {price}</p>  
          </Fragment>
        );
      }
      else{
        return(
          <Fragment>
            <p>Name: Look up a coin</p>
            <p>Price: Awaiting your input</p>
          </Fragment>
        );
      }
    }
  
    return (
        <div class="card" style={{width: '25rem'}}>
        <div className="card-header">
            Cardano Starter Kit #003
        </div>
        <div className="card-body">

            {coinInfo()}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter a symbol:</label>
                    <input
                    type="text"
                    class="form-control mb-2"
                    value={symbol}
                    onChange={e => setSymbol(e.target.value)}
                    />

                </div>
        
            <input type="submit" value="Submit" />
            </form>

        </div>
        </div>
    )
}


export default Quote;
