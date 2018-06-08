<template>
	<div id="div_body">
	    <div class="div_title">
	        <span>DIDI CHUXING / 10.08 - 10.14</span>
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
            barChart5_6:{}
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
    methods:{
	  	load(){

            //各大区不同项目组合概览-投放量*************************************************************
  		  	this.$http({
                method:'get',
                url:'static/data/data1.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
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
                method:'get',
                url:'static/data/data3/data3_1.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart3_1 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data3/data3_2.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart3_2 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data3/data3_3.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart3_3 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data3/data3_4.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart3_4 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data3/data3_5.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart3_5 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data3/data3_6.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
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
                method:'get',
                url:'static/data/data7.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart7 = response.data.chart_data
            })
            this.$http({
                method:'get',
                url:'static/data/data8.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart8 = response.data.chart_data
            })


            //朋友圈-不同大区媒体表现-川渝云贵********************************************************
            this.$http({
                method:'get',
                url:'static/data/data5/data5_1.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_1 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data5/data5_2.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_2 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data5/data5_3.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_3 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data5/data5_4.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_4 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data5/data5_5.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_5 = response.data.chart_data
            })

            this.$http({
                method:'get',
                url:'static/data/data5/data5_6.json',
                // data:{
                //     'adminv':"",
                //     'passv':"",
                //     'type':'Logout'
                // }
            }).then(response =>{
                this.barChart5_6 = response.data.chart_data
            })
		},
    },
}
</script>

<style scoped lang="less">
@import '../assets/less/home.less';

</style>