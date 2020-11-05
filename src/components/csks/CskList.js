import React, { Component } from 'react';
import { cskInfo } from '../../data/cskInfo';
import ContentCard from '../util/ContentCard';

class CskList extends Component {
    render() {
        return (
            <div className="container">
                <h1>List of CSKs</h1>
                { cskInfo.map(i => 
                    <ContentCard id={i.id}
                        title={i.headerTitle} 
                        subtitle={i.headerSubtitle} 
                        text={i.headerText} 
                        updated={i.updated}
                    />
                ) }
            </div>         
        );
    }
}

export default CskList;



