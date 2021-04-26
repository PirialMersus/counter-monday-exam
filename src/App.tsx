import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: {
        min: number,
        max: number
    }
}

function App(props: AppPropsType) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [minValue, setMinValue] = useState(props.state.min)
    const [maxValue, setMaxValue] = useState(props.state.max)
    const [counter, setCounter] = useState(minValue)
    const [error, setError] = useState(
        'Enter min and max value. Press "Set"')


    const incrementFunction = () => {
        if (counter >= maxValue) {
            setMaxValue(maxValue)
        } else {
            setCounter(prev => prev + 1)
        }
    }

    return (
        <div className="App">
            {isSettingsOpen
                ? <Settings
                    setIsSettingsOpen={setIsSettingsOpen}
                    minValue={minValue}
                    maxValue={maxValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                    setCounter={setCounter}
                    error={error}
                    setError={setError}
                />
                : <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    counter={counter}
                    setCounter={setCounter}
                    setIsSettingsOpen={setIsSettingsOpen}
                    increment={incrementFunction}
                    error={error}
                />}


        </div>
    );
}

export default App;
