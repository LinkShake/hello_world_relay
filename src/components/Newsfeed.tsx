import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
// import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import { NewsfeedFragment$key } from "./__generated__/NewsfeedFragment.graphql";

const NewsfeedFragment = graphql`
  fragment NewsfeedFragment on Query {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed({ props }: { props: NewsfeedFragment$key }) {
  const data = useFragment(NewsfeedFragment, props);
  const stories = data.topStories;

  return (
    <div className="newsfeed">
      {stories?.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </div>
  );
}
