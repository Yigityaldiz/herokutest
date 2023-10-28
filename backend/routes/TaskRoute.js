const { Router } = require("express");

const { getTasks,saveTask,deleteTask,updateTask } = require("../controllers/TaskControllers");

const router = Router();

// Change this line:
// router.get("/get", getTasks);

// To this:
router.get("/get", async (req, res, next) => {
    await getTasks(req, res, next);
});
router.post("/save", async (req, res, next) => {
    await saveTask(req, res, next);
});
router.put("/update/:id", async (req, res, next) => {
    await updateTask(req, res, next);
});
router.put("/delete/:id", async (req, res, next) => {
    await deleteTaskTask(req, res, next);
});

module.exports = router;