/**
 * @flow
 * @relayHash 89a1c783d294e7a96479f2902f4d5583
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type srcQueryResponse = {|
  +getCurrentTemperature: ?{|
    +value: ?string;
  |};
|};
*/


/*
query srcQuery {
  getCurrentTemperature(city: "Skopje") {
    value
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "city",
            "value": "Skopje",
            "type": "String"
          }
        ],
        "concreteType": "Temp",
        "name": "getCurrentTemperature",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": "getCurrentTemperature{\"city\":\"Skopje\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "srcQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "srcQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "city",
            "value": "Skopje",
            "type": "String"
          }
        ],
        "concreteType": "Temp",
        "name": "getCurrentTemperature",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": "getCurrentTemperature{\"city\":\"Skopje\"}"
      }
    ]
  },
  "text": "query srcQuery {\n  getCurrentTemperature(city: \"Skopje\") {\n    value\n  }\n}\n"
};

module.exports = batch;
