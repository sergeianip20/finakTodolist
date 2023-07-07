import React from "react";
import { FilterValuesType } from "features/TodolistsList/todolists/todolists.reducer";
import Button from '@mui/material/Button';
import { useActions } from "common/hooks/useActions";
import {TodolistDomainType, todolistsActions} from "features/TodolistsList/todolists/todolists.reducer";
type FilterType ={
    todolist:TodolistDomainType
}
export const FilterTasksButtons = React.memo(  (props:FilterType) => {
    const {changeTodolistFilter} = useActions(todolistsActions)

    const changeFilterHandler = (filter: FilterValuesType) => {
        changeTodolistFilter({filter, id: props.todolist.id})
    }

    return (
        <div>
            <Button variant={props.todolist.filter === 'all' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('all')}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={props.todolist.filter === 'active' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('active')}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.todolist.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('completed')}
                    color={'secondary'}>Completed
            </Button>

        </div>
    )
})
