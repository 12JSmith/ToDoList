import React from "react";
import todoStore from "../store/todo";

const List = ({ mass }) => {
    return (
        <div className="list">
            {mass.map((t, index) =>
                <div className={`line${index % 2}`} key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => todoStore.completeTodo(t.id)} />
                    <p>{t.title}</p>
                    <button onClick={() => todoStore.removeTodo(t.id)}>X</button>
                </div>
            )}
        </div>
    )
}

export default List;