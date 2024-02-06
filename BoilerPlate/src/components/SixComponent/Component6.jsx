import { Component5 } from "./Component5";

export const Component6 = props => {
  return (
    <div>
      <h1>Component 6</h1>
       <Component5 data={props.data} />
    </div>
  );
};