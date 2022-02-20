<template>
	<view class="sun-index">		<view class="sun-logo-box">			<view class="sun-logo">				<image class="sun-icon-img" src="../../static/image/moom_white.png"/>			</view>		</view>
		<view class="sun-login-box">			<view class="sun-label"><!-- 				<image style="width: 28rpx;height:39rpx;" src="@/static/imgs/mobile_icon.png"/> -->				<text class="label-text">手机</text>			</view>			<view class="sun-input-box">				<input v-model="mobile" type="text" placeholder="请输入手机号" placeholder-class="placeholder-class"/>				<!-- <image @click="mobile=''" class="close-icon" src="@/static/imgs/close_icon.png"/> -->			</view>		</view>		<view class="sun-login-box">			<view class="sun-label">				<text class="label-text">密码</text>			</view>			<view class="sun-input-box">				<input v-model="password" type="text" placeholder="请输入密码" placeholder-class="placeholder-class"/>			</view>		</view>		<view class="sun-tip">			<text class="sun-tip-text">忘记密码/解绑</text>			<text class="sun-tip-text" @tap="goRegister()">注册</text>		</view>		<view class="login-btn-box">			<view class="login-btn" @click="handleSubmit()">登录</view>		</view>	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',				password:''
			}
		},
		methods: {
			handleSubmit() {				if(!this.mobile) return uni.showToast({title: '请输入手机号',icon:'none',duration: 1500})				if(!this.password) return uni.showToast({title: '请输入密码',icon:'none',duration: 1500})				uni.request({
				    url: 'http://127.0.0.1:7001/login', 
				    method:'post',
					data: {
				        'useracc': this.mobile,
						'userpass':this.password,
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
						// console.log(res.data)
						if( !res.data){
							uni.showToast({icon:'none' ,title: '账号错误',duration: 1500});
							console.log('zhanghaocuo')
							}else if(res.data == 203){
								 ({icon:'none',title: '密码错误',duration: 1500})
							}else{
										console.log(res.data)
												this.text = 'request success';
													uni.setStorage({
													    key: 'userid',
													    data: res.data,
													    success: function () {
													        uni.showToast({title: '登录成功',duration: 1500})
															uni.reLaunch({
															    url: './mine'
															});
													    },faild() { console.log("纯不上") }
													});									
							     }
													       		       						
				    },fail() {
				    	console.log("没了")
				    }
				});			},
						goRegister() {				uni.navigateTo({
					url:'./register'
				})			}
		}
	}
</script>

<style scoped>	.sun-logo-box {		display: flex;		justify-content: center;		align-items: center;		width: 750upx;		height: 300upx;	}
	.sun-logo {		display: flex;		justify-content: center;		align-items: center;		width: 180upx;		height: 180upx;		border-radius: 15upx;		background-color: #12C8B9;		box-shadow: 0upx 0upx 30upx rgba(18,200,185,0.5);	}	.close-icon {		width: 36upx;		height: 34upx;	}	.sun-icon-img {		width: 120upx;		height: 120upx;	}	.sun-login-box {		padding: 20upx 60upx;	}	.sun-label {		display: flex;		align-items: center;	}	.label-text {		margin-left: 16upx;		font-weight: 500;		color: #272e2d;		font-size: 30upx;	}	.sun-input-box {		display: flex;		align-items: center;		height: 100upx;		border-bottom: 1upx solid #eee;		padding: 0upx 10upx;	}	.sun-input-box input {		flex: 1;	}	.placeholder-class {		font-size: 30upx;		color: #C0C0C0;	}	.sun-tip {		display: flex;		justify-content: space-between;		padding: 0upx 68upx;	}	.sun-tip-text {		color: #30C6B3;	}	.login-btn-box {		position: absolute;		bottom: 129upx;		left: 0;		width: 600upx;		padding: 50upx 68upx 0upx;	}	.login-btn {		height: 82upx;		border-radius: 41upx;		background-color: #12C8B9;		box-shadow: -1px 12upxupx 11px 0px rgba(16, 170, 157, 0.4);		text-align: center;		line-height: 82upx;		font-size: 36upx;		font-weight: 500;		color: #fff;	}</style>
