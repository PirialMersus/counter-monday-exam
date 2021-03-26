import React from 'react';
import ButtonComponent from '../Button/Button';

type PropsType = {
    counter: number
    increment: () => void
    reset: () => void
}

function Counter(props: PropsType) {


    return (
        <div className="wrapper">
            <div className="counter">
                <div className="spanWrapper">
                    <span className={props.counter >= 5 ? "fullCounter" : ""}>{props.counter}</span>
                </div>
                <div className="buttonsWrapper">
                    <ButtonComponent
                        name="Increment"
                        buttonClass="incrementButton"
                        onClickFunction={props.increment}
                        disabledCondition={props.counter >= 5}
                    />
                    <ButtonComponent
                        name="Reset"
                        buttonClass="resetButton"
                        onClickFunction={props.reset}
                        disabledCondition={props.counter <= 0}
                    />
                </div>

            </div>
        </div>
    )
}

export default Counter