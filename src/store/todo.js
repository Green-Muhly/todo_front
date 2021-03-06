import axios from "axios";
import { makeAutoObservable } from "mobx";
import moment from "moment";
import swal from "sweetalert";
import API from "../api";

class Todo {
  todoList = [
    // {
    //     id: Math.random().toString(36).slice(2),
    //     title: "프로그레시브 웹앱 끝내기",
    //     content: "기능 파악해보기",
    //     checked: false,
    //     create_date: moment("2021-07-20").format("YYYY.MM.DD"),
    // },
    // {
    //     id: Math.random().toString(36).slice(2),
    //     title: "title5",
    //     content: "content5",
    //     checked: true,
    //     create_date: moment().format("YYYY.MM.DD"),
    // },
  ];

  todo = {
    id: Math.random().toString(36).slice(2),
    title: "",
    content: "",
    checked: false,
    createDate: moment().format("YYYY.MM.DD"),
  };

  constructor() {
    makeAutoObservable(this);
  }

  saveTodo = async () => {
    // await axios.get("/muhly/todos").then((res) => (this.todoList = res.data));
    await axios
      .get("http://54.180.9.121:8080/muhly/todos")
      .then((res) => (this.todoList = res.data));
  };

  createTodo = (name, value) => {
    console.log(name, value);
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  };
  addTodo = async () => {
    const { content } = this.todo;
    if (content === "") {
      swal("content을 채워주세요!", "", "error");
      return;
    }
    await API.post("http://54.180.9.121:8080/muhly/todos", {
      content,
    })
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
    this.todoList.push(this.todo);

    this.todo = {
      id: Math.random().toString(36).slice(2),
      title: "",
      content: "",
      checked: false,
      createDate: moment().format("YYYY.MM.DD"),
    };
    console.log(this.todoList);
  };
  toggleTodo = async (id) => {
    await API.put(`http://54.180.9.121:8080/muhly/todos/${id}`)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
  };
  updateTodo = (id, title, content) => {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, title, content } : todo
    );
  };
  deleteTodo = async (id) => {
    // console.log(id);
    await API.delete(`http://54.180.9.121:8080/muhly/todos/${id}`)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  };
}
const todoStore = new Todo();
export default todoStore;
