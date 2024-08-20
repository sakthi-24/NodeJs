//Import to add or update the data in file
const fs = require("fs");

//function to add task
const add = (description) => {
  fs.readFile("Input.json", (err, data) => {
    if (err && err.code !== "ENOENT") {
      console.log(err);
    } else {
      const tasks = data ? JSON.parse(data) : [];
      const taskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      const taskDetails = {
        id: taskId,
        description: description,
        status: "todo",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      tasks.push(taskDetails);
      fs.writeFile("Input.json", JSON.stringify(tasks), function (err) {
        if (err) throw err;
        console.log(`Task added successfully (ID: 1)`);
      });
    }
  });
};

//function to update task
const update = (id, description) => {
  fs.readFile("Input.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const tasks = JSON.parse(data);
      tasks.forEach((task) => {
        if (task.id == id) {
          task.description = description;
          task.updatedAt = new Date();
        }
      });
      fs.writeFile("Input.json", JSON.stringify(tasks), function (err) {
        if (err) throw err;
      });
    }
  });
};

//function to delete task
const deleteTask = (id) => {
  fs.readFile("Input.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const tasks = JSON.parse(data);
      const indexToDelete = tasks.findIndex((data) => data.id == id);
      tasks.splice(indexToDelete, 1);
      fs.writeFile("Input.json", JSON.stringify(tasks), function (err) {
        if (err) throw err;
      });
    }
  });
};

//function to mark the task in progress
const markInProgress = (id) => {
  fs.readFile("Input.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const tasks = JSON.parse(data);
      tasks.forEach((task) => {
        if (task.id == id) {
          task.status = "in-progress";
          task.updatedAt = new Date();
        }
      });
      fs.writeFile("Input.json", JSON.stringify(tasks), function (err) {
        if (err) throw err;
      });
    }
  });
};

//function to mark the task done
const markDone = (id) => {
  fs.readFile("Input.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const tasks = JSON.parse(data);
      tasks.forEach((task) => {
        if (task.id == id) {
          task.status = "done";
          task.updatedAt = new Date();
        }
      });
      fs.writeFile("Input.json", JSON.stringify(tasks), function (err) {
        if (err) throw err;
      });
    }
  });
};

// function to list the task
const listTask = (type) => {
  fs.readFile("Input.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const tasks = JSON.parse(data);
      let filteredTask = [];
      if (type) {
        filteredTask = tasks.filter((data) => data.status === type);
      } else {
        filteredTask = tasks;
      }
      console.log(filteredTask);
    }
  });
};

module.exports = {
  add,
  update,
  deleteTask,
  markInProgress,
  markDone,
  listTask,
};
