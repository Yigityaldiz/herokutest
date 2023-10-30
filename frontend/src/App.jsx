import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constent";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((Error) => console.log("App.jsx , useEffect Error: ", Error));
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/save`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <main className=" flex items-center justify-center h-full w-screen">
      <div className=" justify-items-center h-[50%] w-[35%] ">
        <h1 className="title text-center m-4">Crud Operator </h1>
        <div className=" input_holder p-4">
          <input
            className="border-2 m-3 border-black"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask} type="submit">
            Add task
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <List
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUI={setUpdateUI}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
