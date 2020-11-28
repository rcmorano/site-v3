import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {render} from 'react-dom'
import gfm from 'remark-gfm'

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={materialLight} language={language} children={value} />
  }
}

function ContentCard(props) {

    return (
        <div class="card mb-3">
            <div class="card-header">
                {props.title}
            </div>
            <div class="card-body">
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/images/' + props.img} class="img-fluid" alt="api cover"/>
                </div>
                <div className="h5">{props.subtitle}</div>
                <p>{props.text}</p>
                <Link class="btn btn-primary" to={"/open-source-apis/" + props.id} role="button">Learn More</Link>
                <p class="card-text"><small class="text-muted">Last update: {props.updated} (versions: testnet-{props.testnet.version}, mainnet-{props.mainnet.version})</small></p>
            </div>
        </div>
    );
}

export default ContentCard;
