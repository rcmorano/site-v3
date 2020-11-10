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

    const linkDisplay = () => {
        let l = csk.localLink;
        let g = csk.gitHubLink;
        if (g != null){
            return (
                <div>
                    <h4>Access the Cardano Starter Kit</h4>
                    <ul>
                        <li><a href={l}>Full Documentation</a></li>
                        <li><a href={g}>GitHub</a></li>
                    </ul>
                </div>
            );
        }
        else {
            return (
                <p class="lead">Details at {l}</p>
            );
        }

    }

    if (csk == null){
        return "That CSK does not yet exist."
    }
    else {
        return (
                
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="display-3">{csk.headerTitle}</h2>
                        <h3 className="display-5">{csk.headerSubtitle}</h3>
                        <p class="lead">{csk.headerText}</p>
                        <div>{linkDisplay()}</div>
                    </div>
                    <div className="col">
                        <img src={process.env.PUBLIC_URL + '/images/' + csk.img} class="img-fluid" alt="csk cover"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CskDetail
