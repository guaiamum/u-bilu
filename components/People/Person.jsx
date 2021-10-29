const Person = ({ id, name }) => {
  return <article key={id}>{name}</article>;
};

export default Person;
