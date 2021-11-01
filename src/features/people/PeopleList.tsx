import Person from "./Person";
import type { Person as PersonType } from "./Person";

import { ReactNode, useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { add } from "./peopleSlice";

type PeopleListProps = { people: PersonType[], blockListIds?: string[], onPersonClick: (personId: string) => void, sideAddornment?: ReactNode };

export const WithAddButton: React.FC<PeopleListProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()

  const onAdd = () => {
    dispatch(add({ id: null, name: inputRef.current.value }))
    setValue('')
  };
  return (
    <PeopleList {...props}>
      <input
        type="text"
        placeholder="Enter a name..."
        name="new-person"
        className="bg-transparent border-b mt-auto"
        value={value}
        ref={inputRef}
        onKeyPress={(e) => {
          if (e.code === 'Enter') {
            onAdd()
          }
        }}
        onChange={() => {
          setValue(inputRef.current.value)
        }}
      />
      <button
        className="p-4 font-bold"
        onClick={() => {
          onAdd()
          setValue('')
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
      {
        people.length ?
          people
            .filter(({ id }) => !blockListIds.includes(id))
            .map((person) => {
              return <button key={person.id} className="flex items-center justify-between mt-2 w-full p-2 rounded-md border border-gray-400" onClick={() => onPersonClick(person.id)}>
                <Person {...person} />
                {sideAddornment}
              </button>;
            })
          :
          <div className="">
            No one here :(
          </div>}
      {children}
    </section>
  );
};

export default PeopleList;
