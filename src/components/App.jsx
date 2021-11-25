import { observer } from "mobx-react-lite";
import todoStore from "../store/todo";
import React, { useState } from "react";
import '../styles/App.scss';
import Select from "./Select";
import Form from "./Form";
import List from "./List";

const App = () => {
    console.log('>>>rend');

    const [filterSelect, setFilterSelect] = useState('0');  //select
    const [newTodo, setNewTodo] = useState('');  //form

    let options = [     //фильтры
        { name: 'все', value: '0' },
        { name: 'не выполненные', value: '1' },
        { name: 'выполненные', value: '2' },
    ]

    //фильтр выдачи формирует новый массив выдачи на основе массива из стора
    //перед рендером

    let mass = todoStore.todos.filter(t => {
        if (filterSelect === '0') return true;      //все
        else if (filterSelect === '1' && !t.completed) return true; //не выполненные
        else if (filterSelect === '2' && t.completed) return true;  //выполненные

        return false;
    });

    function f1(event) {    //новая запись в стор
        event.preventDefault();

        //формирую обьект - новое туду
        let newT = {};
        newT.id = Date.now();
        newT.title = newTodo;
        newT.completed = false;

        todoStore.addTodo(newT); //добавляю в стор новое туду

        setNewTodo('');    //очистка формы
    }

    return (
        <div className="toDoList">
            <h1>TODOLIST</h1>
            <p>react scss mobx typescript</p>

            <Form
                value={newTodo}
                onInput={(event) => setNewTodo(event.target.value)}
                f1={f1}
            />

            <Select
                options={options}
                value={filterSelect}
                onChange={event => setFilterSelect(event.target.value)}
            />

            <List
                mass={mass}
            />

        </div>
    )
}

export default observer(App);