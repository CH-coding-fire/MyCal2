import React from 'react';
import './App.css';
import {CalendarFutureOrder} from "./components/CalendarFutureOrder/CalendarFutureOrder";
import {LibCal} from "./components/libCal/LibCal";
import StyledButton from "./components/Buttons/Button";

function App() {
    return (
        <div className="App">

            <CalendarFutureOrder/>
            <div>-----------------------------------</div>
            <LibCal/>

            <StyledButton>helloWorld</StyledButton>
            <div><br/></div>
            <StyledButton variant='outline'>helloWorld</StyledButton>
            <button>Button</button>
        </div>
    );
}

export default App;





























