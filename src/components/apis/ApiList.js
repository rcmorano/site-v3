import React, { Component } from 'react'
import { apiInfo } from '../../data/apiInfo';
import ApiCard from '../util/ApiCard';

class ApiList extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <h1 className="display-4">OpenSource APIs</h1>
                        <p class="lead">Open and free (as in free beer) hosted services maintained by <a target="_blank" href={'https://'+process.env.REACT_APP_API_DOMAIN}>{process.env.REACT_APP_API_DOMAIN}</a>. Please feel free to use them to explore and build projects inspired by your CSK experiences .</p>
                    </div>
                    <div className="col"></div>
                </div>    
                <div className="row mb-5">
                    <div className="col"></div>
                    <div className="col-10">
                        { apiInfo.map(i => 
                        <ApiCard id={i.id}
                            title={i.headerTitle} 
                            subtitle={i.headerSubtitle} 
                            text={i.headerText} 
                            updated={i.updated}
                            gitHubLink={i.gitHubLink}
                            docLink={i.docLink}
                        />
                        ) }
                    </div>
                    <div className="col"></div>
                </div>
            </div>

     
        );
    }
}

export default ApiList
