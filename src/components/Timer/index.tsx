import Button from "../Button";
import Watch from "./Watch";
import style from './Timer.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITasks";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined;
}

export default function Timer({ selected }: Props){
    const [time, setTime] = useState<number>();

    useEffect(() =>{
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    },[selected])

    return(
        <div className={style.timer}>
            <p className={style.title}>
                Choose a card and start the timer
            </p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button>
                Start!
            </Button>
        </div>

    )
};