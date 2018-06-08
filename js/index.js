window.DIDI = {
    vars: {

    },
    init: function() {
        DIDI.eventBind();
        // $.get('../json/data.json',function(res){
        // 	console.log(res)
        // })
        var myChart = echarts.init(document.getElementById('chart_box_chart_one'));
        myChart.setOption(bar_project_option);

        var myChart1 = echarts.init(document.getElementById('chart_box_chart_four_1'));
        myChart1.setOption(bar_project_option);
        var myChart2 = echarts.init(document.getElementById('chart_box_chart_four_2'));
        myChart2.setOption(bar_project_option);
        var myChart3 = echarts.init(document.getElementById('chart_box_chart_four_3'));
        myChart3.setOption(bar_project_option);
        var myChart4 = echarts.init(document.getElementById('chart_box_chart_four_4'));
        myChart4.setOption(bar_project_option);


        window.onresize = function() {
            myChart.resize();
        }
    },

    eventBind: function() {

    }
}


DIDI.init()