import {MeasurePoint} from "./components/charts/RechartLineChart";

interface MesaurePointRepository {
    loadMeasures(): MeasurePoint[]
}