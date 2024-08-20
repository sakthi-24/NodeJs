//import the module to get the cli arugments
const { argv } = require("node:process");
const { add, update, deleteTask, markInProgress, markDone, listTask } = require("./Actions");

// get the input to do the task.
const action = argv[2];

if (!action) {
  console.log("No action to perfom");
}

switch (action) {
  case "add":
     add(argv[3]);
    break;
  case "update":
    update(argv[3], argv[4]);
    break;
  case "delete":
    deleteTask(argv[3], argv[4]);
    break;
  case "mark-in-progress":
    markInProgress(argv[3]);
    break;
  case "mark-done":
    markDone(argv[3]);
    break;
  case "list":
    listTask(argv[3]);
    break;
}