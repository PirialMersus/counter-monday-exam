import React from "react";
import s from './Button.module.css'


type PropsType = {
    name: string
    buttonClass?: string
    onClickFunction: () => void
    disabledCondition?: boolean
}

function ButtonComponent(props: PropsType) {
    return (
        <button
            className={`${s.buttons} ${props.buttonClass}`}
            onClick={props.onClickFunction}
            disabled={props.disabledCondition}
        >
            {props.name}
        </button>
    )
}

export default ButtonComponent