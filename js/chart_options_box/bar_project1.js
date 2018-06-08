var bar_project_data = {
	"legend": {
        data: ['司机拉新', '商旅人群', '高校人群', '邻县渗透', '促销']
    },
	"xAxis" : {
		"data": ['川渝云贵', '浙豫皖', '闽赣', '京津冀', '沪苏']
	},
	"series": [{
            name: '司机拉新',
            type: 'bar',
            stack: '总量',
            barWidth : 50,
            data: [0, 0, 0, 0, 0]
        },
        {
            name: '商旅人群',
            type: 'bar',
            stack: '总量',
            barWidth : 50,
            data: [4.5, 2.8, 5, 0, 0]
        },
        {
            name: '高校人群',
            type: 'bar',
            stack: '总量',
            barWidth : 50,
            data: [3.5, 1.8, 3, 0, 0]
        },
        {
            name: '邻县渗透',
            type: 'bar',
            stack: '总量',
            barWidth : 50,
            data: [2.5, 4.4, 2, 0, 0]
        },
        {
            name: '促销',
            type: 'bar',
            stack: '总量',
            barWidth : 50,
            data: [0, 0, 0, 0, 0]
        }
    ]
}


var bar_project_option = {
    textStyle: {
        color: "#fff"
    },
    color:["#4e72be","#f6c234","#a5a5a5","#de8244","#6a9ad0"],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: bar_project_data.legend.data,
        orient: 'vertical',
        right: 0,
        y:'center',
        textStyle: {
        	color:"#fff"
        }
    },
    grid: {
        left: '3%',
        right: '13%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
     	data:bar_project_data.xAxis.data,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: { 
        	lineStyle: { 
        		color : "#fff"
        	} 
        }
    },
    series:bar_project_data.series
};




