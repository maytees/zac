import React from 'react'

interface props {
    content: string,
    key: unknown,
}

const Todo = (props: props) => {
  return (
    <div className="flex flex-row justify-between items-center">
        <h1 className="align-left text-2xl text-white">{props.content}</h1>    
        <h1 className="align-right text-xl text-red-400 hover:cursor-pointer">X</h1>
    </div>
  )
}

export default Todo