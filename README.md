Project URL : https://roadmap.sh/projects/task-tracker

Clone the project and run "npm i" command to install the package dependency.

starting point of the application is index.js, then actions will be handled in action.js file.

Handled actions are mentioned below -

# Adding a new task
node index.js add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
node index.js update 1 "Buy groceries and cook dinner"
node index.js delete 1

# Marking a task as in progress or done
node index.js mark-in-progress 1
node index.js mark-done 1

# Listing all tasks
node index.js list

# Listing tasks by status
node index.js list done
node index.js list todo
node index.js list in-progress

