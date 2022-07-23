import style from './Watch.module.scss';

interface Props {
    time:number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTens, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondTens, secondUnity] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.watchNumber}>{minuteTens}</span>
            <span className={style.watchNumber}>{minuteUnity}</span>
            <span className={style.watchColon}>:</span>
            <span className={style.watchNumber}>{secondTens}</span>
            <span className={style.watchNumber}>{secondUnity}</span>
        </>
    )
}