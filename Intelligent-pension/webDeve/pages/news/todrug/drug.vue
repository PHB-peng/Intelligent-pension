<template>
	<view class="grug">
		<!--轮播图-->
		<!--药-->
		<scroll-view scroll-y="true">
			<view class="shopList">
				<view class="">感冒药	</view>
				<view class="">三高药	</view>
				<view class="">保健药	</view>
			</view>
			<view>
			  <view class="">
				 <image src="../../../static/image/logo.png" mode=""></image>
				 <view class="">
				 	{{title}}
				 </view>
				 <text>{{moddd}}</text>
				 <view class="jjnum">"-"</view><input type="text" value=""/> <view class="jjnum"> "+" </view>
				 <view class="">加入购物车</view>
			  </view>
			</view>
		</scroll-view>
		<movable-area @click="toshopcar()">购物车</movable-area>
	</view>
</template>

<script>
	data({
		yao:moddd
	})
</script>

<style>
</style>
