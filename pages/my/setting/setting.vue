<template>
	<view class="page">
		<free-nav-bar :title="true" title="设置" showBack :showRight="false"></free-nav-bar>
		
		<!-- 退出登陆 -->
		<free-divider></free-divider>
		<view class="py-3 flex align-center justify-center bg-white" hover-class="bg-light" @click="logout">
			<text class="font-md text-primary">退出登陆</text>
		</view>
		
	</view>
</template>

<script>
	import $H from '@/common/free-lib/request.js'
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeDivider from '@/components/free-ui/free-divider.vue'
	export default {
		components:{
			freeNavBar,
			freeDivider
		},
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				$H.post('/logout').then(res => {
					this.$store.dispatch('logout')
					uni.showToast({
						title: '退出登陆成功',
						icon:'none'
					});
				})
			}
		}
	}
</script>

<style>

</style>
