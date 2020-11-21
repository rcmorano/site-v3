import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard(props) {
    
    return (
        <div class="card mb-3">
            <div class="card-header">
                {props.title}
            </div>
            <div class="card-body">
                <div className="h5">{props.subtitle}</div>
                <p>{props.text}</p>
                <p class="card-text"><small class="text-muted">{props.updated}</small></p>
                <p><a class="btn btn-primary" target="_blank" href={'https://' + props.id + '.mainnet.' + process.env.REACT_APP_API_DOMAIN} role="button">mainnet-example</a></p>
                <p><a class="btn btn-primary" target="_blank" href={'https://' + props.id + '.testnet.' + process.env.REACT_APP_API_DOMAIN} role="button">testnet-example</a></p>
                <Link class="btn btn-primary" to={props.gitHubLink} role="button">GitHub</Link>
                <Link class="btn btn-primary" to={props.docLink} role="button">Documentation</Link>
            </div>
        </div>
    );
}

export default ContentCard;
