//常用方法集合
export default {
	/**
	 * toast提示
	 */
	msg(title, duration = 1500, mask = false, icon = 'none') {
		if (Boolean(title) === false) {
			return;
		}
		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	},
	//解决js计算精度丢失问题 accMul(1+1)
	accMul(f, digit) {
		if (digit == undefined) digit = 2
		var m = Math.pow(10, digit);
		return Math.round(f * m, 10) / m;
	},
	//保留两位小数不四舍五入
	Decimal(x) {
		var s_x = x.toString();
		var pos_decimal = s_x.indexOf('.');
		if (pos_decimal < 0) {
			pos_decimal = s_x.length;
			s_x += '.';
		}
		while (s_x.length <= pos_decimal + 2) {
			s_x += '0';
		}
		return s_x;
	},

	
	//seconds 缓存的存储天数
	//key 缓存的值
	fetchCache: (key) => {
		let timestamp = Date.parse(new Date()) / 1000
		let list = null
		try {
			const value = uni.getStorageSync(key) || "";
			if (value) {
				var tmp = value.split("|%$#^|")
				if (tmp.length > 1) { //说明是存储带有效期的
					if (!tmp[1] || timestamp >= tmp[1]) { //key已失效
						uni.removeStorageSync(key) //删除当前key 
					} else { //没有失效返回原本的
						list = JSON.parse(tmp[0])
					}
				} else {
					list = JSON.parse(tmp[0])
				}
			}
		} catch (e) {
			// error
		} finally {
			return list
		}
	},
	//缓存,默认有效期1天
	updateCache: (key, list, seconds) => {
		var timestamp = Date.parse(new Date()) / 1000
		//设置缓存
		if (!seconds) { seconds = (3600 * 24 * 1)}
		let  expire = timestamp + seconds
	
		list = JSON.stringify(list) + "|%$#^|" + expire
		uni.setStorageSync(key, list);
	
	},
	// 从本地缓存中同步移除指定 key。
	removeCache: (key) => {
		try {
			uni.removeStorageSync(key);
		} catch (e) {
	
		}
	},
	
	CARTLIST:'cartList'


};
