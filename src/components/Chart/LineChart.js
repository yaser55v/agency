import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "2018 - 2019",
              data: [12, 19, 3, 5, 2, 3, 7, 22, 19, 8, 11.7, 2],
              backgroundColor: "#F5D197",
              borderColor: "#F5D197",
              borderWidth: 5,
            },
            {
              label: " 2019 - 2020",
              data: [5, 11, 12, 15, 15, 17, 7, 11, 9, 3, 1, 4],
              backgroundColor: "#000",
              borderColor: "#000",
              borderWidth: 5,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default LineChart;
