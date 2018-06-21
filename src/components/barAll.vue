<template>
  <div ref="mychart" ></div>
</template>
<script>
  import echarts from 'echarts';
  import { extend, isNull } from 'underscore';

  export default {
    name: 'Echarts',
    props: {
      chartData: {
        
      },
      // chartType: {
      //   type: String,
      //   require: false,
      // },
    },
    data() {
      return {
        myChart: {},
        opt: {
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
              data:[],
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
              data:[],
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: { 
                lineStyle: { 
                  color : "#fff"
                } 
              },
              axisLabel:{
                interval:0,
                rotate:50
              }
          },
          series:[]
        },
      };
    },
    methods: {
      setEchart() {

        if (isNull(this.chartData.legend.data)) {
          this.myChart.clear();
          this.myChart.showLoading();
          return;
        } else if (this.chartData === 'nodata') {
          this.myChart.hideLoading();
          return;
        }

        if (this.chartData.legend.data.length == 0) {
          this.myChart.clear();
          this.myChart.showLoading();
          return;
        } 
        this.myChart.hideLoading();
        this.opt.legend.data = this.chartData.legend.data;
        this.opt.xAxis.data = this.chartData.xAxis.data;
        this.opt.series = this.chartData.series;
        this.myChart.setOption(extend({}, this.opt));
        this.myChart.resize();
      },
      handleWindowResize() {
        this.myChart.resize();
      },
    },
    watch: {
      "chartData":"setEchart"
    },
    mounted() {
      const dom = this.$refs.mychart;
      this.myChart = echarts.init(dom);
      window.addEventListener('resize', this.handleWindowResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
  };
</script>
