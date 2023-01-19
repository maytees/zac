import React from "react";

interface props {
  content: string;
  key: unknown;
  onDelete: any;
}

const Todo = (props: props) => {
  return (
    <div className="flex flex-row justify-around gap-80 mt-10 items-center">
      <h1 className="align-left text-2xl text-zinc-800 font-bold">
        {props.content}
      </h1>
      <h1
        className="align-right text-3xl text-red-600 transition-transform hover:cursor-pointer hover:scale-125"
        onClick={props.onDelete}
      >
        X
      </h1>
    </div>
  );
};

export default Todo;
