import React from "react";
import { TodolistDomainType } from "features/TodolistsList/todolists/todolists.reducer";
import { TaskType, TaskStatuses } from "features/TodolistsList/tasks/Task.api";
import { Task } from "features/TodolistsList/todolists/Todolist/Task/Task";
type TaskTypeTodolist = {
    todolist: TodolistDomainType;
    tasks: Array<TaskType>;
};
export const Tasks = React.memo((props: TaskTypeTodolist) => {
    let tasksForTodolist = props.tasks;

    if (props.todolist.filter === "active") {
        tasksForTodolist = props.tasks.filter((t) => t.status === TaskStatuses.New);
    }
    if (props.todolist.filter === "completed") {
        tasksForTodolist = props.tasks.filter(
            (t) => t.status === TaskStatuses.Completed
        );
    }
    return (
        <div>
            <div>
                {tasksForTodolist.map((t) => (
                    <Task key={t.id} task={t} todolistId={props.todolist.id} />
                ))}
            </div>
        </div>
    );
});
