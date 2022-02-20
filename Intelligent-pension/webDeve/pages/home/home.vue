<template meta name="referrer" content="no-referrer">
	<view class="shiping">
	<!--轮播图-->
<view class="content">
		
		<view class="">
			<!-- 轮播 -->
			<swiper class="swiper" indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="rgba(255, 255, 255, 1)"
			 :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent" @change="changeSwiper">
				<swiper-item v-for="item in swiperImg" :key="item.id">
					<image class="swiper-item" :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<!-- 轮播指示点样式修改 -->
			
			<view class="dots">				
				<block v-for="(item,index) in swiperImg.length" :key="item.id">
					<view class="dot" :class="index==swiperCurrent ? ' active' : ''"></view>
				</block>
			</view>
		</view>
	</view>
	<view class="shenmiao">
		<view class="shentitle">生活小视频</view><view class="shenmor" @tap="tosenList()">更多 ></view>
	</view>
	<view class="viodebox" v-if="vlist.length">
	<view class="viodelist">
		<view v-for="item in vlist" :key="item.videoId" class="videoshow" @tap="tovideoplay()">  
				<img :src="item.videoImg" mode="aspectFill" ></img>
				<text :value="item.videoId">{{item.videoTitle}}</text>
		</view>
	</view>
	</view>
	
	<view class="huadong" v-if="huadong">
		 <view class="shenmiao">
		 	<view class="shentitle">舞蹈教学走起来</view><view class="shenmor" @tap="tosenList()">更多 ></view>
		 </view>
		 <view class="viodebox" v-if="vlist.length">
		 <view class="viodelist">
		 	<view v-for="item in vlist" :key="item.videoId" class="videoshow" id="videoshow">
		 		<img :src="item.videoImg" mode="aspectFill" :id="item.videoId"></img>
		 		<text :value="item.videoId">{{item.videoTitle}}</text>
		 	</view>
		 </view>
	</view>
	</view>
	
	<div class="footer">
	      <p>在线养老 沪ICP备13002172号-3</p>
	      <p>信息网络传播视听节目许可证：0910417</p>
	    </div>
	  </div>
</view>
			 
</template>

<script>
	export default {
		data() {
			return {
							swiperImg: [
								'../../static/image/heardimage1.jpg',					
								'../../static/image/laonian.jpg',					
							],
							none: true,
							current: 0,
							mode: 'default',
							swiperCurrent: 0,
							vlist:[],
							huadong:'',
							huadongupx:200,
							videosrc:'',
						};
		},
		
		methods: {
			tosenList(){
				uni.navigateTo({
					url:'../home-list/senghuoList'
				})
			},
			towuList(){
				uni.navigateTo({
					url:'../home-list/wudaoList'
				})
			},
			tovideoplay(){
				uni.navigateTo({
					url:'../home-list/wudaoList'
				})
				},
			changeSwiper(e) {
					this.swiperCurrent = e.detail.current;
						},
		getvideolist(){	
			uni.request({
						url: 'http://127.0.0.1:7001/videolist',
						method:'GET',
						success: (res) => {
								console.log(res.data[0].toString());
								 const videoList = res.data
								 // return videoList;
								this.initNavList(videoList);
									     },
									 
								 });
		},
		initNavList(videoList){
			this.vlist = videoList
			// const we = videoList[0].videoImg.replace("\"", "")
			console.log(videoList);
		},
		
		},
		
			
		onPageScroll(e) {
		      if(e.scrollTop > this.huadongupx){
				  this.huadong = 1
				  this.huadongupx += this.huadongupx ;
				  //将接口写在此处可实现可实现懒加载，节省性能，资源
			  }
		    },

		computed:{
			
		},
		created () {
		        this.getvideolist();
		      },
		onLoad() {
			
		}
		
		
	}
</script>

<style lang="scss">
	.content {
		
		.swiper {
			width: 700rpx;
			height: 240rpx;
			border-radius: 16rpx;
			overflow: hidden;
			margin-top: 16rpx;
			position: relative;
			margin-left: 26rpx;
			.swiper-item {
				width: 700rpx;
				height: 240rpx;
				border-radius: 16rpx;
			}

		}
		.dots {
			position: absolute;
			top: 220rpx;
			left: 50%;
			transform: translate(-50% 0);
			z-index: 4;
			display: flex;
			justify-content: center;
		
			.dot {
				width: 24rpx;
				height: 8rpx;
				transition: all .6s;
				background: rgba(0, 0, 0, .3);
				margin-right: 10rpx;
			}
		
			.active {
				width: 24rpx;
				height: 8rpx;
				background: rgba(255, 255, 255, .8);
			}
		}
	}
	.viodebox{
		left: -150upx;
		width: 100%;
		top: 30upx;
	}
	.viodebox .videoshow{
		padding-left: 20upx;
		padding-right: 20upx;
		width: 40%;
		height: 200upx;
		border: 3upx #EEEEEE solid;
		margin: 10upx;
		background-color: #fbf6ff;
		display: inline-block;
		font-size: 30upx;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.viodebox .videoshow2{
		padding-left: 20upx;
		padding-right: 20upx;
		width: 40%;
		height: 200upx;
		border: 3upx #EEEEEE solid;
		margin: 10upx;
		background-color: #fbf6ff;
		display: inline-block;
		font-size: 30upx;
		// overflow: hidden;
		text-overflow: ellipsis;
	}
	.viodebox text{
		width: 310upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.videoshow image{
	width: 310upx;
	height: 150upx;
		display:inline-block;
	}
	.shenmiao{
		width: 80%;	
		height: 40upx;
		margin: 10upx;
	}
	.shenmiao .shentitle{
		display: inline-block;	
		font-size: 30upx
	}
	.shenmiao .shenmor{
		display: inline-block;
		position: absolute;
		font-size: 30upx;
		right: 30upx;
		
	}
	.videoplay{
		// display: none;
		position: relative;

		z-index: 1000;
	}
	.footer {
	  margin-top: 40px;
	}
	
	.footer p {
	  margin-bottom: 20px;
	  text-align: center;
	  font-size: 13px;
	  color: #999;
	}
</style>
