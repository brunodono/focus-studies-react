import Button from "../Button";
import Watch from "./Watch";
import style from './Cronometer.module.scss';

export default function Cronometer(){
    return(
        <div className={style.cronometer}>
            <p className={style.title}>
                Choose a card and start the cronometer
            </p>
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button>
                Start!
            </Button>
        </div>

    )
};