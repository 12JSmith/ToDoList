import { makeAutoObservable } from "mobx";

class Todo {
    //состояние
    todos = [
        { id: 1, title: 'Использовать React', completed: true },
        { id: 2, title: 'Использовать MobX', completed: false },
        { id: 3, title: 'Стили node-sass не вырвиглазно', completed: false },
        { id: 4, title: 'typescript', completed: false },
        { id: 5, title: 'С добавлением/удалением задач', completed: false },
        { id: 6, title: 'Фильтр: все, выполненные, невыполненные', completed: false },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    //экшены
    //добавить
    addTodo(todo) {
        this.todos.push(todo);
    }

    //удалить
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    //выполненные
    completeTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.completed = !todo.completed;
            return todo;
        });
    }
}

export default new Todo();