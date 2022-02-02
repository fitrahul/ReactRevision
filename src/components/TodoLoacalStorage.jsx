import React, { useState } from 'react';

const TodoLoacalStorage = () => {
    const [ip, setIp] = useState("");
    const [data, setData] = useState([]);

    const handleClick = () => {
        let obj = { title: ip };
        let arr = localStorage.getItem("todo_storage");
        if (arr === null) arr = [];
        else arr = JSON.parse(localStorage.getItem("todo_storage"));
        arr.push(obj);
        localStorage.setItem("todo_storage",JSON.stringify(arr))
        setData(arr);
        setIp("");
    }

    return <div>
        <input onChange={(el) => { setIp(el.target.value) }} value={ip} type="text" name="" id="" />
        <button onClick={handleClick}>Add Todo</button>
        {data.map((el)=>(
            <div>{el.title}</div>
        ))}
    </div>;
};

export default TodoLoacalStorage;
