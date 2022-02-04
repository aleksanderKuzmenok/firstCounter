import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay";
import {Button} from "./Button";

export type dataType = {
    numMin: number
    numMax: number
}

let data = {
    numMin: 0,
    numMax: 5,
}


export const Counter = () => {
    let [counter, setCounter] = useState(data.numMin)
    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const resCounter = () => {
        setCounter(data.numMin)
    }
    return (
        <div>
            <div>
                <CounterDisplay
                    valueResult={counter} data={data}
                />
            </div>
            <div>
                <Button data={data.numMax} value={counter} name={'inc'} callBack={increaseCounter}/>
                <Button data={data.numMin} value={counter} name={'res'} callBack={resCounter}/>
            </div>
        </div>
    )
}