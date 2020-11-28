import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard(props) {
    
    return (
        <div class="card m-3">
            <div class="card-header">
                {props.title}
            </div>
            <div class="card-body">
                <div className="h5">{props.subtitle}</div>
                <p>{props.text}</p>
                <p class="card-text"><small class="text-muted">Updated: {props.updated}</small></p>
                <Link class="btn btn-success" to={"/cardano-starter-kits/" + props.id} role="button">Link</Link>
            </div>
        </div>
    );
}

export default ContentCard;