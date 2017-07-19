$(document).ready(function(){
    setInterval(function(){
        $.ajax({
            url: "water.php",
            type: "GET",
            dataType: "json",
            success:function(json){
                var water = json;
                //json:[["0", "0"], ["10", "0.16"], ["20", "0.21"], ["30", "0.95"], ["40", "0.47"], ["50", "0.54"], ["60", "0.65"], ["70", "0.71"], ["80", "0.88"]]
                for (var i = 0; i < water.length; i++){
                    water[i][0] = parseFloat(water[i][0])
                    water[i][1] = parseFloat(water[i][1]) * 100
                };
                $(function () {
                    $('#line').highcharts({
                        chart: {
                            type: 'line',       //图表类型line为直线，spline为曲线
                            inverted: true     //翻转坐标轴，x垂直y水平
                        },
                        title: {
                            text: '土壤含水量图表格'
                        },
                        subtitle: {
                            text: '根据接收数据绘制'
                        },
                        xAxis: {
                            reversed: false,//反转x坐标轴的方向，例如原来从左到右是从小到大，现在从左到右是从大到小
                            title: {
                                enabled: true,
                                text: '深度'
                            },
                            labels: {
                                fomatter: function () {
                                    return this.value + 'm';   //x轴显示的数据和单位
                                }
                            },
                            maxPadding: 0.05,             //最大内边距
                            showLastLabel: true          //显示最后一个数据
                        },
                        yAxis: {
                            title: {
                                text: '湿度'
                            },
                            labels: {
                                formatter: function () {
                                    return this.value + '%';  //y轴显示的数据和单位
                                }
                            },
                            lineWidth: 2    //水平轴粗细
                        },
                        legend: {
                            enabled: true    //是否启动图例，现已启动
                        },
                        tooltip: {               //鼠标放置在点上显示的数据
                            headerFormat: '<b>{series.name}</b><br/>',     
                            pointFormat: '{point.x} m: {point.y}%'
                        },
                        plotOptions: {
                            spline: {
                                marker: {
                                    enable: false
                                }
                            }
                        },
                        series: [{
                            name: '理想含水量',
                            data: [[0,10],[10,15],[20,24],[30,36],[40,44],[50,58],[60,69],[70,57],[80,60]]
                        },
                        {
                            name: '实际含水量',
                            data: water
                        },
                        {
                            name: '干旱阀值含水量',
                            data: [[0,5],[10,7],[20,11],[30,20],[40,26],[50,32],[60,40],[70,25],[80,19]]
                        },
                        {
                            name: '24',
                            data: [[0,18],[10,25],[20,30],[30,36],[40,37],[50,53],[60,64],[70,49],[80,34]]
                        },
                        {
                            name:"72",
                            data: [[0,10],[10,19],[20,28],[30,33],[40,45],[50,48],[60,53],[70,46],[80,49]]
                        }]
                    });
                });
            }
        });
    },1000*5);
});