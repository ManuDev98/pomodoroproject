const tasks = [];
let time = 0;
let timer = null;
let timeBreak = null;
let current = null;

const addTask = document.querySelector("#addTask");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (itTask.value !== "") {
        createTask(itTask.value);
        itTask.value = "";
    }
});

function createTask(value) {
    const newTask = {
        id:(Math.random() * 100).toString(36).slice(3),
        tittle: value,
        completed: false
    };

    tasks.unshift(newTask);

}