export const Component1 = props => {
console.log(props.data);
  return (
    <>
      <h1>Component 1</h1>
      <ul>
        {props.data.map((item, key) => {
          return (
            <li key={key}>{item}</li>
          )
        })}
      </ul>
    </>
  );
}

