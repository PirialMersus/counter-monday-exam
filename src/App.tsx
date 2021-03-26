import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
    const [counter, setCounter] = useState(0)

    const incrementFunction = () => {
        if (counter >= 5) {
            setCounter(5)
        } else {
            setCounter(counter + 1)
        }
    }
    const resetFunction = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <Counter
                counter={counter}
                increment={incrementFunction}
                reset={resetFunction}
            />
        </div>
    );
}

export default App;
