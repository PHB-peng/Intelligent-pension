<template>
	<!-- 公司商品列表 -->
	<view class="pd-20 goods-list">
		<view v-if="empty==true" class="empty">
			<image src="@/static/img/emptyCart.jpg" mode="aspectFit"></image>
			<view class="empty-tips">
				空空如也
				<navigator class="navigator" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<!-- 			<view v-else class="empty-tips">
				空空如也
				<view class="navigator" >去登陆></view>
			</view> -->
		</view>

		<view class=" pd-20 row" v-for="(list, index) in goodsList" :key="index">
			<!-- 公司列表 -->
			<view class="top-firm-info">
				<view class="">
					<checkbox class="checkbox" color="#8a17c6" :checked="list.selectedAll" @click="firmSelectedAll(index)" />
				</view>
				<view class="firm-box">
					<text class="firm-name">{{list.firmName}}</text>

				</view>
			</view>

			<!-- 商品列表 -->
			<view class="firm-goods-list" v-for="(goods, i) in list.goods" :key="i">

				<text class="deleteData del-btn yticon icon-fork" @click="deleteDatas(index,i)">X</text>
				<view class="">
					<checkbox class="checkbox" color="#8a17c6" :checked="goods.selected" @click="selectedSole(index, i)" />
				</view>
				<image class="goods-img" :src="goods.image"></image>
				<view class="right-goods-box">
					<view class="goods-name">{{goods.title}}</view>
					<view class=" goods-spec"><text class="text">{{goods.attr_val}}</text></view>
					<view class="price-number-box">
						<view class="red-price">￥{{goods.price}}</view>

					</view>
					<view class="number-box">
						<text class="number-sub" @click="sub(index,i)">-</text>
						<text class="number-num">{{goods.number}}</text>
						<text class="number-add" @click="add(index,i)">+</text>
					</view>
				</view>



			</view>



		</view>
		<!-- 脚部菜单 -->
		<view class=" footer">
			<view class="check-box">
				<checkbox color="#8a17c6" v-if="goodsList.length!=0" :checked="isSelectedAllRow" @click="selectedAllRow" />
				<view class="goods-remove" v-if="selectedAllRowLength" @click="removeGoodsEvent">删除</view>
			</view>

			<view class="right-box">
				<text class="total-cost" v-if="sumTotalPrices > 0">总价格<text class="red-price">￥{{sumTotalPrices}}</text></text>

				<text class="account" @click="createOrder()">结算<text v-if="selectedAllRowLength">({{selectedAllRowLength}})</text></text>
			</view>
		</view>

	</view>
