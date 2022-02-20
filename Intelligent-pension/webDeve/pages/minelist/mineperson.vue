<template>
	<view class="container999">
		<view class="title">个人信息</view>
		<view class='line'>
		  <view class='lineLeft'>姓名</view>
		  <view class="lineRight">  
			<!-- data-name为自定义参数名称,同时也会以此为参数名存入data的form中-->
			<input class="input" @input="change" v-model="username"  data-name="name" placeholder-class="plaClass" placeholder='请输入姓名'></input>
			</view>
		</view>
		<view class='line'>
		  <view class='lineLeft'>性别</view>
			<view class="lineRight">
<radio-group @change="radioChange">
		                <label class="uni-list-cell uni-list-cell-pd" >
		                    <view>
		                        男<radio value="1" />
		                    </view>
		                    
		                </label>
						<label class="uni-list-cell uni-list-cell-pd"  >
						<view>
							女<radio value="0" />
						</view>
						</label>
		</radio-group>			
		</view>
	</view>	

		<view class='line'>
		  <view class='lineLeft'>年龄</view>
			<view class="lineRight">  
				<input class="input" @input="change" value="form.remarks" v-model="year" placeholder-class="plaClass" placeholder='年龄'></input>
			</view>
		</view>
		<view class="buttonBox" @click="submit">
			提交
		</view>
	</view>
</template>

<script>
	const valid = require('../../components/util/valid.js'); //校验规则文件
	const util = require('../../components/util/util.js');  //防重点击函数
	export default {
		data() {
			return {
				customItem: '全部', //地址picker的全部功能
				form:{
					region: ['广东省', '广州市', '海珠区'] //默认参数
				},
				year:'',
				username:'',
				sex:'',
			};
		},
		methods:{
			// 输入框或者picker事件方法
			change(e){
				let name = e.currentTarget.dataset.name;
				let tempVal = e.target.value || e.detail.value;
				if(this.form[name] === undefined){
					console.log('首次添加属性名')
					this.$set(this.form,name,tempVal)
				}else{
					// 若存在则直接赋值
					this.form[name] = tempVal
				}
			},
			radioChange(evt){
			            // for (let i = 0; i < this.items.length; i++) {
			            //     if (this.items[i].value === evt.target.value) {
			            //         this.current = i;
			            //         break;
						console.log(evt)
						const sex = evt.detail.value
						this.sex = sex
						// return sex
			                },
			// 验证方法
			toVaild(tempList){
				// valid(value,type)为引入的校验方法,49行可见
				return tempList.every((item,index)=>{
					let isVal = this.form[item.paramName]
					if(!isVal || !valid(isVal,item.rules)){
						uni.showModal({
						  title: '错误',
						  content: `${item.failPass}`,
						  showCancel:false
						})
						return false;
					}
					return true;
				})
			},
			// 提交
			submit: util.throttle(function(e) {
				// this.radioChange(evt);
				let tempList = [{
					paramName:'name', //data-name和form中的参数名
					failPass:'请输入正确的姓名', //失败的提示
					rules:'name', //校验的规则名称
				}]
				if(this.toVaild(tempList)){
					uni.showToast({
						title:'通过'
					})
					
					console.log(this.year,this.username,this.sex)
					const uId = uni.getStorageSync('userid');
					uni.request({
						url: 'http://127.0.0.1:7001/person/nsage',
						method:'post',
						data: {
							'yearage': this.year,
						    'name':this.username,
							'sex': this.sex,
							userid:uId
						},
						success:(res) => {
							console.log(res)
							uni.reLaunch({
							    url: '../mine/mine'
							});
						},
						fail(){
							console.log('美网了')
						},
				})
			}	
			//防重点击,1s内只可点击一次
		}, 1000),
		onLoad() {
			
		}
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
		  height: 100rpx;
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
