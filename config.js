export default {
	secret: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	mongo: {
		development: {
			connectionString: 'mongodb://keningqiu:82239252yanQ@ds239911.mlab.com:39911/mmall'
		},
		production: {
			connectionString: 'mongodb://keningqiu:82239252yanQ@ds239911.mlab.com:39911/mmall'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://127.0.0.1:6379'
		},
		production: {
			connectionString: 'redis://127.0.0.1:6379',
		}
	},
	upload: {
		tmp : 'public/tmp/',
		path: 'public/uploads/'
	},
	superAdmin: {
		username: 'admin', 
		password: '123456', 
	},
	orderStatus: {
		'submitted': '已提交', 
		'canceled' : '已取消', 
		'confirmed': '已确认', 
		'finished' : '已完成', 
	},
	wechat: {
		appid: 'wx192b22a71f2b6ceb', 
		secret: 'b7f1891d12262290ed9a5510529bdd2d',
		mch_id: '1510812691',
		notify_url: 'https://wx.xingfangsiyuan.cn/api/common/wxpay',
		key: '136791034471322645509813679103xM',
	},

}