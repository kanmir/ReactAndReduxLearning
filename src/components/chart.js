import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default (props) => {

    const options = {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e of %b'
            },
 
        },
        yAxis: {
            title: {
                text: `${props.series} (${props.units})`
            }
        },
        tooltip: {
            formatter: function() {
                return `${props.series}: <b>${this.y} ${props.units}</b>
                <br/>
                ${new Date(this.x).toString().split(':00 GMT')[0]}`;
            }
        },
        series: [{
            name: props.series,
            data: props.data
        }]
    };

      
    return (
        <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        </div>
    );
}