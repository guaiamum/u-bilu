import Person from "./Person";
import { v4 as uuid } from "uuid";
import { useRef } from "react";

export const peopleArray = [
  { id: "0ab", name: "Rodrigo" },
  { id: "1cd", name: "Cruela" },
];

const addPerson = ({ name }) => {
  peopleArray.push({
    id: uuid(),
    name,
  });
};

export const WithAddButton = (props) => {
  const inputRef = useRef();
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
          addPerson({ name: inputRef.current.value });
        }}
      >
        +
      </button>
    </PeopleList>
  );
};

const PeopleList = ({ people = peopleArray, blockListIds = [], children }) => {
  return (
    <section class="border-t-2 border-opacity-70 border-gray-400 m-2">
      {people
        .filter(({ id }) => !blockListIds.includes(id))
        .map((person) => {
          return <Person {...person} />;
        })}
      {children}
    </section>
  );
};

export default PeopleList;
