async function addTask(req, res) {
    console.log(`User Signed Up!!!`);
    res.send("<h1>User Signed Up Again!!!</h1>");
}

async function removeTask(req, res) {
    console.log(`User Signed Up!!!`);
    res.send("<h1>User Signed Up!!!</h1>");
}

async function updateTask(req, res) {

}

async function getAllTasks(req, res) {

}

module.exports = { addTask, removeTask, updateTask, getAllTasks }