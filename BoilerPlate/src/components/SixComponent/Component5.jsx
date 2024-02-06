import { Component4 } from "./Component4";

export const Component5 = props => {
  return (
    <div>
      <h1>Component 5</h1>
       <Component4 data={props.data} />
    </div>
  );
};