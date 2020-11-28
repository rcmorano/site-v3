export const apiInfo = [
{
    id: "explorer-api",
    headerTitle: "cardano-rest/explorer-api",
    headerSubtitle: "You can use this REST API to gather basic info from the blockchain",
    headerText: "This is the currently officially supported API to explore Cardano transactions. In future it may be augmented or replaced by cardano-graphql, but cardano-explorer-api will be supported for some time, even once alternatives become available.",
    img: "showcase-explorer-api.png",
    gitHubLink: "https://github.com/input-output-hk/cardano-rest#overview",
    docLink: "https://input-output-hk.github.io/cardano-rest/explorer-api",
    updated: "November",
    mainnet: { version: "3.0.0" },
    testnet: { version: "3.0.0" },
    markdownEndpoints: `
- [testnet](https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://explorer-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,
    markdownExamples: `
- bash:
~~~bash
curl -s \\
  https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`/api/txs/last
~~~
`
},
{
    id: "submit-api",
    headerTitle: "cardano-rest/submit-api",
    headerSubtitle: "You can use this REST API to send signed-transactions to the blockchain",
    headerText: "This is the currently officially supported API to submit signed Cardano transactions to the blockchain.",
    img: "showcase-submit-api.png",
    gitHubLink: "https://github.com/input-output-hk/cardano-rest#overview",
    docLink: "https://input-output-hk.github.io/cardano-rest/submit-api/",
    updated: "November",
    mainnet: { version: "3.0.0" },
    testnet: { version: "3.0.0" },
    markdownEndpoints: `
- [testnet](https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://explorer-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,  
    markdownExamples: `
- bash:
~~~bash
# '/tmp/cbor-tx' should be a file containing 
# a valid 'application/cbor' signed transaction (in e.g., from cardano-cli)
curl -X POST \\
    --header "Content-Type: application/cbor" \\
    --data-binary @/tmp/cbor-tx \\
    https://submit-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`/api/submit/tx
~~~
`
},
{
    id: "graphql-api",
    headerTitle: "hasura/graphql-api",
    headerSubtitle: "You can use this GraphQL API to gather composed info from the blockchain",
    headerText: "GraphQL is a query language and execution environment with server and client implementations across many programming languages. The language can be serialized for network transmission, schema implementations hashed for assurance, and is suited for describing most domains.\nCardano project is implementing a GraphQL API, to make exploring blockchain data a breeze.",
    img: "showcase-graphql-api.png",
    gitHubLink: "https://github.com/input-output-hk/cardano-graphql#overview",
    docLink: "https://input-output-hk.github.io/cardano-graphql/",
    updated: "November",
    mainnet: { version: "3.0.0" },
    testnet: { version: "3.0.0" },
    markdownEndpoints: `
- [testnet](https://explorer-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://explorer-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,
    markdownExamples: `
- bash:    
~~~bash
# query db sync status
curl -H 'Content-Type: application/json' \\
     -H 'Accept: application/json' \\
     --data-binary \\
'{"query": \
    "query cardanoDbSyncProgress {\\n\
      cardanoDbMeta {\\n\
        initialized\\n\
        syncPercentage\\n\
    }\\n\
  }\\n\
"}' \\
     https://graphql-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`
~~~
`
},
{
    id: "ogmios-api",
    headerTitle: "KtorZ's cardano-node ogmios-api",
    headerSubtitle: "You can use this JSON-WSP (websocket) API to gather live blockchain info directly from a cardano-node instance",
    headerText: "Ogmios is a translation service written in Haskell running on top of cardano-node. It offers a JSON-WSP interface through WebSockets and enables clients to speak Ouroboros' mini-protocols via remote procedure calls over JSON.",
    img: "showcase-ogmios-api.png",
    gitHubLink: "https://github.com/KtorZ/cardano-ogmios",
    docLink: "https://ktorz.github.io/cardano-ogmios/",
    updated: "November",
    mainnet: { version: "2.0.0-beta" },
    testnet: { version: "2.0.0-beta" },
    markdownEndpoints: `
- [testnet (wss)](https://ogmios-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet (wss)](https://ogmios-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,
    markdownExamples: `
- bash (using [websocat](https://github.com/vi/websocat)):
~~~bash
echo '{ "type": "jsonwsp/request", "version": "1.0", "servicename": "ogmios", "methodname": "RequestNext", "args": {} }' \\
  | websocat --text -1 - wss://ogmios-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`

echo '{ "type": "jsonwsp/request", "version": "1.0", "servicename": "ogmios", "methodname": "FindIntersect", "args": { "points": [ "origin" ] } }' \\
  | websocat --text -1 - wss://ogmios-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`
~~~
`
},
{
    id: "postgrest-api",
    headerTitle: "cardano-db-sync/postgrest-api",
    headerSubtitle: "You can use this REST API to perform SQL queries to gather info from the blockchain",
    headerText: "Cardano DB Sync is to follow the Cardano chain and take information from the chain and an internally maintained copy of ledger state. Data is then extracted from the chain and inserted into a PostgreSQL database that can be accessed through a read-only REST API exposed by an instance of the postgREST project.",
    img: "showcase-postgrest-api.png",
    gitHubLink: "https://github.com/input-output-hk/cardano-db-sync",
    docLink: "https://github.com/input-output-hk/cardano-db-sync/blob/master/doc/interesting-queries.md",
    updated: "November",
    mainnet: { version: "6.0.0" },
    testnet: { version: "6.0.0" },
    markdownEndpoints: `
- [testnet](https://postgrest-api.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://postgrest-api.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,
    markdownExamples: `

- bash:    
~~~bash
# query metadata entry number 15
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?id=eq.15"
# query pool metadata whose URL contains "repsistance" 
curl -s "https://postgrest-api.mainnet.dandelion.link/pool_meta_data?url=like.*repsistance*"
# query metadata entries for SPOCRA proposalId "80064c28-1b03-4f1c-abf0-ca8c5a98d5b9"
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?json->>ProposalId=eq.80064c28-1b03-4f1c-abf0-ca8c5a98d5b9"
# query metadata entries for the whole SPOCRA network
curl -s "https://postgrest-api.mainnet.dandelion.link/tx_metadata?json->>NetworkId=eq.SPOCRA"
~~~

[Postgrest documentation](http://postgrest.org/en/latest/api.html) will be handy to explore the whole Cardano network throuh this API.

`
},
{
    id: "cardano-node-socket",
    headerTitle: "[coming-soon] cardano-node-socket-over-https",
    headerSubtitle: "You can use this REST API to setup a local socket file and use cardano-cli against it",
    headerText: "cardano-cli is the first class citizen supporting every new blockchain feature, and this endpoint helps to transport a cardano-node's socket to you using a secure HTTPS tunnel.\n Currently access to this API is enabled on demand. Authorization and secure channel is setup with https://github.com/jpillora/chisel and TCP-to-socket termination can be done by using `socat`",
    img: "showcase-comingsoon.jpg",
    gitHubLink: "https://github.com/input-output-hk/cardano-node#cardano-cli",
    docLink: "https://github.com/input-output-hk/cardano-node/blob/master/cardano-cli/README.md",
    updated: "November",
    mainnet: { version: "1.21.1" },
    testnet: { version: "1.23.0" },
    markdownEndpoints: `
- [testnet](https://cardano-node-socket.testnet.`+process.env.REACT_APP_API_DOMAIN+`)
- [mainnet](https://cardano-node-socket.mainnet.`+process.env.REACT_APP_API_DOMAIN+`)
`,
    markdownExamples: `
~~~bash
# TODO
~~~
`
},
]
