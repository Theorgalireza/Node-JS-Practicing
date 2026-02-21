const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTasks,
  editTask,
  removeTask,
} = require("../controllers/task");

router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", getSingleTasks);

router.patch("/:id", editTask);

router.delete("/:id", removeTask);

module.exports = router;
