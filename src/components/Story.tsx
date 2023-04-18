import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PosterByline from "./PosterByline";
import StorySummary from "./StorySummary";
import Image from "./Image";
import Timestamp from "./Timestamp";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { StoryFragment$key } from "./__generated__/StoryFragment.graphql";

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    id
    title
    summary
    createdAt
    poster {
      ...PosterBylineFragment
    }
    thumbnail {
      ...ImageFragment @arguments(width: 400, height: 400)
    }
  }
`;

type Props = {
  story: StoryFragment$key;
};

export default function Story({ story }: Props): React.ReactElement {
  const data = useFragment(StoryFragment, story);
  return (
    <Card>
      <PosterByline poster={data.poster} />
      <Heading>{data.title}</Heading>
      <Image image={data.thumbnail} width={400} height={400} />
      <Timestamp time={data.createdAt} />
      <StorySummary summary={data.summary} />
    </Card>
  );
}
