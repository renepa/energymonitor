import React, {useState} from 'react';
import './App.css';
import {MeasurePoint, RechartLineChart} from "./components/charts/RechartLineChart";
import {Button, TextField} from "@mui/material";

const data = [
    {Datum: '2022-01-01', Stand: 38510},
    {Datum: '2022-02-01', Stand: 300},
    {Datum: '2022-02-15', Stand: 300},
    {Datum: '2022-03-01', Stand: 400},

];

function App() {
    console.log('Hallo hier')

    const [measures, setMeasures] = useState<Array<MeasurePoint>>(data)
    const [dateText, setDateText] = useState<string>('2022-11-03')
    const [measureText, setMeasureText] = useState<string>('0')

    function setNewData(dateText: string, measure: number) {
        console.log('Push new Measure')
        const newMeasures:Array<MeasurePoint> = new Array();
        newMeasures.push(...measures, {Datum: dateText, Stand: measure})
        setMeasures(newMeasures)
        console.log(measures)
    }

    return (
        <div className='App App-header'>
            <RechartLineChart data={measures}/>
            <TextField
                label='Datum als Text'
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
                value={dateText}
                onChange={newValue => setDateText(newValue.target.value)}
            /><
            TextField
                label='Messwert'
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
                value={measureText}
                onChange={newValue => setMeasureText(newValue.target.value)}
            />
            <Button variant="contained" onClick={() => setNewData(dateText, Number.parseFloat(measureText))}>
                Send Value
            </Button>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<LoginControl />);
export default App;
