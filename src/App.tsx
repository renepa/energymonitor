import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {AuthorProps, Comment} from "./components/examples/Comment";
import {Clock} from "./components/examples/Clock";
import {LoginControl} from "./components/examples/LoginControl";
import {Welcome} from "./components/examples/Welcome";
import {RechartLineChart} from "./components/charts/RechartLineChart";

function App() {
    return (
        <div className='App App-header'>
            <Welcome name={'René'}/>
            <Clock/>
            <LoginControl/>
            <RechartLineChart/>
        </div>
    )
}
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<LoginControl />);
export default App;
