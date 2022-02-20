<template>
	<view class="mine">
		<view class="heardimag">
			<image src="../../static/image/heardimage1.jpg" mode=""></image>
			<view class="yhtxiang">			
				<image src="../../static/image/logo.png" mode=""></image>
			</view>
			<view class="heardname">
				<text>用户id：</text>
				<text> {{duqu()}}</text>
			</view>
			
		</view>
		<!--body-->
	<view class="minebody">
		<view class="minelist" @tap="tocart()">
			查看订单
		</view>
		
		<view class="minelist" @tap="toheat()">
			健康状况
		</view>
		
		<view class="minelist" @tap="toPerson()">
			个人信息
		</view>
		
		<view class="minelist" @tap="toliDo()">
			居住地址
		</view>
			
	</view>	
		<!--footr-->
		<view class="minefoot">
			<button type="warn" @click="yichu()">退出</button>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				USERID : ''
			}
		},
		methods: {
			yichu(){
				uni.removeStorage({
				    key: 'userid',
				    success: function (res) {
				        uni.redirectTo({
				            url: './login'
				        });
				    }
				});
			},
			duqu(){
				const USERID = uni.getStorageSync('userid');
				return USERID
			},
			toliDo(){
				uni.navigateTo({
					url:'../minelist/mineper/dizi/dizi'
				})
			},
			toPerson(){
				uni.navigateTo({
					url:'../minelist/mineperson'
				})
			},
			tocart(){
				uni.navigateTo({
					url:'../cart/cart'
				})
			},
			toheat(){
				uni.navigateTo({
					url:'../minelist/heat/heat'
				})
			}
			
			
			 	
			
		},
		onLoad(){
				 	this.duqu();
		}
	}
</script>

<style>
.heardimag{
	height: 250upx;
	width: 100%;
}
.heardimag image{
	height: 200upx;
	width: 100%;
}
.heardimag .heardname{
	position: relative;
	left: 250upx;
	top: -225upx;
}
.yhtxiang{
		height: 100upx;
		width: 100upx;
		border: 5upx solid #555555;
		border-radius: 50%;
		z-index: 99upx;
		overflow: hidden;
		position: relative;
		top: -150upx;
		left: 50upx;
}	
.yhtxiang image{
	height: 155upx;
	width: 155upx;
	position: relative;
	left: -27upx;
	top: -29upx;
}
.minebody{
	display: flex;
	justify-content: space-around;
	flex-wrap:wrap;
}
.minebody .minelist{
	height: 260upx;
	width: 260upx;
	background-color: #74acff;
	font-size: 50upx;
	font-weight: 1000;
	border: #F1F1F1 solid 18upx;
	text-align: center;
	line-height: 300upx;
}
.minefoot{
	padding: 40upx;
}

</style>
