<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS-NVUE
			//公共图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')"
			});
			// #endif
		
		//初始化录音管理器
			this.$store.commit('initRECORD')
			console.log('App Launch')
			
			// 初始化登陆状态
			this.$store.dispatch('init')
		},
		onShow: function() {
			this.$store.dispatch('reconnect')
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// @import url('./common/css/style/style.scss');
	/*每个页面公共css */
	// @import url("./common/css/icon/iconfont.css");
	@import './common/free.css';
	@import './common/common.css';
	/* #ifndef APP-PLUS-NVUE */
	@import './common/free-icon.css';
	/* #endif */
</style>
