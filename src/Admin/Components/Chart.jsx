import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [activeTab, setActiveTab] = useState("WEEKLY");
  // Chart data
  const chartData = {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        data: [0, 10, 30, 80, 60, 350],
        borderColor: "rgb(79, 70, 229)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.4,
        fill: false,
        width: "100%",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
          callback: function (value) {
            return "₹" + value;
          },
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="max-w-full">
      <div className="bg-white rounded-md p-6 mb-6">
        <div className="flex md:flex-row flex-col justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Sale Graph</h2>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-1 text-xs rounded-md ${
                activeTab === "WEEKLY"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("WEEKLY")}
            >
              WEEKLY
            </button>
            <button
              className={`px-4 py-1 text-xs rounded-md ${
                activeTab === "MONTHLY"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("MONTHLY")}
            >
              MONTHLY
            </button>
            <button
              className={`px-4 py-1 text-xs rounded-md ${
                activeTab === "YEARLY"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("YEARLY")}
            >
              YEARLY
            </button>
          </div>
        </div>
        <div className=" h-full min-h-[15rem]   w-full flex justify-center">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
