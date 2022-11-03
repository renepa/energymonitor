import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {TextField} from "@mui/material";

export interface MeasurePoint {
    Datum: string,
    Stand: number
}

export interface LineChartProps {
    data: Array<MeasurePoint>
}

export function RechartLineChart(props: LineChartProps) {
    console.log('Rerender RechartLineChart')
    return (
        <div>
            <LineChart width={1000} height={300} data={props.data} margin={{top: 5, right: 20, bottom: 5, left: 50}}>
                <Line type="natural" dataKey="Stand" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="Datum"/>
                <YAxis dataKey="Stand"/>
                <Tooltip/>
            </LineChart>
        </div>
    )
}