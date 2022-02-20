<template>
	<view class="container999">
		<view class="title">健康评价</view>
	<view class='line'>
		  <view class='lineLeft'>身高</view>
		  <view class="lineRight">  		
			<input class="input"  v-model="userheight" placeholder='单位:米'></input>
		  </view>
	</view>
	<view class='line'>
		  <view class='lineLeft'>体重</view>
		<input class="input"  v-model="userweight" placeholder='单位Kg'></input>
		
	</view>	

		<view class='line'>
		  <view class='lineLeft'>过往疾病</view>
			<view class="lineRightraio">
				<radio-group @change="radioChangehetl">
						                <label class="uni-list-cell uni-list-cell-pd" >
						                    <view>
						                        健康<radio value="0" />
						                    </view>						                    
						                </label>
										<label class="uni-list-cell uni-list-cell-pd">
										<view>
											良好<radio value="1" />
										</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd" >
										    <view>
										        轻疾<radio value="2" />
										    </view>						                    
										</label>
										<label class="uni-list-cell uni-list-cell-pd" >
										    <view>
										        重疾<radio value="3" />
										    </view>						                    
										</label>
						</radio-group>
				</viwe>	
		<view class="buttonBox" @click="submit">
			提交
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userweight:'',
				userheight:'',
				heatapp:''
			};
		},
		methods:{
			radioChangehetl(evt){
				console.log(evt)
				const heatapp = evt.detail.value
				this.heatapp = heatapp
			},
			bb(tt){
				// const tt = this.userweight / Math.pow(this.userheight,2);
					if(tt < 18.5){
						const Uheatapp2 = 2
						return Uheatapp2
					}	else if( tt <= 25){
				        const Uheatapp1 = 1
				        return Uheatapp1
				      }else if(tt <= 30){
				        const Uheatapp1 = 2
				        return Uheatapp1
				      }else if(tt <= 35){
				        const Uheatapp1 = 3
				        return Uheatapp1
				      }else {
				        const Uheatapp1 = 4
				        return Uheatapp1
				      }
			},
			submit(){
				const uId = uni.getStorageSync('userid');
				const tt = this.userweight / Math.pow(this.userheight,2);
				console.log(tt)
				const TT = this.bb(tt)
				console.log(TT)
				console.log(this.heatapp,this.userweight,this.userheight)
				uni.request({
					url: 'http://127.0.0.1:7001/person/cgheat',
					method:'post',
					data: {
						'userweight': this.userweight,
					    'userheight':this.userheight,
						'heatapp': TT,
						'userid':uId
					},success:(res) => {
							console.log(res.data)
							uni.reLaunch({
							    url: '../../paper/paper'
							});
						uni.showToast({icon:'none' ,title: '提交成功',duration: 1500});
						},
					})
					},
	},
	}
</script>

<style lang="scss">
.plaClass{
		color: #dbdbdb;
	}
	.container999{
		
		.title{
			height: 80rpx;
			line-height: 80rpx;
			padding-left: 4%;
			border-bottom: 1px solid #f5f5f5;
		}
		.buttonBox{
			width: 91%;
			margin: 0 auto;
			height: 84rpx;
			border-radius: 84rpx;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 100rpx;
			left: 0;
			right: 0;
			background-color: #4a8be9;
		}
		.tri{
			width:0;
			height:0;
			border-left:8rpx solid transparent;
			border-right:8rpx solid transparent;
			right: 30rpx !important;
			border-top:16rpx solid #545151;
		}
		.line{
		  margin-top: 30rpx;
		  height: 250rpx;
		  width: 92%;
		  margin: 0 auto;
		  border-bottom: 1px solid #f5f5f5;
		  display: flex;
		  .lineRight{
			  .tips{
				  color: #9a9a9c;
				  font-weight: bold;
			  }
			 flex: 1;
			  height: 100%;
			  display: flex;
			  align-items: center;
			  justify-content: space-between;
			  position: relative;
		  }
			.lineLeft{
			  display: flex;
			  width: 20%;
			  align-items: center;
			  height: 100%;
			  font-weight: bold;
			  color: #000000;
			}
			.input{
				padding-right: 20rpx;
				height: 100%;
				width: 70%;
				text-align: left;
				font-size: 28rpx;
				color: #545151;
			}
			.picker{
			 height: 100%;
			 justify-content: flex-start;
			  display: flex;
			  align-content: center;
			  width: 500rpx;
			}
			picker{
			  height: 84rpx;
			  line-height: 84rpx;
			}
		}
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6b8082;
		position: relative;
	}
</style>
