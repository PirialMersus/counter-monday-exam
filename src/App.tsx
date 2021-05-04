import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {addValueToCounterAC} from "./bll/reducers";


function App() {
    const dispatch = useDispatch()
    const counter1 = useSelector<AppStateType, number>(state => state.counterValues.value)
    const minValue = useSelector<AppStateType, number>(state => state.counterValues.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counterValues.maxValue)

    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [error, setError] = useState(
        'Enter min and max value. Press "Set"')




    const incrementFunction = () => {
        dispatch(addValueToCounterAC(counter1 + 1))
        // if (counter >= maxValue) {
        //     setMaxValue(maxValue)
        // } else {
        //     setCounter(prev => prev + 1)
        // }
    }

    return (
        <div className="App">
            {isSettingsOpen
                ? <Settings
                    setIsSettingsOpen={setIsSettingsOpen}
                    minValue={minValue}
                    maxValue={maxValue}
                    // setMinValue={setMinValue}
                    // setMaxValue={setMaxValue}
                    // setCounter={setCounter}
                    error={error}
                    setError={setError}
                />
                : <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    counter={counter1}
                    // setCounter={setCounter}
                    setIsSettingsOpen={setIsSettingsOpen}
                    increment={incrementFunction}
                    error={error}
                />}


        </div>
    );
}

export default App;
