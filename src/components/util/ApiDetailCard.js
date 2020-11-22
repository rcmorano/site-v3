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
                <div className="h5">{props.subtitle}</div>
                <p>{props.text}</p>
                <p class="card-text"><small class="text-muted">Endpoints:</small></p>
                <ReactMarkdown renderers={renderers} plugins={[gfm]} children={props.markdownEndpoints} />
                <p class="card-text"><small class="text-muted">Examples:</small></p>
                <ReactMarkdown renderers={renderers} plugins={[gfm]} children={props.markdownExamples} />
                <p class="card-text"><small class="text-muted">Reference Links:</small></p>
                <li><a class="btn btn-primary" target="_blank" href={props.gitHubLink} role="button">GitHub</a></li>
                <li><a class="btn btn-primary" target="_blank" href={props.docLink} role="button">Documentation</a></li>
                <p class="card-text"><small class="text-muted">Last update: {props.updated} (versions: testnet-{props.testnet.version}, mainnet-{props.mainnet.version})</small></p>
            </div>
        </div>
    );
}

export default ContentCard;
