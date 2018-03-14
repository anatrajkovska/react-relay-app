
export function fetchQuery(query, variables = {}) {
    return fetch('http://localhost:8080/graphql', {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
    }).then(resp => resp.json());
}