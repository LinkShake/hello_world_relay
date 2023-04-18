import * as React from "react";
import { graphql } from "relay-runtime";
import { useRefetchableFragment } from "react-relay";
import type { ContactsListFragment$key } from "./__generated__/ContactsListFragment.graphql";
import Card from "./Card";
import ContactRow from "./ContactRow";
import SearchInput from "./SearchInput";

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer
  @refetchable(queryName: "ContactsListRefetchQuery")
  @argumentDefinitions(search: { type: "String", defaultValue: null }) {
    contacts(search: $search) {
      id
      ...ContactRowFragment
    }
  }
`;

const { useState, useTransition } = React;

export default function ContactsList({ viewer }: Props) {
  const [isPending, startTransition] = useTransition();
  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer);
  const [inputField, setInputField] = useState<string>("");
  const onInputFieldChange = (value: string) => {
    setInputField(value);
    startTransition(() => {
      refetch({ search: value });
    });
  };
  return (
    <Card dim={true}>
      <h3>Contacts</h3>
      <SearchInput
        value={inputField}
        onChange={onInputFieldChange}
        isPending={isPending}
      />
      {data.contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </Card>
  );
}
