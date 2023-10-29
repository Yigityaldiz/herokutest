import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constent";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((Error) => console.log("uSEEFFECT", Error));
  }, []);

  return (
    <main className=" flex items-center justify-center h-screen w-screen">
      <div className=" justify-items-center h-[60%] w-[35%] ">
        <h1 className="title text-center m-4">Crud Operator </h1>
        <div className=" input_holder p-4">
          <input
            className="border-2 m-3 border-black"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add task</button>
        </div>
        <ul>
          <List task="something" />
        </ul>
      </div>
    </main>
  );
}
