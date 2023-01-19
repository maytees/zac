import React, { useEffect, useState } from "react";
import useLocalStorage, { writeStorage } from "@rehooks/local-storage";

import dynamic from "next/dynamic";
const Todo = dynamic(() => import("../components/Todo"), { ssr: false });

import { AiOutlineClose } from "react-icons/all";
import { isTemplateExpression } from "typescript";

interface TypeTodo {
  content: string;
  key: string;
}

const Todos = () => {
  const [todos, setTodos] = useLocalStorage<TypeTodo[]>("todos");
  const [newTodoValue, setNewTodoValue] = useState("");

  useEffect(() => {
    if (!todos) setTodos([]);
  }, []);

  const createNew = (e: any) => {
    e.preventDefault();
    setTodos([...todos, { content: newTodoValue }]);
    console.log("Created new todo with value: " + newTodoValue);
    setNewTodoValue("");
  };

  const deleteTodo = (td: TypeTodo) => {
    let newTodos = todos?.filter((todo) => todo.content !== td.content);

    setTodos(newTodos);
  };

  return (
    <>
      <div className="flex-col flex justify-center items-center w-full">
        <div className="flex-row flex justify-evenly mt-10 align-center w-screen">
          <h1 className="text-base-100 text-2xl">School todos</h1>
          <label htmlFor="my-modal" className="btn">
            Create new
          </label>
        </div>
        <div className="flex flex-col flex-wrap align-center justify-between w-3/6">
          {todos
            ? todos.map((todo: TypeTodo) => (
                <Todo
                  key={todo.content}
                  content={todo.content}
                  onDelete={() => deleteTodo(todo)}
                />
              ))
            : null}
        </div>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-zinc-100">
            <div className="flex flex-row justify-between align-center">
              <h1 className="font-bold text-lg text-base-200">
                Create new todo
              </h1>
              <label htmlFor="my-modal" className="btn btn-sm btn-circle">
                ✕
              </label>
            </div>
            <div className="form-control">
              <label className="input-group mt-5">
                <span className="bg-zinc-800 text-white">Text</span>
                <input
                  type="text"
                  value={newTodoValue}
                  onChange={(e) => setNewTodoValue(e.target.value)}
                  placeholder="Study for chemistry 5.2 quiz"
                  className="input input-bordered bg-zinc-700 w-full"
                />
              </label>
            </div>
            <div className="modal-action">
              <button className="btn text-zinc-200" onClick={createNew}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
