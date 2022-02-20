<template>
	<view>
		刷新
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.switchTab({
			    url:"../../paper/paper"
			});
			// uni.navigateTo({
			// 		url:"../../paper/paper"
			// 	})
		}
	}
</script>

<style>

</style>
