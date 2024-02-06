import { Component1 } from "./Component1";

export const Component2 = props => {
  return (
    <div>
        <h1>Component 2</h1>
        <Component1 data={props.data} />
    </div>
  );
};