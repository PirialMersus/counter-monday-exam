import React, {ChangeEvent} from 'react';
import ButtonComponent from '../Button/Button';
import s from './Settings.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCounter: (value: number) => void
    error: string
    setError: (value: string) => void
}

export type StateType = {
    min: number
    max: number
}

function Settings(props: PropsType) {

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state)
        localStorage.setItem(key, stateAsString)
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        if (minValue < 0) {
            props.setError('Enter valid value')
        } else if (minValue >= props.maxValue) {
            props.setError('Enter valid value')
        }
        else {
            props.setError('Enter min and max value. Press "Set"')
        }
        props.setMinValue(minValue)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        if (maxValue <= props.minValue) {
            props.setError('Enter valid value')
        } else {
            props.setError('Enter min and max value. Press "Set"')
        }
        props.setMaxValue(maxValue)
    }

    const setMinMaxValue = () => {
        props.setCounter(props.minValue)
        props.setError('')
        saveState<StateType>('minMaxValues', {min: props.minValue, max: props.maxValue})
    }

    const maxValueInputFinalClass = props.maxValue <= props.minValue
        ? s.error
        : ''
    const minValueInputFinalClass = props.minValue < 0 || props.minValue >= props.maxValue
        ? s.error
        : ''
    const isSetButtonDisabled: boolean = props.maxValue <= props.minValue || props.minValue < 0

    return (
        <div className={s.wrapper}>
            <div className={s.inputsBlock}>
                <div>
                    <p>max value</p>
                    <input
                        className={maxValueInputFinalClass}
                        type="number"
                        value={props.maxValue}
                        onChange={onChangeMaxValueHandler}/>
                </div>
                <div>
                    <p>start value</p>
                    <input
                        className={minValueInputFinalClass}
                        type="number"
                        value={props.minValue}
                        onChange={onChangeMinValueHandler}/>
                </div>

            </div>
            <div className={s.buttonWrapper}>
                <ButtonComponent
                    name="Set"
                    onClickFunction={setMinMaxValue}
                    disabledCondition={isSetButtonDisabled}
                />
            </div>
        </div>
    )
}

export default Settings