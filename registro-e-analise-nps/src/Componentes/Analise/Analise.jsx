import React from "react";
import ApexChart from "react-apexcharts";
import "../../Style/Analise.scss";

const Analise = () => {
  const options = {
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: true,
    },
  };

  const series = [
    {
      data: [
        {
          x: '01-05-2024',
          y: '0'
        },
        {
          x: '02-05-2024',
          y: '1'
        },
        {
          x: '03-05-2024',
          y: '2'
        },
        {
          x: '04-05-2024',
          y: '3'
        },
        {
          x: '05-05-2024',
          y: '4'
        },
        {
          x: '06-05-2024',
          y: '5'
        },
        {
          x: '07-05-2024',
          y: '6'
        },
        {
          x: '08-05-2024',
          y: '7'
        },
        {
          x: '09-05-2024',
          y: '8'
        },
        {
          x: '10-05-2024',
          y: '9'
        },
        {
          x: '11-05-2024',
          y: '10'
        },
      ],
    },
  ];
  return (
    <div className="container">
      <ApexChart
      options={options} 
      series={series}
      type='bar'
      width={640}
      height={480}/>
    </div>
  );
};

export default Analise;
