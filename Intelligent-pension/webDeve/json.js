/* 商品列表 */
const CommodityList = [{
		image: "https://i1.hdslb.com/bfs/archive/35c166909bc3618e58bc34bc7961e2cb5f76b61e.jpg",
		title: "华兰生物制药",
		attr_val: '清火淄麦片',
		price: 2.99,
		stock: 61,
		firmId: 1,
		id: 1,
		firmName: '药品',
	},
	{
		image: "https://img2.baidu.com/it/u=3851765273,156667839&fm=26&fmt=auto&gp=0.jpg",
		title: "血液检测",
		attr_val: '新乡市中心医院',
		price: 2.99,
		stock: 16,

		id: 3,
		firmId: 2,
		firmName: '检测',
	},
	{
		image: "https://img2.baidu.com/it/u=3851765273,156667839&fm=26&fmt=auto&gp=0.jpg",
		title: "乙肝检测",
		attr_val: '浙江二附院',
		price: 108.8,
		stock: 5,
		firmId: 2,
		id: 4,
		firmName: '检测',
	}, {
		image: "https://img2.baidu.com/it/u=3416054669,699038193&fm=26&fmt=auto&gp=0.jpg",
		title: "牙齿检测",
		attr_val: '科技学院-校医院',
		price: 265,
		stock: 88,
		firmId: 1,
		id: 5,
		firmName: '检测',
	}, {
		image: "https://img2.baidu.com/it/u=3416054669,699038193&fm=26&fmt=auto&gp=0.jpg",
		title: "新冠检测",
		attr_val: '科技学院-校医院',
		price: 422,
		stock: 137,
		firmId: 1,
		id: 6,
		firmName: '检测',
	}, {
		image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F24%2F93%2F01300000291746135523936142758_s.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623500133&t=061dc22aa3d245bc1ee0c07cc8e52382",
		title: "肺结合检测",
		attr_val: '科技学院-校医院',
		price: 179,
		stock: 95,
		id: 7,
		firmId: 1,
		firmName: '检测',
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		firmId: 1,
		firmName: '阿巴阿巴',
	},
	{
		id: 9,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		firmId: 1,
		firmName: '阿巴阿巴',
	},
	{
		id: 10,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		firmId: 1,
		firmName: '阿巴阿巴',
	},
	{
		id: 11,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		firmId: 1,
		firmName: '阿巴阿巴',
	},
	{
		id: 12,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		firmId: 2,
		firmName: '萨拉嘿',
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		firmId: 2,
		firmName: '萨拉嘿',
	},
	{
		id: 14,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		firmId: 2,
		firmName: '萨拉嘿',
	},
	{
		id: 15,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		firmId: 2,
		firmName: '萨拉嘿',
	},
	{
		id: 16,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		firmId: 2,
		firmName: '萨拉嘿',
	},
	{
		id: 17,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		firmId: 3,
		firmName: '亚麻得',
	},
	{
		id: 18,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		firmId: 3,
		firmName: '亚麻得',

	},
	{
		id: 19,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		firmId: 3,
		firmName: '亚麻得',

	}
]

