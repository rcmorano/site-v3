import React, { Component } from 'react';
import { cskInfo } from '../../data/cskInfo';
import ContentCard from '../util/ContentCard';

class CskList extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <h1 className="display-4">Cardano Starter Kits</h1>
                    <br />
                    <br />
                    <p class="lead">A CSK is your chance to get hands on with Cardano.</p>
                    <p class="lead">As Goguen and Voltaire continue to roll out, we'll be here exploring what these tools can do.</p>
                </div>
                   
                <div className="row mb-5">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        { cskInfo.map(i => 
                            <ContentCard id={i.id}
                                title={i.headerTitle} 
                                subtitle={i.headerSubtitle} 
                                text={i.headerText} 
                                updated={i.updated}
                            />
                        ) }    
                    </div>
              
                </div>
            </div>

     
        );
    }
}

export default CskList;



