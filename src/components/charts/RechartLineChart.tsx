import {CartesianGrid, Line, Tooltip, XAxis, LineChart, YAxis} from "recharts";

export function RechartLineChart() {
    const data = [
        {Datum: '2022-01-01', Stand: 200, pv: 2400, amt: 2400},
        {Datum: '2022-02-01', Stand: 300, pv: 2400, amt: 2400},
        {Datum: '2022-02-15', Stand: 300, pv: 2400, amt: 2400},
        {Datum: '2022-03-01', Stand: 400, pv: 2400, amt: 2400},

    ];
    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="natural" dataKey="Stand" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Datum" />
            <YAxis dataKey="Stand"/>
            <Tooltip />
        </LineChart>
    )
}