</template>
<script>
	export default {

		data() {
			return {
				goodsList: [],
				isSelectedAllRow: false, // 全选所有商品
				selectedAllRowList: [],
				selectedAllRowLength: 0,
				sumPrice: 0.00, // 总价格
				empty: true
			}
		},
		computed: {
			sumTotalPrices() {
				// 获取选择信息
				this.getSelectedInfoList()
				this.selectedAllRowLength = 0
				this.sumPrice = 0.00
				let list = this.selectedAllRowList[0]
				list.forEach((item, j) => {
					this.selectedAllRowLength += item.goods.length
					if (item.goods.length != 0) {
						let len = item.goods.length
						for (var i = 0; i < len; i++) {
							this.sumPrice = this.$msg.accMul(this.$msg.accMul(item.goods[i].price * item.goods[i].number) + this.sumPrice)
							//	this.sumPrice += item.goods[i].price * item.goods[i].number
						}
					}
				})
				this.computeSelectedAll() //判断是否选中
				return this.$msg.Decimal(this.sumPrice)
			}
		},
		watch: {
			//显示空白页
			goodsList(e) {

				let empty = e.length == 0 ? true : false;
				if (this.empty !== empty) {
					this.empty = empty;
				}
				// //////console.log(e)
			}
		},
		onShow() {
			// 首先从缓存中读取缓存中没有则直接向json文件读取保证不是空的

			this.loadData()
		},
		methods: {
			async loadData() {
				let goodsList = this.$msg.fetchCache(this.$msg.CARTLIST) //读取缓存
				if (goodsList) {
					this.goodsList = Array.from(goodsList)
					return
				}
				//this.goodsList = await Array.from(this.$json.cartList)
			},
			sub(m, n) { //减少
				if (this.goodsList[m].goods[n].number <= 1) {
					return
				}
				this.goodsList[m].goods[n].number--
				this.$msg.updateCache(this.$msg.CARTLIST, this.goodsList)
			},
			add(m, n) { //增加
				if (this.goodsList[m].goods[n].number >= this.goodsList[m].goods[n].stock) return
				this.goodsList[m].goods[n].number++
				this.$msg.updateCache(this.$msg.CARTLIST, this.goodsList)
			},
			// 选择单个商品 m 父  n 子
			selectedSole(m, n) {

				this.goodsList[m].goods[n].selected = !this.goodsList[m].goods[n].selected
				let a = this.goodsList[m].goods.filter((item) => !item.selected)
				this.goodsList[m].selectedAll = !Boolean(a.length)


			},
			// 全选商家所有商品
			firmSelectedAll(index, selecte) {
				let selectedAll = !this.goodsList[index].selectedAll
				if (selecte != undefined) {
					selectedAll = selecte
				}
				this.goodsList[index].selectedAll = selectedAll
				this.goodsList[index].goods.map((item) => item.selected = selectedAll)

			},
			// 全选所有行
			selectedAllRow() {
				this.isSelectedAllRow = !this.isSelectedAllRow
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					this.firmSelectedAll(i, this.isSelectedAllRow)
				}
			},
			//返回当前没有选中的商品
			NoSelectedItems() {
				let lists = JSON.parse(JSON.stringify(this.goodsList))
				let len = lists.length
				lists.forEach((item, i) => {
					item.goods = item.goods.filter((item) => !item.selected)
					if (item.goods.length == 0) {
						lists[i] = null
					}
				})
				lists = lists.filter(item => item)
				return lists
			},
			// 判断全部商品选择
			computeSelectedAll() {
				let len = this.goodsList.length
				for (let i = 0; i < len; i++) {
					let selecteds = this.goodsList[i].goods.filter((item) => !item.selected)
					if (selecteds.length > 0) {
						this.goodsList[i].selectedAll = false
					} else {
						this.goodsList[i].selectedAll = true
					}
				}
				let goodsList = this.goodsList.filter((item) => !item.selectedAll)
				this.isSelectedAllRow = goodsList.length ? false : true
			},
			// 获取选择信息
			getSelectedInfoList() {
				let len = this.goodsList.length
				this.selectedAllRowList = []
				let goodsList = JSON.parse(JSON.stringify(this.goodsList))
				for (let i = 0; i < len; i++) {
					goodsList[i].goods = goodsList[i].goods.filter((item) => item.selected)
				}
				this.selectedAllRowList.push(goodsList)
			},
			//提交
			createOrder() {
				if (!this.selectedAllRowLength) {
					this.$msg.msg('请选择最少一种商品')
					return
				}
				console.log('选中的商品')
				console.log(this.selectedAllRowList) //选中的商品

				console.log('未选中的商品')
				let NoSelectedItems = this.NoSelectedItems()
				console.log(NoSelectedItems) //未选中的商品
			},

			//删除单个商品
			deleteDatas(index, i) {
				let len = this.goodsList[index].goods.length
				if (len > 1) {
					this.goodsList[index].goods.splice(i, 1)
				} else {
					this.goodsList.splice(index, 1)
				}
				this.$msg.updateCache(this.$msg.CARTLIST, this.goodsList)
			},
			//删除选中的商品
			removeGoodsEvent() {
				this.goodsList = this.goodsList.filter((item) => !item.selectedAll)
				let len = this.goodsList.length
				for (let i = 0; i < len; i++) {
					this.goodsList[i].goods = this.goodsList[i].goods.filter((item) => !item.selected)
				}
				this.$msg.updateCache(this.$msg.CARTLIST, this.goodsList) //存入缓存

			}
		}
	}
