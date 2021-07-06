import React from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2'

const data = {
    labels: ["Mom", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun" ],
    datasets: [
        {
            label: "Demo bar plot",
            backgroundColor: "#20b2aa",
            borderColor: "trasparent",
            hoverBackgroundColor: "#5f9ea0",
            data:[ 50, 30, 70, 55,33,20, 100],

        },
    ],
};
const BarPlot:React.FC = () => {
    return (
        <div>
            <Bar data= {data}/><HorizontalBar data={data} />
        </div>
    )
}

export default BarPlot;
