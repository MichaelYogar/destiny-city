import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { CityContext } from "../../../../context/reducers/cityReducer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function BarChart() {
  const [{ city, ratings }] = useContext(CityContext);

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
      title: {
        text: `Categorical Ratings for ${city}`,
      },
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
        title: {
          text: "Ratings out of 10",
        },
      },
    },
  };

  return (
    <div>
      <Card>
        <CardContent>
          <ReactApexChart
            options={info.options}
            series={info.series}
            type="bar"
            height={350}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default BarChart;
