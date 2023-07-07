import React, { useCallback } from "react";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { TodolistDomainType , todolistsThunks} from "features/TodolistsList/todolists/todolists.reducer";

import { useActions } from "common/hooks/useActions";
type TypePropsTodolisTitle = {
    todolist: TodolistDomainType;
};

export const TodolistTitle = React.memo((props: TypePropsTodolisTitle) => {
    const { removeTodolist:removeTodolistTC, changeTodolistTitle:changeTodolistTitleTC } = useActions(todolistsThunks);
    const removeTodolist = () => {
        removeTodolistTC(  props.todolist.id );
    };
    const changeTodolistTitle = useCallback(
        (title: string) => {
            changeTodolistTitleTC({ id: props.todolist.id, title });
        },
        [props.todolist.id]
    );
    return (
        <h3>
            <EditableSpan
                value={props.todolist.title}
                onChange={changeTodolistTitle}
            />
            <IconButton
                onClick={removeTodolist}
                disabled={props.todolist.entityStatus === "loading"}
            >
                <Delete />
            </IconButton>
        </h3>
    );
});
