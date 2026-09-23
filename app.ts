// ====================
// DAY 1
// ====================

let taskName: string = "Study TypeScript";
let minutes: number = 45;
let isDone: boolean = false;
let tags: string[] = ["typescript", "practice"];

console.log(taskName);
console.log(minutes);
console.log(isDone);
console.log(tags);


// ====================
// DAY 2
// ====================

function minutesToHours(mins: number): number {
    return mins / 60;
}

function logTask(name: string): void {
    console.log(name);
}

function label(
    name: string,
    note: string,
    prefix = "Task"
): string {
    return `${prefix}: ${name} - ${note}`;
}


// ====================
// DAY 3
// ====================

enum Priority {
    Low = "low",
    High = "high"
}

interface Task {
    readonly id: number;
    title: string;
    minutes: number;
    done: boolean;
    note?: string;
    priority: Priority;
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Write the report",
        minutes: 30,
        done: false,
        note: "Finish today",
        priority: Priority.High
    },
    {
        id: 2,
        title: "Study TypeScript",
        minutes: 45,
        done: false,
        note: "Practice interfaces",
        priority: Priority.High
    },
    {
        id: 3,
        title: "Complete assignment",
        minutes: 60,
        done: true,
        priority: Priority.Low
    },
    {
        id: 4,
        title: "Read notes",
        minutes: 20,
        done: false,
        note: "Read chapter 2",
        priority: Priority.Low
    }
];


// Status union
type Status = "todo" | "doing" | "done";

let status: Status = "todo";

console.log("Status:", status);


// String or number narrowing
function describe(value: string | number): string {
    if (typeof value === "string") {
        return `String value: ${value}`;
    }

    return `Number value: ${value}`;
}


// Generic function
function firstItem<T>(items: T[]):T {
    if (items.length === 0) {
        throw new Error("Array is empty");
    }
    return items[0]!;
}

const firstTask = firstItem(tasks);

console.log("First task:", firstTask);


// Generic interface
interface Result<T> {
    ok: boolean;
    data: T;
}

const taskResult: Result<Task> = {
    ok: true,
    data: firstTask
};

const messageResult: Result<string> = {
    ok: true,
    data: "Tasks loaded"
};

console.log(taskResult);
console.log(messageResult);


// Check optional note
for (const task of tasks) {
    if (task.note) {
        console.log(task.note);
    }
}


// Function examples
console.log(minutesToHours(60));

logTask("Study TypeScript");

console.log(
    label("Complete assignment", "Finish before evening")
);

console.log(describe("Hello"));
console.log(describe(100));


// ====================
// DOM - DAY 3
// ====================

const list = document.getElementById("list");

const input = document.getElementById("title") as HTMLInputElement;


// Render tasks
function render(items: Task[]): void {

    if (list === null) {
        return;
    }

    list.innerHTML = "";

    for (const task of items) {

        const li = document.createElement("li");

        const taskStatus: Status =
            task.done ? "done" : "todo";

        li.textContent =
            `${task.title} - ${task.minutes} minutes - ${taskStatus} - ${task.priority}`;

        list.appendChild(li);
    }
}


// Display tasks
render(tasks);