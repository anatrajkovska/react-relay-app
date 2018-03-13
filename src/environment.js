import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  
  function fetchQuery(
    operation,
    variables,
  ) {
    return fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
  }
  
  const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),  
  });
  
  export default environment;