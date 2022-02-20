<template>
	<view class="sun-index">		<view class="sun-logo-box">			<view class="sun-logo">				<image class="sun-icon-img" src="../../static/image/moom_white.png"/>			</view>		</view>
		<view class="sun-login-box">			<view class="sun-label">				<text class="label-text">手机</text>			</view>			<view class="sun-input-box">				<input v-model="mobile" type="text" placeholder="请输入手机号" placeholder-class="placeholder-class"/>		</view>		</view>		<view class="sun-login-box">			<view class="sun-label">				<text class="label-text">请输入密码</text>			</view>			<view class="sun-input-box">				<input v-model="password1" type="text" placeholder="请输入密码" placeholder-class="placeholder-class"/><!-- 				<text class="code-text" :class="{gray:showTime}" @click="handleGetCodeClick">{{showTime ?currentCountTime+'s后重新获取':'获取验证码'}}</text> -->			</view>		</view>		<view class="sun-login-box">			<view class="sun-label">				<text class="label-text">请再次确认密码</text>			</view>			<view class="sun-input-box">				<input v-model="password2" type="text" placeholder="请再次确认密码" placeholder-class="placeholder-class"/> 			</view>		</view>		<view class="login-btn-box">			<view class="login-btn" @click="handleSubmit">注册</view>		</view>	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile:'',				password1:'',
				password2:'',				code:'',				countTime: 60, 				currentCountTime: 0,				showTime:false,				timeId:null
			}
		},		created() {			this.currentCountTime = this.countTime		},
		onLoad() {

		},
		methods: {
			handleSubmit() {				if(!this.mobile) return uni.showToast({title: '请输入手机号',icon:'none',duration: 1500})				if(!this.password1) return uni.showToast({title: '请输入两次密码',icon:'none',duration: 1500})				if(!this.password2) return uni.showToast({title: '请输入两次密码',icon:'none',duration: 1500})
				if(this.password1 == this.password2){
					uni.request({
						url: 'http://127.0.0.1:7001/login/register',
						method:'post',
						data: {
						    'useracc': this.mobile,
							'userpass':this.password1,
						},
						header: {
						    'custom-header': 'hello' //自定义请求头信息
						},success: (res) => {
						console.log(res.data)
						if( !res.data){
							uni.showToast({icon:'none' ,title: '注册失败已有此账号',duration: 1500});
							}else {
										console.log(res.data)
												this.text = 'request success';
													uni.setStorage({
													    key: 'userid',
													    data: res.data,//可能需要将userid去掉
													    success: function () {
													        uni.showToast({title: '注册成功',duration: 1500})
															uni.reLaunch({
															    url: './mine'
															});
													    },faild() { console.log("纯不上") }
													});									
							     }
													       		       						
				    },fail() {
				    	console.log("网络又开小差了")
				    }
					})
				}else{
					uni.showToast({title: '密码不一致',duration: 1500})
				}
											},			// handleGetCodeClick() {			// 	this.showTime = true			// 	if(this.showTime && this.currentCountTime !== this.countTime) return			// 	this.currentCountTime			// 	this.timeId = setInterval(()=>{			// 		if(this.currentCountTime <= 0) {			// 			this.currentCountTime = this.countTime			// 			this.showTime = false			// 			clearInterval(this.timeId)			// 		}			// 		this.currentCountTime--			// 	},1000)			// }
		}
	}
</script>

<style scoped>	.sun-logo-box {		display: flex;		justify-content: center;		align-items: center;		width: 750upx;		height: 300upx;	}	.sun-icon-img {		width: 120upx;		height: 120upx;	}
	.sun-logo {		display: flex;		justify-content: center;		align-items: center;		width: 180upx;		height: 180upx;		border-radius: 15upx;		background-color: #12C8B9;		box-shadow: 0upx 0upx 30upx rgba(18,200,185,0.5);	}	.close-icon {		width: 36upx;		height: 34upx;	}	.sun-login-box {		padding: 20upx 60upx;	}	.sun-label {		display: flex;		align-items: center;	}	.label-text {		margin-left: 16upx;		font-weight: 500;		color: #272e2d;		font-size: 30upx;	}	.sun-input-box {		display: flex;		align-items: center;		height: 130upx;		border-bottom: 3upx solid #eee;		padding: 0upx 10upx;	}	.sun-input-box input {		flex: 1;	}	.placeholder-class {		font-size: 30upx;		color: #C0C0C0;	}	.sun-tip {		display: flex;		justify-content: space-between;		padding: 0upx 68upx;	}	.sun-tip-text {		color: #30C6B3;	}	.login-btn-box {		position: absolute;		bottom: 129upx;		left: 0;		width: 600upx;		padding: 50upx 68upx 0upx;	}	.login-btn {		height: 82upx;		border-radius: 41upx;		background-color: #12C8B9;		box-shadow: -1upx 12upx 11upx 0upx rgba(16, 170, 157, 0.4);		text-align: center;		line-height: 82upx;		font-size: 36upx;		font-weight: 500;		color: #fff;	}	.code-text {		font-size: 28upx;		color: #30C6B3;	}	.gray {		color: #C0C0C0;	}</style>
