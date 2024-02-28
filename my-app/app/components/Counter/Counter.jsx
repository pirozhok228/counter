'use client'

import { useState } from "react"
import Styles from './Counter.module.css'
export const Counter = () => {
    const [num, setNum] = useState(0);

    return(
        <div className={Styles["counter"]}>
            <div className={Styles["counter-value"]}>
                <h3>{num}</h3>
            </div>
            <div className={Styles["counter-buttons"]}>
                <button className={Styles["counter-button__minus"]} onClick={() => {setNum(num - 1)}}>Минус</button>
                <button className={Styles["counter-button__plus"]} onClick={() => setNum(num + 1)}>Плюс</button>
            </div>
        </div>
    )
}