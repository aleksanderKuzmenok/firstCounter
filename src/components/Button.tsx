import React, {ButtonHTMLAttributes} from "react";

type propsTypeButton= {
    name: string
    callBack: () => void
    value: number
    data: number

}

export const Button = ({name, callBack,value,data, ...props}:propsTypeButton & ButtonHTMLAttributes<any>)=> {
    const callBackHandler = () => {
        callBack()
    }

    return(
        <button disabled={value === data} onClick={callBackHandler} {...props}>{name}</button>
    )
}