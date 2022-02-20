<template>
	<view>
		<view class="region" >
		<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion" >
            <view>点击选择省市区</view>
        </pick-regions>
        <view>{{regionName}}</view>
		</view>
		
		<view class="regionloac">
			<view>请填写具体地址：</view>
			<input v-model="textlocat" type="text" placeholder="请输入具体地子" placeholder-class="placeholder-class"/>
		</view>
		<view class="regionloac">
			<view>请填写手机号码：</view>
			<input v-model="numtext" type="text" placeholder="请输入手机号码" placeholder-class="placeholder-class"/>
		</view>
		<view class="subt">
			<button type="warn" @click="subt()" >提交</button>
		</view>
	</view>
</template>

<script>
    import pickRegions from './pick-regions.vue'
	export default {
        components:{ pickRegions },
        data(){
            return {
                region:[],
                defaultRegion:['广东省','广州市','番禺区'],
                defaultRegionCode:'440113',
				textlocat:'',
				locat:'',
				jutilocat:''
				// gatlocat:''
				
            }
        },
        computed:{
            regionName(){
                // 转为字符串
                return this.region.map(item=>item.name).join(' ')
            }
        },
        methods:{
            // 获取选择的地区
            handleGetRegion(region){
                this.region = region
				const locat = region[0].name + region[1].name +region[2].name ;
				// console.log(locat)
				this.locat = locat
            },
			getlocat(){
				const jutilocat = this.locat + this.textlocat;
				console.log(jutilocat)
				this.jutilocat = jutilocat;
			},
			subt(){
				this.getlocat();
				const uId = uni.getStorageSync('userid');
				console.log(this.numtext,this.jutilocat)
				// this.getlocat();
				uni.request({
				    url: 'http://127.0.0.1:7001/person/change', 
				    method:'post',
					data: {
						'userid':uId,
				        'numtel':this.numtext,
						'arclocation': this.jutilocat
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
						if(res == null){
							uni.setStorage({
							    key: 'userlocation',
							    data: this.jutilocat,
							    success: function () {
							        uni.showToast({title: '填写成功',duration: 1500})
									uni.reLaunch({
									    url: '../mine/mine'
									});
							    },faild() { console.log("纯不上") }
							});	
						}else{
							uni.showToast({title: '修改成功',duration: 1500})
							uni.setStorage({
							    key: 'userlocation',
							    data: this.jutilocat,
							    success: function () {
							        // uni.showToast({title: '填写成功',duration: 1500})
									uni.reLaunch({
									    url: '../mine/mine'
									});
							    },faild() { console.log("纯不上") }
							});
						}																																     
													       		       						
				    },fail() {
				    	uni.showToast({icon:'none' ,title: '没网了',duration: 1500});
				    }
				});
			},
        }
	}
</script>
<style>
	.region{
		width: auto;
		height: 35upx;
		font-size: 40upx;
		font-weight: 200;
		border-color: #C0BF97;
		margin-top:15upx;
	}

	.regionloac {
		width: auto;
		height: 200upx;
		font-weight: 200;
		font-size: 40upx;
		border-color: #C0BF97;
		margin-top:250upx;
	}
	.regionloac input{
		margin-top: 25upx;
	}
	.subt button{
		background-color: #ffff7f;
	}
</style>