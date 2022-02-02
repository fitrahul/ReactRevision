import React, { useState } from 'react';

var timer;
const Timer = () => {
    const [stat, setStat] = useState("start");
    const [num, setNum] = useState(0);

    const handleClick = () => {
        if (stat === "start") {
            setStat("stop");
            timer = setInterval(() => {
                setNum((prev) => {
                    return prev + 1;
                });
            }, 1000);
        }
        if (stat === "stop") {
            setStat("reset");
            clearInterval(timer);
        }
        if (stat === "reset") {
            setStat("start");
            setNum(0);
        }
    }

    return <div>
        <div>Timer: {num}</div>
        <button onClick={() => { handleClick(stat) }}>
            {stat == "start" ? "start" : stat == "stop" ? "stop" : "reset"}
        </button>
    </div>;
};

export default Timer;
