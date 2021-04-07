import React from 'react';
import ButtonComponent from '../Button/Button';
import s from './Counter.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    counter: number
    increment: () => void
    setCounter: (value: number) => void
    error: string
}

function Counter(props: PropsType) {

    const finalErrorMessageClass = props.error === 'Enter min and max value. Press "Set"'
        ? s.message
        : s.error
    return (
        <div className={s.counter}>
            <div className={s.valueWrapper}>
                {props.error.length > 0
                    ? <p className={finalErrorMessageClass}>{props.error}</p>
                    : <span className={props.counter >= props.maxValue ? `${s.fullCounter}` : ""}>{props.counter}</span>
                }
            </div>
            <div className={s.buttonsWrapper}>
                <ButtonComponent
                    name="Increment"
                    buttonClass={s.incrementButton}
                    onClickFunction={props.increment}
                    disabledCondition={props.counter >= props.maxValue
                    || props.error.length > 0}
                />
                <ButtonComponent
                    name="Reset"
                    buttonClass="resetButton"
                    onClickFunction={() => props.setCounter(props.minValue)}
                    disabledCondition={props.counter <= props.minValue
                    || props.error.length > 0}
                />
            </div>
        </div>
    )
}

export default Counter