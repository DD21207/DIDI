<template>
	<div id="div_body">
	    <div class="div_title">
	        <span>DIDI CHUXING / 10.08 - 10.14</span>
	    </div>
        <div class="select_box">
            <div class="select_box_item">
                <p>选择项目名称：</p>
                <select class="form-control" v-model="selectData1.campaign" >
                  <option v-for="item in optionList.campaign"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择投放媒体：</p>
                <select class="form-control" v-model="selectData1.media">
                    <option v-for="item in optionList.media"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择资源：</p>
                <select class="form-control" v-model="selectData1.resource">
                  <option v-for="item in optionList.resource"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择定向市场：</p>
                <select class="form-control" v-model="selectData1.market">
                  <option v-for="item in optionList.market"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择投放周期：</p>
                <select class="form-control" v-model="selectData1.period">
                  <option v-for="item in optionList.period"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择大区：</p>
                <select class="form-control" v-model="selectData1.region">
                  <option v-for="item in optionList.region"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择区域：</p>
                <select class="form-control" v-model="selectData1.area">
                  <option v-for="item in optionList.area"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
        </div>
	    <div class="chart_box">
	        <div class="chart_box_title">
	            <div class="chart_box_title_color"></div>
	            <div class="chart_box_title_text">各大区不同项目组合概览-投放量</div>
	        </div>
	        <div class="chart_box_chart">
	            <!-- <div class="chart_box_chart_one" id="chart_box_chart_one">
	            </div> -->
	            <bar-all class="chart_box_chart_one" :chartData="barChart1"></bar-all>
	        </div>
	    </div>
	    <div class="chart_box" style="height: 700px;">
	        <div class="chart_box_title">
	            <div class="chart_box_title_color"></div>
	            <div class="chart_box_title_text">各大区不同项目媒介组合-投放量</div>
	        </div>
	        <div class="chart_box_chart">
	            <div class="chart_box_chart_four_box">
	            	<div class="chart_box_chart_four">
	            		<div class="chart_box_chart_four_title"><span>川渝云贵</span></div>
	            		<bar-alone class="chart_box_chart_four_chart_box" :chartData="barChart2"></bar-alone>
	            	</div>
	            	<div class="chart_box_chart_four">
	            		<div class="chart_box_chart_four_title"><span>闽赣</span></div>
	            		<bar-alone class="chart_box_chart_four_chart_box" :chartData="barChart2"></bar-alone>
	            	</div>
	            </div>
	            <div class="chart_box_chart_four_box">
	                <div class="chart_box_chart_four">
	            		<div class="chart_box_chart_four_title"><span>浙豫皖</span></div>
	            		<bar-alone class="chart_box_chart_four_chart_box" :chartData="barChart2"></bar-alone>
	            	</div>
	            	<div class="chart_box_chart_four">
	            		<div class="chart_box_chart_four_title"><span>东北</span></div>
	            		<bar-alone class="chart_box_chart_four_chart_box" :chartData="barChart2"></bar-alone>
	            	</div>
	            </div>
	        </div>
	    </div>
	    <div class="chart_box" style="height: 1040px;">
	        <div class="chart_box_title">
	            <div class="chart_box_title_color"></div>
	            <div class="chart_box_title_text">各大区不同项目媒介组合-投放量</div>
	        </div>
	        <div class="chart_box_chart">
	            <div class="chart_box_chart_four_box">
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_1"></bar-performance>
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_2"></bar-performance>
	            </div>
	            <div class="chart_box_chart_four_box">
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_3"></bar-performance>
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_4"></bar-performance>
	            </div>
	            <div class="chart_box_chart_four_box">
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_5"></bar-performance>
	            	<bar-performance class="chart_box_chart_four" :chartData="barChart3_6"></bar-performance>
	            </div>
	        </div>
	    </div>
        <div class="chart_box" style="height: 1040px;">
            <div class="chart_box_title">
                <div class="chart_box_title_color"></div>
                <div class="chart_box_title_text">郊县渗透-川渝云贵-不同城市表现</div>
            </div>
            <div class="chart_box_chart">
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_1"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_2"></bar-performance>
                </div>
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_3"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_4"></bar-performance>
                </div>
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_5"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart4_6"></bar-performance>
                </div>
            </div>
        </div>
        <div class="select_box">
            <div class="select_box_item">
                <p>选择项目名称：</p>
                <select class="form-control" v-model="selectData2.campaign" >
                  <option v-for="item in optionList.campaign"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择投放媒体：</p>
                <select class="form-control" v-model="selectData2.media">
                    <option v-for="item in optionList.media"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择资源：</p>
                <select class="form-control" v-model="selectData2.resource">
                  <option v-for="item in optionList.resource"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择定向市场：</p>
                <select class="form-control" v-model="selectData2.market">
                  <option v-for="item in optionList.market"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择投放周期：</p>
                <select class="form-control" v-model="selectData2.period">
                  <option v-for="item in optionList.period"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择大区：</p>
                <select class="form-control" v-model="selectData2.region">
                  <option v-for="item in optionList.region"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
            <div class="select_box_item">
                <p>选择区域：</p>
                <select class="form-control" v-model="selectData2.area">
                  <option v-for="item in optionList.area"
                      :key="item"
                      :label="item"
                      :value="item">{{item}}</option>
                </select>
            </div>
        </div>
        <div class="chart_box">
            <div class="chart_box_title">
                <div class="chart_box_title_color"></div>
                <div class="chart_box_title_text">不同digital媒体的在项目中的运用-投放量</div>
            </div>
            <div class="chart_box_chart">
                <!-- <div class="chart_box_chart_one" id="chart_box_chart_one">
                </div> -->
                <bar-all class="chart_box_chart_one" :chartData="barChart6"></bar-all>
            </div>
        </div>
        <div class="chart_box" style="height:480px;">
            <div class="chart_box_title">
                <div class="chart_box_title_color"></div>
                <div class="chart_box_title_text">朋友圈投放分析-投放量</div>
            </div>
            <div class="chart_box_chart">
                <!-- <div class="chart_box_chart_one" id="chart_box_chart_one">
                </div> -->
                <div class="chart_box_chart_two_box">
                    <pie-all class="chart_box_chart_two" :chartData="barChart7"></pie-all>
                    <pie-all class="chart_box_chart_two" :chartData="barChart8"></pie-all>
                </div>


            </div>
        </div>
        <div class="chart_box" style="height: 1040px;">
            <div class="chart_box_title">
                <div class="chart_box_title_color"></div>
                <div class="chart_box_title_text">朋友圈-不同大区媒体表现-川渝云贵</div>
            </div>
            <div class="chart_box_chart">
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_1"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_2"></bar-performance>
                </div>
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_3"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_4"></bar-performance>
                </div>
                <div class="chart_box_chart_four_box">
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_5"></bar-performance>
                    <bar-performance class="chart_box_chart_four" :chartData="barChart5_6"></bar-performance>
                </div>
            </div>
        </div>
	</div>
