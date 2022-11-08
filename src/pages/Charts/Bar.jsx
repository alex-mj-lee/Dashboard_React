import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  BarSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import {
  barChartData,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounder-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          {barChartData.map((item, index) => (
            <SeriesDirective
              key={index}
              dataSource={item}
              xName="x"
              yName="y"
              type="Bar"
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
