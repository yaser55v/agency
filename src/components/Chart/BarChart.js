import React from "react"
import { Bar } from "react-chartjs-2"
const BarChart = () => {
  return (
    <div>
      <Bar
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
              label: "Sales volume",
              data: [12, 19, 3, 5, 2, 3,7, 22, 19, 8,11.7,2],
              backgroundColor: "#F5D197",
              borderColor: "#F5D197",
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        
      />
    </div>
  )
}

export default BarChart
