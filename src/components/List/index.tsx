import React from "react";
import './style.scss';

function List() {
    const tasks = [{ 
        task: 'React',
        time: '02:00:00'
    },{
        task: 'JavaScript',
        time: '01:00:00'
    },{
        task: 'TypeScript',
        time: '03:00:00'
    }]

    return (
        <aside className="taskList">
            <h2>Studies of the Day</h2>
            <ul >
                {tasks.map((item, index)=> (
                    <li className="item" key={index}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>

        </aside>
    )

}

export default List;