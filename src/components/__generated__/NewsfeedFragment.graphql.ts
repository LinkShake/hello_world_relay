/**
 * @generated SignedSource<<8f57d3b019dccb29d04e52f114705731>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedFragment$data = {
  readonly topStories: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
  } | null> | null;
  readonly " $fragmentType": "NewsfeedFragment";
};
export type NewsfeedFragment$key = {
  readonly " $data"?: NewsfeedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsfeedFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "StoryFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d75b0d8e6aaffe1e425f9acaed88fe08";

export default node;
