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
            title:{
              text:"",
              textStyle: {
                color: "#fff"
              },
              left:'center'
            },
            color:["#4e72be","#f6c234","#a5a5a5","#de8244","#6a9ad0"],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                bottom: 'bottom',
                data: [],
                textStyle: {
                  color:"#fff"
                }
            },
            series : [
                {
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
      };
    },
    methods: {
      setEchart() {

        if (isNull(this.chartData)) {
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
        this.opt.title.text = this.chartData.title;
        this.opt.legend.data = this.chartData.legend.data;
        this.opt.series[0].data = this.chartData.series.data;
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
