import React, { createContext, useState } from "react";
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
import Timer from "./Component/Timer";
import StopWatch from "./Component/StopWatch";
import UseEffectAIP from "./Component/UseEffectAIP";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextFrom from "./Context/ContextFrom";
import UseReducerHook from "./Component/UseReducerHook";
import ReducerForm from "./Component/ReducerForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Route/About";
import Service from "./Route/Service";
import Contact from "./Route/Contact";
import Home from "./Route/Home";
import WebApp from "./Route/WebApp";
import AppApp from "./Route/AppApp";

export const Pass = createContext();

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

  const [mode, setMode] = useState("light");
  const data = { name: "react.js" };
  const display = false;
  return (
    <div>
      {display && (
        <div>
          <ReducerForm />
          <UseReducerHook />
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <Pass.Provider value={{ mode, setMode, data }}>
              <ContextFrom />
            </Pass.Provider>
          </div>
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <h2>App component--{name}</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
          <UseRefHook />
          <UseEffectAIP />
          <StopWatch />
          <Timer />
          <UseEffectHook />
          <ConditionalFrom />
          <RegForm />
          <Field />
          <DarkMode />
          <UseStateHook />
          <Object />
          <ListRender />
          <ConditionalRender />
          <h2
            style={{ padding: "20", color: "red", backgroundColor: "yellow" }}
          >
            hello world
          </h2>
          <Kamal />
          <Hello />
          <Destructure name={name} age={age} city={city} />
          <Destructure name={name2} age={age2} city={city2} />
          <Destructure name={name3} age={age3} city={city3} />
        </div>
      )}

      <BrowserRouter>
        <div className="header">
          <Link to={"/Home"}>home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/Service" element={<Service />} >
            <Route path="" element={<WebApp/>}/>
            <Route path="app" element={<AppApp/>}/>
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
