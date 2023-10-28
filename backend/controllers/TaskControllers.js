const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = async (req, res) => {
  const { task } = req.body;

  try {
    const data = await TaskModel.create({ task });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error: error, msg: "Something went wrong" });
  }
};

module.exports.updateTask = async (req, res) => {
    const { id } = req.params
    const {task} = req.body;
  
  TaskModel.findByIdAndUpdate(id , {task})
  try { () => res.send("updated succesfully")
    
  } catch (error) {
     console.log(error);
  }
  };
module.exports.deleteTask = async (req, res) => {
    const { id } = req.params
   
  
  TaskModel.findByIdAndDelete(id , {task})
  try { () => res.send("delete succesfully")
    
  } catch (error) {
     console.log(error);
  }
  };