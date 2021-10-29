import Person from "./Person";
import type { Person as PersonType } from "./Person";

import { ReactNode, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { add } from "./peopleSlice";

type PeopleListProps = { people: PersonType[], blockListIds?: string[], sideActionCTA: ReactNode, actionCbx: (personId: string) => void };

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

const PeopleList: React.FC<PeopleListProps> = ({ people, blockListIds = [], sideActionCTA, actionCbx, children }) => {
  return (
    <section className="border-t-2 border-opacity-70 border-gray-400 m-2">
      {people
        .filter(({ id }) => !blockListIds.includes(id))
        .map((person) => {
          return <div key={person.id} className="flex items-center">
            <Person {...person} />
            <button
              className="p-3 font-bold"
              onClick={() => {
                actionCbx(person.id);
              }}
            >
              {sideActionCTA}
            </button>
          </div>;
        })}
      {children}
    </section>
  );
};

export default PeopleList;
