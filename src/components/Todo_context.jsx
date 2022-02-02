import React, { useContext, useState } from 'react';
import { contexthook } from '../context/ContextHook';

const Todo_context = () => {
    const [data, setData] = useState("");
    const { context_data, handleContext_data } = useContext(contexthook);

    const handleClick = () => {
        const obj = {
            title: data,
        }
        handleContext_data(obj);
        setData("");
    }

    return <div>
        <input value={data} onChange={(el) => { setData(el.target.value) }} type="text" name="" id="" />
        <button onClick={handleClick}>Add Todo</button>
        {context_data.map((el) => (
            <div>{el.title}</div>
        ))}
    </div>;
};

export default Todo_context;
