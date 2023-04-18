import * as React from "react";
import Newsfeed from "./Newsfeed";
import LoadingSpinner from "./LoadingSpinner";
import Sidebar from "./Sidebar";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay/hooks";
import type { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";

const AppQuery = graphql`
  query AppQuery {
    ...NewsfeedFragment
    viewer {
      ...SidebarFragment
    }
  }
`;

export default function App() {
  console.log("2 rendered");
  const data = useLazyLoadQuery<AppQueryType>(AppQuery, {
    fetchPolicy: "store-or-network",
  });
  console.log("ciao");
  console.log(data);
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <div className="app">
        <Newsfeed props={data} />
        <Sidebar props={data.viewer} />
      </div>
    </React.Suspense>
  );
}
