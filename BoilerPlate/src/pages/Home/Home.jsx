import { Component6 } from "../../components/SixComponent/Component6";

const myArray = [
  "Text1",
  "Text2",
  "Text3",
  "Text4",
  "Text5",
  "Text6",
  "Text7",
];

export const Home = () => {
  return (
<main>
  <h1>Home Component</h1>
  <Component6 data={myArray}></Component6>
</main>
  );
}
