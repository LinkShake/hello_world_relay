import * as React from "react";
import Newsfeed from "./Newsfeed";
// import LoadingSpinner from "./LoadingSpinner";
import Sidebar from "./Sidebar";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";

export default function App() {
  const data = useLazyLoadQuery<AppQueryType>(
    graphql`
      query AppQuery {
        ...NewsfeedFragment

        viewer {
          ...SidebarFragment
        }
      }
    `,
    {}
  );

  return (
    <>
      <Newsfeed props={data} />
      <Sidebar props={data.viewer} />
    </>
  );
}
