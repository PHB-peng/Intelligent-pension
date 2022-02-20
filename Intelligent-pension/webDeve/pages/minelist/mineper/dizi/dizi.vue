<template>
	<view class="dizibox">
		<view class="diziname dizifont">姓名：{{name}}</view>
		<view class="diziare dizifont">
			地址：{{location}}
		</view>
		<view class="dizitle dizifont">
			电话：{{tlenum}}
		</view>
		<view class="dizibutt">
			<button type="warn" @click="dzchan()">填写 / 修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				location:'',
				tlenum:''
			}
		},
		methods: {
			tianxie(bb){	
				this.name = bb.name,
				this.location = bb.location,
				this.tlenum = bb.telnum,
					uni.setStorage({
					key: 'userlocation',
				    data: bb.location,
				    success: function () {
			
				    },faild() { 
						uni.showToast({title: '获取失败请检擦网络',duration: 1500})}
								});
			},
			dzchan(){
				uni.navigateTo({
					url:'../../minedizi'
				})
			}
		},
		onLoad() {
			const uId = uni.getStorageSync('userid')
			uni.request({
			    url: 'http://127.0.0.1:7001/person', 
			    method:'post',
				data: {
			        'userid': uId,
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res.data)
					const bb = res.data
					this.tianxie(bb)
																		   				
												       		       						
					},fail() {
					console.log("没了")
			    }
			});
		}
		
	}
</script>

<style>
	.dizifont{
		text-align: center;
		line-height: 250upx;
		font-size: 40upx;
		font-weight: 200;
		border: #c0bf97 4upx solid;
		width: auto;
		height: 250upx;
		background-color: #edf2ff;
		margin: 8upx;
		border-radius:25px;
	}
	.dizibutt button{
		background-color: #007AFF;
	}
</style>
