import { makeAutoObservable } from "mobx";
import moment from "moment";

class Todo {
    todoList = [
        {
            id: Math.random().toString(36).slice(2),
            title: "title1",
            content: "content1",
            checked: false,
            create_date: moment().format("YYYY.MM.DD"),
        },
        {
            id: Math.random().toString(36).slice(2),
            title: "title2",
            content: "content2",
            checked: false,
            create_date: moment().format("YYYY.MM.DD"),
        },
        {
            id: Math.random().toString(36).slice(2),
            title: "title3",
            content: "content3",
            checked: false,
            create_date: moment().format("YYYY.MM.DD"),
        },
        {
            id: Math.random().toString(36).slice(2),
            title: "프로그레시브 웹앱 끝내기",
            content: "content4",
            checked: true,
            create_date: moment().format("YYYY.MM.DD"),
        },
        {
            id: Math.random().toString(36).slice(2),
            title: "title5",
            content: "content5",
            checked: true,
            create_date: moment().format("YYYY.MM.DD"),
        },
    ];

    todo = {
        id: Math.random().toString(36).slice(2),
        title: "",
        content: "",
        checked: false,
        create_date: moment().format("YYYY.MM.DD"),
    };

    constructor() {
        makeAutoObservable(this);
    }

    createTodo = (name, value) => {
        console.log(name, value);
        this.todo = {
            ...this.todo,
            [name]: value,
        };
    };
    addTodo = () => {
        this.todoList.push(this.todo);
        this.todo = {
            id: Math.random().toString(36).slice(2),
            title: "",
            content: "",
            checked: false,
            create_date: moment().format("YYYY.MM.DD"),
        };
        console.log(this.todoList);
    };
    toggleTodo = (id) => {
        this.todoList = this.todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo));
    };
    updateTodo = () => {};
    deleteTodo = (id) => {
        console.log(id);
        this.todoList = this.todoList.filter((todo) => todo.id !== id);
    };
}
const todoStore = new Todo();
export default todoStore;
