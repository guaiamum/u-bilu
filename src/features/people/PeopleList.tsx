import Person from "./Person";
import type { Person as PersonType } from "./Person";

import { ReactNode, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { add } from "./peopleSlice";

type PeopleListProps = { people: PersonType[], blockListIds?: string[], onPersonClick: (personId: string) => void, sideAddornment?: ReactNode };

export const WithAddButton: React.FC<PeopleListProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch()
  return (
    <PeopleList {...props}>
      <input
        type="text"
        placeholder="Enter a name..."
        name="new-person"
        className="bg-transparent border-b-2"
        ref={inputRef}
      />
      <button
        className="p-3 font-bold"
        onClick={() => {
          dispatch(add({ id: null, name: inputRef.current.value }));
        }}
      >
        +
      </button>
    </PeopleList>
  );
};

const PeopleList: React.FC<PeopleListProps> = ({ people, blockListIds = [], onPersonClick, sideAddornment, children }) => {
  return (
    <section className="border-t border-opacity-70 border-gray-200 m-2">
      {people
        .filter(({ id }) => !blockListIds.includes(id))
        .map((person) => {
          return <button key={person.id} className="flex items-center justify-between mt-2 w-full p-2 rounded-md border border-gray-400" onClick={() => onPersonClick(person.id)}>
            <Person {...person} />
            {sideAddornment}
          </button>;
        })}
      {children}
    </section>
  );
};

export default PeopleList;
