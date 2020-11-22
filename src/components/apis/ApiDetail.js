import React from 'react';
import { useParams } from 'react-router-dom';
import { apiInfo } from '../../data/apiInfo';
import ApiDetailCard from '../util/ApiDetailCard';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {render} from 'react-dom'
import gfm from 'remark-gfm'


// something with set state here? can i use a hook to populate this page?
// and what is the best way to reference and error check the data / url?

function getApi(record) {
    for(var i = 0; i < apiInfo.length; i++){
        if(apiInfo[i].id === record){
            return apiInfo[i];
        }
    }
    return null;
}

function ApiDetail() {
    let params = useParams();
    let api = getApi(params.id);

    const linkDisplay = () => {
        let l = api.localLink;
        let g = api.gitHubLink;
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

    if (api == null){
        return "That API does not yet exist."
    }
    else {
        return (


 //               <div className="row mb-5">
 //                   <div className="col"></div>
 //                   <div className="col-10">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        { 
                        <ApiDetailCard id={api.id}
                            title={api.headerTitle}
                            subtitle={api.headerSubtitle}
                            text={api.headerText}
                            updated={api.updated}
                            gitHubLink={api.gitHubLink}
                            docLink={api.docLink}
                            markdownEndpoints={api.markdownEndpoints}
                            markdownExamples={api.markdownExamples}
                            testnet={api.testnet}
                            mainnet={api.mainnet}
                            img={api.img}
                        />
                         }
                    </div>
                  </div>
                </div>

                
//            <div className="container">
//                <div className="row">
//                    <div className="col">
//                        <h2 className="display-3">{api.headerTitle}</h2>
//                        <h3 className="display-5">{api.headerSubtitle}</h3>
//                        <p class="lead">{api.headerText}</p>
//                        <div>{linkDisplay()}</div>
//                    </div>
//
//                </div>
//            </div>
        )
    }

}

export default ApiDetail
