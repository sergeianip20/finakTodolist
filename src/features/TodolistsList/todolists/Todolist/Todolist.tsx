import React, { useCallback, useEffect } from "react";
import { AddItemForm } from 'common/components/AddItemForm/AddItemForm';
import { TaskType } from "features/TodolistsList/tasks/Task.api";
import { FilterValuesType, TodolistDomainType } from "features/TodolistsList/todolists/todolists.reducer";
import { tasksThunks } from "features/TodolistsList/tasks/tasks.reducer";
import { useActions } from "common/hooks/useActions";
import { Tasks } from "features/TodolistsList/tasks/Tasks";
import { TodolistTitle } from "./TodolistTitle";
type PropsType = {
	todolist: TodolistDomainType;
	tasks: Array<TaskType>;
	changeFilter: (value: FilterValuesType, todolistId: string) => void;
	removeTodolist: (id: string) => void;
	changeTodolistTitle: (id: string, newTitle: string) => void;
	demo?: boolean;
};

export const Todolist = React.memo(function ({
												 demo = false,
												 ...props
											 }: PropsType) {
	const { fetchTasks, addTaskTS } = useActions(tasksThunks);

	useEffect(() => {
		if (demo) {
			return;
		}
		fetchTasks(props.todolist.id);
	}, []);

	const addTask = useCallback(
		(title: string) => {
		return 	addTaskTS({ title, todolistId: props.todolist.id });
		},
		[, props.todolist.id]
	);

	return (
		<div>
			<TodolistTitle todolist={props.todolist} />
			<AddItemForm
				addItem={addTask}
				disabled={props.todolist.entityStatus === "loading"}
			/>
			<Tasks todolist={props.todolist} tasks={props.tasks} />
		</div>
	);
});
