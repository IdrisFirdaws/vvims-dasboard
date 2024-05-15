import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EarnedLeave() {
    let availableEarnedLeave = 5;
    let usedEarnedLeave = 2;
    let totalEarnedLeave = 7;

    const data = {
        datasets: [{
            data: [availableEarnedLeave, totalEarnedLeave],
            backgroundColor: ['grey', '#031c5f']
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
                <div className="title earned">earned leave</div>
                <ul>
                    <li>availabe - {totalEarnedLeave}</li>
                    <li>used - {usedEarnedLeave}</li>
                    <li>total - {availableEarnedLeave}</li>
                </ul>
            </div>
        </div>
    )
}
