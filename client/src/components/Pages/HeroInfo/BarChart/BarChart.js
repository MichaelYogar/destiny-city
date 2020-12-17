import React, { useState, useContext, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { CityContext } from "../../../../contexts/CityContext";

function BarChart() {
  const { ratings } = useContext(CityContext);

  const get_x_values = (values) => {
    if (typeof values.data === "undefined") {
    } else {
      const array = [];
      values.data.map((x) => array.push(x.name));
      return array;
    }
  };

  const get_y_values = (values) => {
    if (typeof values.data === "undefined") {
    } else {
      const array = [];
      values.data.map((x) => array.push(x.score_out_of_10));
      return array;
    }
  };

  const info = {
    series: [
      {
        data: get_y_values(ratings),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: get_x_values(ratings),
      },
    },
  };

  return (
    <div>
      {" "}
      <ReactApexChart
        options={info.options}
        series={info.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default BarChart;