</template>


<script>
import barAll from '@/components/barAll.vue'
import barAlone from '@/components/barAlone.vue'
import barPerformance from '@/components/barPerformance.vue'
import pieAll from '@/components/pieAll.vue'




export default {
	name: 'home',
	data () {
	    return {
	     	barChart1:{},
	     	barChart2:{},
	     	barChart3_1:{},
	     	barChart3_2:{},
	     	barChart3_3:{},
	     	barChart3_4:{},
	     	barChart3_5:{},
	     	barChart3_6:{},
            barChart4_1:{},
            barChart4_2:{},
            barChart4_3:{},
            barChart4_4:{},
            barChart4_5:{},
            barChart4_6:{},
            barChart6:{},
            barChart7:{},
            barChart8:{},
            barChart5_1:{},
            barChart5_2:{},
            barChart5_3:{},
            barChart5_4:{},
            barChart5_5:{},
            barChart5_6:{},
            selectData1:{
                 "campaign":"", 
                 "media":" ", 
                 "resource":" ",
                 "market": " ",
                 "period": "",
                 "region": "",
                 "area":""
            },
            selectData2:{
                "campaign":"", 
                 "media":" ", 
                 "resource":" ",
                 "market": " ",
                 "period": "",
                 "region": "",
                 "area":""
            },
            optionList:{
                area:[],
                campaign:[],
                market:[],
                media:[],
                period:[],
                region:[],
                resource:[]
            }
	    }
	},
	components: {
	    barAll,
	    barAlone,
	    barPerformance,
        pieAll
	},
	filters: {
	},
	mounted: function() {
	    this.$nextTick(function() {
	      this.load();
	    });
	},
    watch:{
        "selectData1.campaign":"chartRegion",
        "selectData1.media":"chartRegion",
        "selectData1.resource":"chartRegion",
        "selectData1.market":"chartRegion",
        "selectData1.period":"chartRegion",
        "selectData1.region":"chartRegion",
        "selectData1.area":"chartRegion",
        "selectData2.campaign":"chartDigital",
        "selectData2.media":"chartDigital",
        "selectData2.resource":"chartDigital",
        "selectData2.market":"chartDigital",
        "selectData2.period":"chartDigital",
        "selectData2.region":"chartDigital",
        "selectData2.area":"chartDigital",
    },
    methods:{
	  	  load(){
            this.$http({
                method:'get',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getOptions',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.optionList = response.data;
            })


            this.chartRegion();
            this.chartDigital();

		    },
        chartRegion(){
           //各大区不同项目组合概览-投放量*************************************************************
            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData1',
                data:this.selectData1,
            }).then(response =>{
               this.barChart1 = response.data.chart_data
            })

            //各大区不同项目媒介组合-投放量*************************************************************
            this.$http({
                method:'get',
                url:'static/data/data2.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart2 = response.data.chart_data
            })


            //各大区不同项目媒介组合-投放量*************************************************************
            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"ActualCPM"
                },
            }).then(response =>{
                this.barChart3_1 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"ActualCPC"
                },
            }).then(response =>{
                this.barChart3_2 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"CTR"
                },
            }).then(response =>{
                this.barChart3_3 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"UV"
                },
            }).then(response =>{
                this.barChart3_4 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"ImpPCT"
                },
            }).then(response =>{
                this.barChart3_5 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData31',
                data:{
                 "campaign":this.selectData1.campaign, 
                 "media":this.selectData1.media, 
                 "resource":this.selectData1.resource,
                 "market": this.selectData1.market,
                 "period":this.selectData1.period,
                 "region": this.selectData1.region,
                 "area":this.selectData1.area,
                 "value":"CPCPCT"
                },
            }).then(response =>{
                this.barChart3_6 = response.data.chart_data
            })


            //郊县渗透-川渝云贵-不同城市表现**********************************************************
            this.$http({
                method:'get',
                url:'static/data/data4/data4_1.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_1 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data4/data4_2.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_2 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data4/data4_3.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_3 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data4/data4_4.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_4 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data4/data4_5.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_5 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data4/data4_6.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart4_6 = response.data.chart_data
            })
        },
        chartDigital(){
            //不同digital媒体的在项目中的运用-投放量************************************************
            this.$http({
                method:'get',
                url:'static/data/data6.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart6 = response.data.chart_data
            })

            //朋友圈投放分析-投放量****************************************************************
            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData7',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area
                },
            }).then(response =>{
                this.barChart7 = response.data.chart_data
            })
            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData7',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area
                },
            }).then(response =>{
                this.barChart8 = response.data.chart_data
            })


            //朋友圈-不同大区媒体表现-川渝云贵********************************************************
            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"ActualCPM"
                },
            }).then(response =>{
                this.barChart5_1 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"ActualCPC"
                },
            }).then(response =>{
                this.barChart5_2 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"CTR"
                },
            }).then(response =>{
                this.barChart5_3 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"UV"
                },
            }).then(response =>{
                this.barChart5_4 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"ImpPCT"
                },
            }).then(response =>{
                this.barChart5_5 = response.data.chart_data
            })

            this.$http({
                method:'post',
                url:'http://ec2-52-83-199-126.cn-northwest-1.compute.amazonaws.com.cn:8070/api/getChartData5',
                data:{
                 "campaign":this.selectData2.campaign, 
                 "media":this.selectData2.media, 
                 "resource":this.selectData2.resource,
                 "market": this.selectData2.market,
                 "period":this.selectData2.period,
                 "region": this.selectData2.region,
                 "area":this.selectData2.area,
                 "value":"CPCPCT"
                },
            }).then(response =>{
                this.barChart5_6 = response.data.chart_data
            })
        }
    },
}
</script>

<style scoped lang="less">
@import '../assets/less/home.less';

// .el-input__inner{
//         background: #313131 !important; 
//     }
</style>