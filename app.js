"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minutesToHours(mins) {
    return mins / 60;
}
function logTask(name) {
    console.log(name);
}
function label(name, note, prefix = "Task") {
    return `${prefix}: ${name} - ${note}`;
}
const tasks = [
    {
        id: 1,
        title: "Write the report",
        minutes: 30,
        done: false,
        note: "Finish today"
    },
    {
        id: 2,
        title: "Study TypeScript",
        minutes: 45,
        done: false,
        note: "Practice interfaces"
    },
    {
        id: 3,
        title: "Complete assignment",
        minutes: 60,
        done: true
    },
    {
        id: 4,
        title: "Read notes",
        minutes: 20,
        done: false,
        note: "Read chapter 2"
    }
];
for (const task of tasks) {
    if (task.note) {
        console.log(task.note);
    }
}
let status = "todo";
console.log("Status:", status);
function describe(value) {
    if (typeof value === "string") {
        return `String value: ${value}`;
    }
    else {
        return `Number value: ${value}`;
    }
}
console.log(minutesToHours(60));
logTask("Study TypeScript");
console.log(label("Complete assignment", "Finish before evening"));
console.log(describe("Hello"));
console.log(describe(100));
console.log(tasks);
//# sourceMappingURL=app.js.map