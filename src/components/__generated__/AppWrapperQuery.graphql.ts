/**
 * @generated SignedSource<<09379f251b928d27d09d2fd772f98a25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppWrapperQuery$variables = {};
export type AppWrapperQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"SidebarFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedFragment">;
};
export type AppWrapperQuery = {
  response: AppWrapperQuery$data;
  variables: AppWrapperQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isActor"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "altText",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppWrapperQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NewsfeedFragment"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SidebarFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppWrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStories",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "poster",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 60
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 60
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(height:60,width:60)"
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 400
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 400
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(height:400,width:400)"
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "search",
                "value": "S"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/),
              (v1/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "contacts(search:\"S\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d69e79e416e094515ddf046f9bf7dfe4",
    "id": null,
    "metadata": {},
    "name": "AppWrapperQuery",
    "operationKind": "query",
    "text": "query AppWrapperQuery {\n  ...NewsfeedFragment\n  viewer {\n    ...SidebarFragment\n  }\n}\n\nfragment ContactRowFragment on Actor {\n  __isActor: __typename\n  name\n  profilePicture {\n    ...ImageFragment\n  }\n}\n\nfragment ContactsListFragment on Viewer {\n  contacts(search: \"S\") {\n    __typename\n    id\n    ...ContactRowFragment\n  }\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n\nfragment ImageFragment_1YYarZ on Image {\n  url(width: 400, height: 400)\n  altText\n}\n\nfragment ImageFragment_3XLoCc on Image {\n  url(width: 60, height: 60)\n  altText\n}\n\nfragment NewsfeedFragment on Query {\n  topStories {\n    ...StoryFragment\n    id\n  }\n}\n\nfragment PosterBylineFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  profilePicture {\n    ...ImageFragment_3XLoCc\n  }\n}\n\nfragment SidebarFragment on Viewer {\n  ...ViewerProfileFragment\n  ...ContactsListFragment\n}\n\nfragment StoryFragment on Story {\n  title\n  summary\n  createdAt\n  poster {\n    __typename\n    ...PosterBylineFragment\n    id\n  }\n  thumbnail {\n    ...ImageFragment_1YYarZ\n  }\n}\n\nfragment ViewerProfileFragment on Viewer {\n  actor {\n    __typename\n    name\n    profilePicture {\n      url\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "01f406c28cd0992d7a9dbd1419010037";

export default node;
