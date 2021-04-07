import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from "./components/Settings/Settings";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(4)
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
            <Settings
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setCounter={setCounter}
                error={error}
                setError={setError}
            />
            <Counter
                minValue={minValue}
                maxValue={maxValue}
                counter={counter}
                setCounter={setCounter}
                increment={incrementFunction}
                error={error}
            />
        </div>
    );
}

export default App;
