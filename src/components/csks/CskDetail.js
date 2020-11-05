import React from 'react';
import { useParams } from 'react-router-dom';
import { cskInfo } from '../../data/cskInfo';

// something with set state here? can i use a hook to populate this page?
// and what is the best way to reference and error check the data / url?

function getCSK(record) {
    for(var i = 0; i < cskInfo.length; i++){
        if(cskInfo[i].id === record){
            return cskInfo[i];
        }
    }
    return null;
}

function CskDetail() {
    let params = useParams();
    let csk = getCSK(params.id);

    if (csk == null){
        return "That CSK does not yet exist."
    }
    else {
        return (
                
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <h2 className="display-1">{csk.headerTitle}</h2>
                        <h3 className="display-4">{csk.headerSubtitle}</h3>
                        <p class="lead">{csk.headerText}</p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }

}

export default CskDetail
