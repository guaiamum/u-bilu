export type Person = {
  id: string,
  name: string,
}

const Person: React.FC<Person> = ({ id, name }) => {
  return <article className="">{name}</article>;
};

export default Person;
