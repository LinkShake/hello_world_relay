import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
// import type { SidebarQuery as SidebarQueryType } from "./__generated__/SidebarQuery.graphql";
import type { SidebarFragment$key } from "./__generated__/SidebarFragment.graphql";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";

const SidebarFragment = graphql`
  fragment SidebarFragment on Viewer {
    ...ViewerProfileFragment
    ...ContactsListFragment
  }
`;

export default function Sidebar({ props }: { props: SidebarFragment$key }) {
  return (
    <div className="sidebar">
      <React.Suspense fallback={<LoadingSpinner />}>
        <SidebarContents props={props} />
      </React.Suspense>
    </div>
  );
}

function SidebarContents({ props }: { props: SidebarFragment$key }) {
  const data = useFragment(SidebarFragment, props);
  return (
    <>
      <ViewerProfile viewer={data} />
      <ContactsList viewer={data} />
    </>
  );
}
