import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HalfLeave() {
    let availableHalfLeave = 5;
    let usedHalfLeave = 2;
    let totalHalfLeave = 7;

    const data = {
        datasets: [{
            data: [availableHalfLeave, totalHalfLeave],
            backgroundColor: ['grey', 'green']
        }]
    }

    const options = {}

    // const textCenter = {
    //     id: 'textCenter',
    //     beforeDraw(chart, args, pluginOptions) {
    //         const { ctx, chartArea } = chart;
    //         const width = chartArea.right - chartArea.left;
    //         const height = chartArea.bottom - chartArea.top;

    //         ctx.save();
    //         ctx.font = 'bold 30px sans-serif';
    //         ctx.fillStyle = 'red';
    //         ctx.textAlign = 'center';
    //         ctx.textBaseline = 'middle';
    //         ctx.fillText(data.datasets[0].data[0] / data.datasets[0].data[1], width / 2 + chartArea.left, height / 2 + chartArea.top);
    //         ctx.restore();
    //     }
    // }

    return (
        <div className='leavePageCards'>
            <div className='cardLeft'>
                <Doughnut
                    data={data}
                    options={options}
                // plugins={[textCenter]}
                ></Doughnut>
            </div>
            <div className="cardRight">
                <div className="title half">Half leave</div>
                <ul>
                    <li>availabe - {totalHalfLeave}</li>
                    <li>used - {usedHalfLeave}</li>
                    <li>total - {availableHalfLeave}</li>
                </ul>
            </div>
        </div>
    )
}
