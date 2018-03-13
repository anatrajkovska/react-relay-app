
export function fetchQuery(query, variables = {}) {
    return fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }).then(resp => resp.json());
  }