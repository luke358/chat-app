import $U from '@/common/free-lib/utils.js'
	
export default {
	onShow() {
		let token = $U.getStorage('token')
		if(!token) {
			return uni.reLaunch({
				url:'/pages/common/login/login'
			})
		}
	},
	methods:{
		navigate(path){
			uni.navigateTo({
				url:'/pages/' + path
			})
		},
		backToast(){
			// uni.navigateBack({
			// 	delta:1
			// })
			uni.showToast({
				title:'非法参数',
				icon:'none'
			})
			uni.navigateTo({
				url:'/pages/tabbar/index/index.vue'
			})
		}
	}
}