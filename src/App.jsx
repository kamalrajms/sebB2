import React from "react";
import Kamal from "./Greeting";
import Hello from "./Hello";
import Destructure from "./Component/Destructure";
import ConditionalRender from "./Component/ConditionalRender";
import ListRender from "./Component/ListRender";
import Object from "./Component/Object";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import Field from "./Component/Field";
import RegForm from "./Component/RegForm";
import ConditionalFrom from "./Component/ConditionalFrom";
import UseEffectHook from "./Component/UseEffectHook";

export default function App() {
  const name = "rahul";
  const age = 55;
  const city = "madurai";
  const name2 = "sanjai";
  const age2 = 5587;
  const city2 = "chennai";
  const name3 = "aravind";
  const age3 = 58465;
  const city3 = "namakkal";

  return (
    <div>
      <UseEffectHook />
      <ConditionalFrom />
      <RegForm />
      <Field />
      <DarkMode />
      <UseStateHook />
      <Object />
      <ListRender />
      <ConditionalRender />
      <h2 style={{ padding: "20", color: "red", backgroundColor: "yellow" }}>
        hello world
      </h2>
      <Kamal />
      <Hello />
      <Destructure name={name} age={age} city={city} />
      <Destructure name={name2} age={age2} city={city2} />
      <Destructure name={name3} age={age3} city={city3} />
    </div>
  );
}