</script>
<style lang="less" scoped>
	page {
		padding-bottom: 110rpx;
	}

	/deep/checkbox .wx-checkbox-input,
	/deep/uni-checkbox .uni-checkbox-input {
		border-radius: 50% !important;
		height: 32rpx;
		width: 32rpx;
		margin-top: -8rpx;
		vertical-align: middle;
	}

	.empty {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		padding-bottom: 100upx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: #fff;

		image {
			width: 240upx;
			height: 160upx;
			margin-bottom: 30upx;
		}

		.empty-tips {
			display: flex;
			font-size: 28rpx;
			color: #D2359C;

			.navigator {
				color: #FF0000;
				margin-left: 16upx;
			}
		}
	}

	.red-price {
		color: #F0250F;
	}

	.pd-20 {
		padding: 20rpx;
		box-sizing: border-box;
	}

	.goods-list {
		width: 100%;

		font-size: 28rpx;

		.row {
			box-shadow: 0rpx 5rpx 20rpx rgba(#000, .1);
			margin-bottom: 20rpx;

			.top-firm-info {
				display: flex;
				align-items: center;
				height: 60rpx;
				line-height: 60rpx;

				.checkbox {}

				.firm-box {
					margin-left: 10rpx;

					.firm-name {
						font-weight: 600;
					}
				}
			}

			.firm-goods-list {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 20rpx 0;
				padding-left: 10rpx;
				border-bottom: 1px #DADADA dashed;
				position: relative;

				&:last-child {
					border-bottom: none;
				}

				.deleteData {
					position: absolute;
					right: 0rpx;
					top: 0rpx;
					font-size: 32rpx;
					padding: 20rpx;
					padding-top: 10rpx;
					color: #ff0000;
					box-sizing: border-box;
				}

				.goods-img {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}

				.right-goods-box {
					flex: 1;
					margin-left: 20rpx;

					.goods-name {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						line-height: 40rpx;
					}

					.goods-spec {
						.text {
							padding: 0 10rpx;
							border-radius: 10rpx;
							background-color: #f3f3f3;
							color: #a7a7a7;
						}
					}


				}

				.price-number-box {
					display: flex;
					line-height: 46rpx;
					justify-content: space-between;



				}

				.number-box {
					position: absolute;
					right: 10rpx;
					bottom: 10rpx;

					.number-sub,
					.number-num,
					.number-add {
						line-height: 50rpx;
						display: inline-block;
						min-width: 50rpx;
						text-align: center;
						border: 2rpx solid #ccc;
					}

					.number-sub {}

					.number-num {
						min-width: 60rpx;
						border-left-style: none;
						border-right-style: none;
					}

					.number-add {}
				}




			}
		}
	}

	.footer {
		/*#ifdef H5 */
		margin-bottom: 100rpx;
		/* #endif */
		border-radius: 16rpx;
		position: fixed;
		left: 20rpx;
		right: 20rpx;
		bottom: 20rpx;
		height: 100rpx;
		z-index: 95;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, .5);
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;

		.check-box {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.goods-remove {
				border: solid 2rpx #f06c7a;
				color: #f06c7a;
				padding: 0 30rpx;
				height: 50rpx;
				border-radius: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}


		.right-box {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.total-cost {
				padding: 0 10rpx;
			}

			.account {
				color: #FFFFFF;
				padding: 0 38rpx;
				margin: 0;
				border-radius: 100px;
				height: 66rpx;
				line-height: 66rpx;
				background: #ff3300;
				box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
			}
		}
	}
</style>
