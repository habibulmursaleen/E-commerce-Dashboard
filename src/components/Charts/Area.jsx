import {
    ChartComponent,
    DateTime,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
  
  import { useStateContext } from "../../context/ContextProvider";
import {
    areaCustomSeries,
    areaPrimaryXAxis,
    areaPrimaryYAxis,
} from "../../data/dummy";

const Area = () => {
const { currentMode } = useStateContext();

return (
    
            <ChartComponent
                id="charts"
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                background={currentMode === "Dark" ? "#33373E" : "#fff" }
                legendSettings={{ background: "white" }}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
         

 
);
};

export default Area;