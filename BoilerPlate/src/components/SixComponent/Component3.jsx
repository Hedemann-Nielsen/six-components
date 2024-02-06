import { Component2 } from "./Component2";

export const Component3 = props => {
  return (
    <div>
      <h1>Component 3</h1>
      <Component2 data={props.data} />
    </div>
  );
};