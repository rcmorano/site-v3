import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function Quote() {

    const [symbol, setSymbol] = useState("");
    const [lookup, setLookup] = useState("");
    const [name, setName] = useState ("");
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setLookup(symbol);
    }
  
    useEffect(() => {
      setLoading(true);
      async function fetchData() {
          const request = await Axios.get('https://data.messari.io/api/v1/assets/' + lookup + '/metrics/market-data');
          setName(request.data.data.name);
          setPrice(request.data.data.market_data.price_usd);
          setTimeout(() => {
            setLoading(false);
          }, 300);
          return request;
      }
      fetchData();
    }, [lookup]);
  
    function coinInfo() {
      if(loading){
        return(
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        );
      }
      else if(lookup !== ""){
        return(
          <Fragment>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>  
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
        <div class="card mb-5" style={{width: '40rem'}}>
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
