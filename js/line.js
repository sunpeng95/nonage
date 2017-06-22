var chart = new Highcharts.Chart("line", {
    title:{
        text: '',
    },
    xAxis: {
        title:{
            text:'湿度'
        },
        categories: ['0', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
    },
    yAxis: {
        title: {
            text: '深度（m）'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '%'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
    },
    series: [{
        name: '理想含水量',
        data: [1, 8, 9, 14, 18, 22, 25, 27, 29, 33, 36]
    },
    {
        name: '实际含水量',
        data: [6, 13, 14, 19, 23, 27, 30, 32, 34, 38, 41]
    },
    {
        name: '干旱阀值含水量',
        data: [11, 18, 19, 24, 28, 32, 35, 37, 39, 43, 46]
    },
    {
        name: '24',
        data: [9, 14, 16, 18, 26, 30, 35, 39, 42, 48, 50]
    },
    {
        name:"72",
        data:[12, 18, 26, 37, 39, 43, 46, 49, 54, 55, 57]
    }]
});

$