/* 购物车 */
const cartList = [{
	firmId: 1,
	firmName: '阿巴阿巴',
	selectedAll: false,
	goods: [{
			id: 1,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '春装款 L',
			stock: 15,
			title: 'OVBE 长袖风衣',
			price: 278.00,
			selected: false,
			number: 1
		},
		{
			id: 3,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '激光导航 扫拖一体',
			stock: 3,
			title: '科沃斯 Ecovacs 扫地机器人',
			price: 1348.00,
			selected: false,
			number: 5
		},
		{
			id: 4,
			image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
			attr_val: 'XL',
			stock: 55,
			title: '朵绒菲小西装',
			price: 175.88,
			selected: false,
			number: 1
		},
		{
			id: 5,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
			attr_val: '520 #粉红色',
			stock: 15,
			title: '迪奥（Dior）烈艳唇膏',
			price: 1089.00,
			selected: false,
			number: 1
		},
		{
			id: 6,
			image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
			attr_val: '樱花味润手霜 30ml',
			stock: 15,
			title: "欧舒丹（L'OCCITANE）乳木果",
			price: 128,
			selected: false,
			number: 1
		},
		{
			id: 7,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
			attr_val: '特级 12个',
			stock: 7,
			title: '新疆阿克苏苹果 特级',
			price: 58.8,
			selected: false,
			number: 10
		},
		{
			id: 8,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '激光导航 扫拖一体',
			stock: 15,
			title: '科沃斯 Ecovacs 扫地机器人',
			price: 1348.00,
			selected: false,
			number: 1
		},
		{
			id: 9,
			image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
			attr_val: 'XL',
			stock: 55,
			title: '朵绒菲小西装',
			price: 175.88,
			selected: false,
			number: 1
		},
		{
			id: 10,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
			attr_val: '520 #粉红色',
			stock: 15,
			title: '迪奥（Dior）烈艳唇膏',
			price: 1089.00,
			selected: false,
			number: 1
		},
		{
			id: 11,
			image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
			attr_val: '樱花味润手霜 30ml',
			stock: 15,
			title: "欧舒丹（L'OCCITANE）乳木果",
			price: 128,
			selected: false,
			number: 1
		},
		{
			id: 12,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
			attr_val: '特级 12个',
			stock: 7,
			title: '新疆阿克苏苹果 特级',
			price: 58.8,
			selected: false,
			number: 10
		},
		{
			id: 13,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
			attr_val: '春装款/m',
			stock: 15,
			title: '女装2019春秋新款',
			price: 420.00,
			selected: false,
			number: 1

		}
	],
}, {
	firmId: 2,
	firmName: '萨拉嘿',
	selectedAll: false,
	goods: [{
			id: 1,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '春装款 L',
			stock: 15,
			title: 'OVBE 长袖风衣',
			price: 278.00,
			selected: false,
			number: 1
		},
		{
			id: 3,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '激光导航 扫拖一体',
			stock: 3,
			title: '科沃斯 Ecovacs 扫地机器人',
			price: 1348.00,
			selected: false,
			number: 5
		},
		{
			id: 4,
			image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
			attr_val: 'XL',
			stock: 55,
			title: '朵绒菲小西装',
			price: 175.88,
			selected: false,
			number: 1
		},
		{
			id: 5,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
			attr_val: '520 #粉红色',
			stock: 15,
			title: '迪奥（Dior）烈艳唇膏',
			price: 1089.00,
			selected: false,
			number: 1
		},
		{
			id: 6,
			image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
			attr_val: '樱花味润手霜 30ml',
			stock: 15,
			title: "欧舒丹（L'OCCITANE）乳木果",
			price: 128,
			selected: false,
			number: 1
		},
		{
			id: 7,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
			attr_val: '特级 12个',
			stock: 7,
			title: '新疆阿克苏苹果 特级',
			price: 58.8,
			selected: false,
			number: 10
		},
		{
			id: 8,
			image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
			attr_val: '激光导航 扫拖一体',
			stock: 15,
			title: '科沃斯 Ecovacs 扫地机器人',
			price: 1348.00,
			selected: false,
			number: 1
		},
		{
			id: 9,
			image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
			attr_val: 'XL',
			stock: 55,
			title: '朵绒菲小西装',
			price: 175.88,
			selected: false,
			number: 1
		},
		{
			id: 10,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
			attr_val: '520 #粉红色',
			stock: 15,
			title: '迪奥（Dior）烈艳唇膏',
			price: 1089.00,
			selected: false,
			number: 1
		},
		{
			id: 11,
			image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
			attr_val: '樱花味润手霜 30ml',
			stock: 15,
			title: "欧舒丹（L'OCCITANE）乳木果",
			price: 128,
			selected: false,
			number: 1
		},
		{
			id: 12,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
			attr_val: '特级 12个',
			stock: 7,
			title: '新疆阿克苏苹果 特级',
			price: 58.8,
			selected: false,
			number: 10
		},
		{
			id: 13,
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
			attr_val: '春装款/m',
			stock: 15,
			title: '女装2019春秋新款',
			price: 420.00,
			selected: false,
			number: 1

		}
	],



}];

export default {
	cartList,
	CommodityList,
}