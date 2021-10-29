export type Person = {
  id: string,
  name: string,
}

const Person: React.FC<Person> = ({ id, name }) => {
  return <article>{name}</article>;
};

export default Person;
