import { ITask } from "../../types/ITasks";
import Item from "./Item";
import style from './List.module.scss';



function List({tasks}:{ tasks: ITask[] }) {
    return (
        <aside className={style.taskList}>
            <h2>Studies of the Day</h2>
            <ul >
                {tasks.map((item, index)=> (
                    <Item 
                    key={index}
                    {...item}/>
                    
                ))}
            </ul>

        </aside>
    )

}

export default List;