<template>
	<view class="content">
		<view class="commodity-list">
			<view class="commodity-item" v-for="(list,index) in CommodityList" :key="index">
				<view class="commodity-img">
					<image class="img" :src="list.image" mode="widthFix"></image>
					<view class="firmName-box">
						<text class="firmName">{{list.firmName}}</text>
						<text class="attr_val">{{list.attr_val}}</text>
					</view>

				</view>
				<view class="commodity-text">
					<text class="title">{{list.title}}</text>
					<view class="price_box">
						<view class="price">单价：<text class="c">{{list.price}}</text></view>
						<view class="stock">库存：<text class="c">{{list.stock}}</text></view>
					</view>

					<view class="cart-box">

						<view class="cart-icon" @click="NumberbBox(index)">
							<image src="@/static/icon.png" mode="widthFix"></image>
						</view>

						<view class="number-box" :class="list.number >= 1 ? 'on' : ''">
							<text class="number-sub" @click="sub(index)">-</text>
							<text class="number-num">{{list.number}}</text>
							<text class="number-add" @click="add(index)">+</text>
						</view>
					</view>
				</view>
			</view>



		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CommodityList: null,
				goodsList: null,
				flag: true
			}
		},
		onLoad() {
			uni.showLoading({
				mask: true,
				title: "加载中..."
			})
			this.CommodityData()
		},
		methods: {
			async CommodityData() {
				let CommodityList = await this.$json.CommodityList;
				CommodityList.forEach((item, i) => {
					item.number = 0
				})
				this.CommodityList = CommodityList
				setTimeout(() => {
					uni.hideLoading()
				}, 500)
			},

			NumberbBox(index) { //添加关闭购物车
				let times = null
				if (this.flag) {
					this.CommodityList[index].number = this.CommodityList[index].number == 0 ? 1 : 0
					this.getGoodsList(this.CommodityList[index])
				} else {
					this.$msg.msg('您点击的太快了....')
				}
				this.flag = false
				times = setTimeout(() => {
					this.flag = true
					clearInterval(times)
				}, 500)

			},
			sub(index) { //减少购物车
				if (this.CommodityList[index].number <= 1) return
				this.CommodityList[index].number--
				this.getGoodsList(this.CommodityList[index])

			},
			add(index) { //增加购物车
				if (this.CommodityList[index].number >= this.CommodityList[index].stock) return
				this.CommodityList[index].number++
				this.getGoodsList(this.CommodityList[index])

			},
			getGoodsList(CommodityList) {
				let goodsList = this.$msg.fetchCache(this.$msg.CARTLIST) || [] //读取缓存
				let listfalg = null
				let listindex = null
				let len1 = goodsList.length
				if (len1 == 0) {
					listfalg = 3
				} else {

					for (let i = 0; i < len1; i++) { //遍历购物车信息
						if (goodsList[i].firmId == CommodityList.firmId) { //如果存在同一id商家
							goodsList[i].goods.forEach((item, j) => {
								if (CommodityList.number == 0) { //如果传的数量为0则删除该商品
									goodsList[i].goods.splice(j, 1)
									listfalg = 1
								} else if (item.id == CommodityList.id) { //存在同一 商品id说明是同一个商品只需要更改数量
									item.number = CommodityList.number //只需要更改商品数量
									listfalg = 1
								} else { //如果不是一个商品id则需要添加新的商品信息内容
									listfalg = 2
									listindex = i
								}
							})
							break
						} else {
							listfalg = 3
						}

					}
				}
				setTimeout(() => {
					let item = CommodityList
					//存在同一商品id 直接将赋值
					if (listfalg == 1) { //存在同一商品id 直接将赋值

					} else if (listfalg == 2) { //不存在相同商品id的商品
						goodsList[listindex].goods.push({
							id: item.id,
							image: item.image,
							attr_val: item.attr_val,
							stock: item.stock,
							title: item.title,
							price: item.price,
							selected: true,
							number: item.number,
						})
					} else { //如果不存在同一id商家
						goodsList.push({
							firmId: item.firmId,
							firmName: item.firmName,
							selectedAll: false,
							goods: []
						})
						let i = goodsList.length - 1
						goodsList[i].goods.push({
							id: item.id,
							image: item.image,
							attr_val: item.attr_val,
							stock: item.stock,
							title: item.title,
							price: item.price,
							selected: true,
							number: item.number,
						})

					}

					//console.log(goodsList)
					this.$msg.updateCache(this.$msg.CARTLIST, goodsList) //存入缓存
				}, 300)






			}




		}
	}
</script>

<style lang="less">
	.content {
		width: 100%;
		font-size: 28rpx;

		image {
			width: 100%;
		}

		.commodity-list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: center;
			width: 100%;

			.commodity-item {
				width: 50%;
				box-sizing: border-box;
				padding: 20rpx;

				.commodity-img {
					width: 100%;
					position: relative;
					height: 380rpx;

					.img {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate3d(-50%, -50%, 0);
					}

					.firmName-box {
						position: absolute;
						top: 0rpx;
						line-height: 50rpx;
						background-color: rgba(0, 0, 0, 0.3);
						left: 0;
						width: 100%;
						color: #FFFFFF;
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}

				.commodity-text {
					width: 100%;

					.title {
						display: block;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}

					.price_box {
						display: flex;
						width: 100%;

						padding-top: 15rpx;
						box-sizing: border-box;
						justify-content: space-between;

						.c {
							color: #dadada;
						}
					}
				}

				.cart-box {
					overflow: hidden;
					position: relative;
					width: 100%;
					padding-top: 20rpx;
					height: 70rpx;

					.cart-icon {
						position: absolute;
						top: 20rpx;
						right: 0;
						width: 50rpx;
						height: 50rpx;
					}

					.number-box {
						position: absolute;
						top: 20rpx;
						right: -200rpx;
						opacity: 0;
						transition: all 0.4s;

						&.on {
							opacity: 1;
							right: 70rpx;

						}

						.number-sub,
						.number-num,
						.number-add {
							line-height: 50rpx;
							display: inline-block;
							min-width: 50rpx;
							text-align: center;
							border: 2rpx solid #ccc;
						}

						.number-num {
							min-width: 60rpx;
							border-left-style: none;
							border-right-style: none;
						}
					}

				}
			}
		}
	}
</style>
