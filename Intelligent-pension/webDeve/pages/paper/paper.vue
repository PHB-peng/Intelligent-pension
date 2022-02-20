<template>
    <view class="container page">
      <view class="panel">
       <view class="barcode">
          <canvas canvas-id="barcode" id="barcode"/>
          <view class="barnum">{{ name }}</view>
		  <view class="barnum">{{ telnumber }}</view>
        </view>
        <view class="qrcode">
          <canvas  canvas-id="qrcode" id="qrcode"/>
        </view>
      </view>
	  
	  <view class="ssf" @click="xing()">
	  	刷新
	  </view>
    </view>
	
</template>

<script>
	import CODE  from '@/js_sdk/wmf-code/wmfCode/wmf.code.min.js';
	export default {
	    data() {
	        return {
	            name: 'XXX',
				telnumber:'182****0000',
				userid:'',
				lcolor:'green',
				code:'health degree: excellent',
	        }
	    },
	    onShow() {
			const uId = uni.getStorageSync('userid');	 	
			console.log(uId)
			uni.request({
				url: 'http://127.0.0.1:7001/person/cpaper',
				method:'POST',
				data:{
					userid : uId,
				},
				success:(res)=> {
					console.log(res)
					const cc = res.data
					const ff = cc.applse
					const gg = parseFloat(ff)
					uni.setStorage('userapplse',gg);
					switch(gg){
						case 0:
						this.chblue()
						break;
						case 1:
						this.chyellow()
						break;
						case 2:
						this.chpurple()
						
						break;
						case 3:
						this.chored()
						break;
						
						
					}
 					// this.lcolor = Ucolor;
					this.name = cc.name;
					this.telnumber = cc.telnum;
				},
			}),
	        //条形码
	        CODE.BarCode({
	            id: 'barcode',// canvas 的canvas-id
	            code: '1823608247',// 生成条形码的字符串
	            color: this.lcolor,// 条形码的颜色
	            bgColor: 'white',// 背景色
	            width: 300,// 宽度
	            height: 150,// 高度			
	        });
			// console.log("pin");
	        CODE.QRCode({
	            id: 'qrcode',// canvas的canvas-id
	            code: this.code,//生成二维码的字符串
	            size: 210,// 二维码大小
	            level: 4,//等级 0～4
	            img: require('@/static/image/logo.png'),//图片
	            iconSize: 40,//二维码图标的大小
	            color: this.lcolor// 二维码颜色 默认黑色
	        });
			// uni.redirectTo({
			//     url: '../sn-tabbar/sn-tabbar'
			// });
			
	    },
	    methods: {
	        async hello(){
	            // 第一个参数 qrcode 为 canvas-id
	            // 第二个参数 210 为二维码的宽度
	            // 第三个参数 210 为二维码的高度
	            // 如果是二维码怎 宽高度一样为 二维码的 size
	            const res = await CODE.SaveCode('qrcode',210,210) // 保存二维码图片
	        },
			// chcolor(cc){
			// 	const appcolor = cc.applse;
			// 	if(appcolor == 0){
			// 		console.log(appcolor)
			// 	return this.color = 'red'
			// 	}		
			// }
			chblue(){
				this.lcolor = 'blue',
				this.code = 'health degree: well'
			},
			chpurple(){
				this.lcolor = 'purple',
				this.code = 'health degree: ordinary'
			},
			chyellow(){
				this.lcolor = 'yellow',
				this.code = 'health degree: difference' 
			},
			chored(){
				this.lcolor = 'red',
				this.code = 'health degree: range'
			},
			xing(){
				console.log('324')
				uni.navigateTo({
						url:"../minelist/mineper/mineper"
					})
			}
	    }
	};

</script>

<style scoped lang="less">
page{
    background-color: #fff;
}
.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
    padding-bottom: 10upx;
	z-index: 100upx;
}

.panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    box-sizing: border-box;
    width: auto;
	height: 700upx;
    margin-top: 100upx;
    border-radius: 10upx;
    background-color: #fff;
	opacity:1;
}

.barcode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.barnum {
    width: 670upx;
    height: 80upx;
    line-height: 80upx;
    font-size: 38upx;
    font-weight: bold;
    text-align: center;
    letter-spacing: 5upx;
    white-space: nowrap;
}

.barcode {
    width: 680upx;
    height: 300upx;  
    background-color: #ffffff;
}

.qrcode {
    height: 420upx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
	background-color: #ffffff;
}
#qrcode{
    width: 500upx;
    height: 420upx;
    background-color: #ffffff;
}
.ssf{
	border: 2upx #55ffff solid;
	height: 120upx;
	width: 120upx;
	border-radius: 50%;
	position: absolute;
	top: 600upx;
	left: 600upx;
	text-align: center;
	line-height: 120upx;
	background-color: #2C405A;
}
</style>