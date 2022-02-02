import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [data, setData] = useState("");
    const [todo, setTodo] = useState([]);

    const handleClick = () => {
        var obj = {
            title: data,
        };
        setTodo([...todo, obj]);
        setData("")
    }

    return <div>
        <input value={data} onChange={(el) => { setData(el.target.value) }} type="text" name="" id="" />
        <button onClick={handleClick}>Add Todo</button>
        {todo.map((el) => (
            <div>{el.title}</div>
        ))}
    </div>;
};

export default Todo;
