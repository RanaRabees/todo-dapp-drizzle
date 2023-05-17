"use client";
import { useState } from "react";
import { db, todoTable } from "../lib/drizzle"

type todo = {
  title: string;
  description: string;
};

const TodoLook = () => {
  const [todo, setTodo] = useState<todo>({
    title: "",
    description: "",
  });

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onClickAdd = async () => {
    alert("Sir Your Todo Order Added In Database");
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
    });
  };

  return (
    <form className="flex flex-col justify-center py-2">
      <input
        required
        className="p-3 mb-6 text-xl font-bold hover:italic hover:border-blue-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg"
        name="title"
        placeholder="Todo Title"
        value={todo.title}
        onChange={onChange}
      />
      <textarea
        required
        className="p-3 mb-6 text-xl font-bold hover:italic hover:border-pink-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg"
        name="description"
        placeholder="Todo Description"
        value={todo.description}
        onChange={onChange}
      />
      <button type="submit" className="p-3 mb-[22px] text-white hover:text-red-500 bg-gray-800 hover:bg-gray-950 text-xl font-bold hover:italic hover:border-green-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg" onClick={onClickAdd}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoLook;
