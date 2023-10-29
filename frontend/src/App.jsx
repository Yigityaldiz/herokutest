import React, { useState } from "react";
import List from "./components/List";

export default function App() {

  const [input , setInput] = useState("")

  return (
    <main className="" >
      <h1 className="title">Crud Operator </h1>
      <div className="input_holder">
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button type="submit" >Add task</button>
      </div>
      <ul>
        <List task="something" />
      </ul>
    </main>
  );
}
