<template>
	<view>
		<view class="tx-w">
			<view class="tx">
				<image class="tx-img" :src="yonghuwx.avatarUrl"></image>
				<view class="zx"></view>
			</view>
			<view class="name">{{yonghuwx.nickName}} </view>
			<view class="name-qm">自然的美好的，你的</view>
		</view>
		
	</view>
</template>

<script>
	// export default {
	// 	data() {
	// 		return {
	// 			yonghuwx: []
	// 		}
	// 	},
	// 	onLoad(){
			
	// 		},
	// 	methods: {
			
	// 	}
	// }
</script>

<style>
	.tx-w{
		margin-top:200upx;
	}
	
	.tx{
		text-align:center;
	}
	
	.tx image{
		width:140upx;
		height:140upx;
		border-radius: 50%;
	}
	
	.name{
		text-align:center;
		margin-top:20upx;
	}
	
	.name-qm{
		text-align:center;
		margin-top:20upx;
		font-size:30upx;
	}
</style>
