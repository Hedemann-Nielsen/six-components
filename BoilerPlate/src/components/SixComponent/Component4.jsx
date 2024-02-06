import { Component3 } from "./Component3";

export const Component4 = props => {
  return (
    <div>
      <h1>Component 4</h1>
       <Component3 data={props.data} />
    </div>
  );
};