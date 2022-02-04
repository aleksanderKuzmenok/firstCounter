import React from "react";
import style from './Counter.module.css'
import {dataType} from "./Counter";
type propsType = {
    valueResult: number
    data: dataType
}

export const CounterDisplay = ({valueResult,data, ...props}:propsType) => {
    return (
        <div className={valueResult === data.numMax ? style.stop : ''}>{valueResult}</div>
    )
}